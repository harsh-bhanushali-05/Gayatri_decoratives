const express=require("express");
const router=express.Router();

const {
    get_all_products_sorted,
get_all_products,
get_one_product,
get_one_category,
add_one_product,
delete_one_product,
reduce_quantity,
inc_quantity
}=require("../controllers /ProductsRoutesManager");

router.get("/",get_all_products);
router.get("/New",get_all_products_sorted);
router.get("/:id",get_one_product);
router.get("/cat/:category",get_one_category);
router.post("/",add_one_product);
router.post("/:id",delete_one_product);
router.post("/update/:id",reduce_quantity);
router.post("/incquantity/:id",inc_quantity);
module.exports=router;
