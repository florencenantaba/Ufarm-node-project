const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    productimage:{
        type:String,
        
    },
    amount: {
        type:Number,
        
    },

    // coaching    product_name: {
        type:String,
        
    
    status: {
        type:String, 
        default:"pending"
    },
    

})

module.exports = mongoose.model("Products", productsSchema)