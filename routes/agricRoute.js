const express = require ("express");
const router = express.Router();



router.get("/agric",(req,res)=>{
    res.render("Agricofficer")
})

module.exports = router