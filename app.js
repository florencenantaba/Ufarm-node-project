const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const mongoose= require("mongoose")
// we are creating an environment
// require("dotenv").config();
const config = require("./config/database")
const employeeRoute = require("./routes/employeeRoute")
const aboutRoute = require("./routes/aboutRoute")
const contactRoute = require("./routes/contactRoute")
const agricofficer = require("./routes/agricRoute");
// const {config}  = require('process');

// creating a connection between the controller and database
mongoose.connect(config.database,{
    //useNEW collects data then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db= mongoose.connection
// checking if db has connected
db.once("open", ()=>{
console.log("connected to db")
})
db.on("error",(err)=>{
console.error(err)
})

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));




// //_dirname:it will resolve to your project folder
// router.get("/", (req,res)=>{
//  res.sendFile(path.join(__dirname + "/index.html"))
// });

// router.get("/about", (req,res)=>{
//   res.sendFile(path.join(__dirname + "/about.html"))
// });

// // add the router
// app.use("/", router)
// app.use("/about",router)


app.use("/",employeeRoute)
app.use("/",aboutRoute)
app.use("/",contactRoute)
app.use("/",agricofficer)







// this should always be the last line in your server file
app.listen(3000, () => console.log('listening on port 3000'));



