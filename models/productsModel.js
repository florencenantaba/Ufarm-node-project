const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    productimage:{
        type:String,
        
    },
    amount: {
        type:Number,
        
    },
    

})

module.exports = mongoose.model("Products", productsSchema)