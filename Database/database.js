const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://imintrouble0117:d3x8hoHojSXMEg63@cluster0.iqj7pyl.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
       
    }).then((data) => {
        console.log(`MonogoDB connected with server ${data.connection.host}`);
    }).catch((err) => {
        console.log("Error : ", err);
    })

}

mongoose.set('strictQuery', false);

const cxn = mongoose.connection

cxn
.on("open", () => console.log("mongoose is connected"))
.on("close", () => console.log("mongoose is disconnected"))
.on("error", (error) => console.log(error))


module.exports = connectDatabase;
