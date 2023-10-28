require("dotenv").config();
const express = require("express");
const database = require("mongoose");
const app = express();
const products = require("./routes/products");
app.use(express.json());
app.use("/API/Products", products);
const cors = require('cors');
app.use(cors());
database.connect(process.env.Mongo_url).then(()=>
{
    app.listen(process.env.PORT,()=>
    {
        console.log("connected to the database and listening at PORT");
    })
}).catch((error)=>{
    console.log(error);
})

