
require("dotenv").config();
const express = require("express");
const database = require("mongoose");
const app = express();
const products = require("./routes/products");
app.use(express.json());
app.use("/API/Products", products);
const cors = require('cors');
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

database.connect(process.env.Mongo_url).then(()=>
{
    app.listen(process.env.PORT,()=>
    {
        console.log("connected to the database and listening at PORT");
    })
}).catch((error)=>{
    console.log(error);
})

