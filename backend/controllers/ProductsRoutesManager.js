const products = require("../models/products_outline");
const validate = require("mongoose");

async function get_all_products_sorted(req, res) {
  const product = await products.find({}).sort({ createdAt: -1 });
  res.status(200).json(product);
  console.log("All the products were sent");
}
async function get_all_products(req, res) {
  const product = await products.find({});
  res.status(200).json(product);
  console.log("All the products were sent");
}
async function get_one_product(req, res) {
  const { id } = req.params;
  if (!validate.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "There is no product with this ID" });
  }
  const single = await products.findById(id);
  if (!single) {
    return res.status(404).json({ error: "There is no product with this ID" });
  }
  res.status(200).json(single);
}
async function get_one_category(req, res) {
  const { category } = req.params;
  const single = await products.find({ category });
  if (!single) {
    return res
      .status(404)
      .json({ error: "There is no product with this Category" });
  }
  res.status(200).json(single);
}
async function add_one_product(req, res) {
  const {
    title,
    description,
    img1,
    img2,
    img3,
    img4,
    img5,
    mpr,
    price,
    buyLink,
    quantity,
    category,
  } = req.body;
  try {
    const curr = await products.create({
      title,
      description,
      img1,
      img2,
      img3,
      img4,
      img5,
      mpr,
      price,
      buyLink,
      quantity,
      category,
    });
    res.status(200).json(curr);
  } catch (error) {
    res.status(400).json({ error: "Product could not be created" });
    console.log(error);
  }
}
async function delete_one_product(req, res) {
  const { id } = req.params;
  if (!validate.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "The item to be deleted doesn't exists" });
  }
  const del = await products.findOneAndDelete({ _id: id });
  if (!del) {
    return res
      .status(404)
      .json({ error: "The item to be deleted doesn't exists" });
  }
  res.status(202).json(del);
}
async function reduce_quantity(req, res) {
  const { id } = req.params;
  if (!validate.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "The item to be updated doesn't exists" });
  }
  const update = await products.findById(id);
  update.quantity -= 1;
  await update.save();
  return update;
}
async function inc_quantity(req, res) {
  const { id } = req.params;
  if (!validate.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "The item to be updated doesn't exists" });
  }
  const update = await products.findById(id);
  update.quantity += 1;
  await update.save();
  return update;
}
module.exports = {
  get_all_products_sorted,
  get_all_products,
  get_one_product,
  get_one_category,
  add_one_product,
  delete_one_product,
  reduce_quantity,
  inc_quantity,
};
