// start the server

const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");

// load environment variable
dotenv.config({path: "./config/config.env"}) 

//connect to db
connectDatabase();

// start the server

PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`Server started on PORT: ${PORT}`)
})