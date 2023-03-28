const express = require('express');
const router = express.Router();
const Register =require("../models/registerModel")
router.get("/register", (req,res)=>{
    res.render("register")
});





router.post("/register", async(req,res)=>{
    try{
        const register = new Register(req.body)
        await register.save()
        res.redirect("/students")
        console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
})
// we redirect to a path and render to a file
router.get("/students", async(req,res)=>{
    try{
        let items = await Register.find();
        // console.log(items)
        res.render("students",{students:items})
    }
    catch(err){
        console.log(err)
        res.send("failed to retrive students details")
    }
});

module.exports = router
