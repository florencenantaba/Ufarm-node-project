const express = require ("express");
const router = express.Router();



router.get("/signup",(req,res)=>{
    res.render("signup2")
});

module.exports = router