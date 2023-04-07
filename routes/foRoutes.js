const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const User= require("../models/userModel")


router.get("/fodash",connectEnsureLogin.ensureLoggedIn(), async (req,res)=>{
    let farmerWard= req.user["ward"]
    console.log("farmer ward is:", farmerWard)
    if(req.user.role == "fo"){
        try{
            let activeFarmers= await User.countDocuments();
            let newUrbanFarmers= await User.find({role: "uf", ward: farmerWard})

            res.render("foDash", {
                urbanFarmers: newUrbanFarmers,
                activeFarmers})
        }catch(error){
            res.status(400).send("could not find framers in the database")
        }
        
}else{res.redirect("/login")}
});



module.exports= router