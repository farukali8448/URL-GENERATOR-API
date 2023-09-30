require("dotenv").config();
const express = require("express");
const app = express();


//! Express.json-----------------
app.use(express.json());


//!DATABASE Connection
require("./db/conn");


//! PORT
const PORT = process.env.PORT || 3000;

//!Use Router--------


//! Page Not Found-------------
app.use("*",(req,res,next)=>{
    res.status(404).json({error:false,message:"404 Page Not Found"});
})

//! error handling middleware ------------------

app.use((error,req,res,next)=>{
    res.status(401).json({error:true,message:error.message});
})


app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server running on PORT ${PORT}`);
})