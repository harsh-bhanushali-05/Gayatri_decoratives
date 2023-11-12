const express=require("express");
const router=express.Router();
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://65509721ac022f55419e8de0--fabulous-torte-c69744.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Enable preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).send();
    } else {
        next();
    }
});
const {
    get_all_products_sorted,
get_all_products,
get_one_product,
get_one_category,
add_one_product,
delete_one_product,
reduce_quantity,
inc_quantity
}=require("../controllers/ProductsRoutesManager");

router.get("/",get_all_products);
router.get("/New",get_all_products_sorted);
router.get("/:id",get_one_product);
router.get("/cat/:category",get_one_category);
router.post("/",add_one_product);
router.post("/:id",delete_one_product);
router.post("/update/:id",reduce_quantity);
router.post("/incquantity/:id",inc_quantity);
module.exports=router;
