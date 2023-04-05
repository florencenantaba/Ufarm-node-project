const express = require ("express");
const router = express.Router();

router.get("/project",(req,res)=>{
    res.render("project")
});

module.exports = router