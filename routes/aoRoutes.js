const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Products = require("../models/productsModel")
const multer = require("multer")

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"public/products")}, 
    filename:(req,file,cb)=>{cb(null,file.originalname)}})
let imageupload = multer({storage:storage})  // creating an instance in multer
// connectEnsureLogin.ensureLoggedIn(),
router.get("/aodash", (req,res)=>{
    res.render("aoDash")
});
router.post("/aodash", imageupload.single("productimage"),(req,res)=>{  // handling a request
    console.log(req.file)
    try {
      const products= new Products(req.body)  
      products.productimage= req.file.originalname  //alter and change the name of the product
      products.save()
      res.redirect("/aodash")
    } catch (error) {
        res.send("upload failed ${error}")
    }
    // res.render("aoDash")
});



module.exports= router