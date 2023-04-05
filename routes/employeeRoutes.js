const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("employees")
})

router.get("/contact", (req,res)=>{
    res.render("contact")
})

// node sees files in modules

module.exports = router



