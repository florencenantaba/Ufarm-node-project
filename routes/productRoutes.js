const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Products = require("../models/productsModel")
const multer = require("multer")

// let storage = multer.diskStorage({destination:"/public/images", filename:(req,file,cb)=>{cb(null,file.originalname)}})
// let imageupload = multer({storage:storage})
// connectEnsureLogin.ensureLoggedIn(),
router.get("/products", async (req,res)=>{
    try {
        const products = await Products.find()
        console.log(products)
        res.render("product", {data:products})
    }
    catch (error) {
        res.send("failed to retrieve")
    }
});




module.exports= router