const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./Database/database");
const cloudinary = require('cloudinary');

//Handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1);
})

//Config
dotenv.config({path : "backend/config/config.env"});

// Database connection
connectDatabase();

// cloudinary setup
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || "dzg4mxyle",
    api_key: process.env.CLOUDINARY_API_KEY || "886917765931776",
    api_secret: process.env.CLOUDINARY_API_SECRET ||"jA2UM9PRkpp4UUv_zpXKPlxXs7M",
  });
  


const server = app.listen(process.env.PORT || 4000,()=>{
    console.log(`The server is working smooth on http://localhost:${process.env.PORT}`);
})


//Unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})