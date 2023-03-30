const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const mongoose= require("mongoose");
const bodyParser= require("body-parser");

// we are creating an environment
// require("dotenv").config();
const config = require("./config/database");
const employeeRoutes = require("./routes/employeeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");
const agricRoutes = require("./routes/agricRoutes");
const registerRoutes = require("./routes/registerRoutes");
const signupRoutes= require("./routes/signupRoutes");
// const {config}  = require('process');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


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


app.use("/",employeeRoutes);
app.use("/",aboutRoutes);
app.use("/",contactRoutes);
app.use("/",agricRoutes);
app.use("/",registerRoutes);
app.use("/",signupRoutes);








// this should always be the last line in your server file
app.listen(3000, () => console.log('listening on port 3000'));



