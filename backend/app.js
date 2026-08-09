// configure express and middleware

//import packages
//create express app
//                  client=> app => route => response
// configure middleware
// middleware is a function that runs btwn the req and response
// export the app
 
const express = require("express")
const app =express()

const cors = require("cors")

app.use(cors());
app.use(express.json())

module.exports=app