const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productsSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
    },
    img4: {
      type: String,
    },
    img5: {
      type: String,
    },
    mpr: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    buyLink: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productsSchema);
