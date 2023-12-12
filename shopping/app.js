const express = require('express')
const connectDB = require('./DB/connect')
const item = require('./routes/item') 
const errorHandlerMiddleWare = require('./Middleware/errorHandle')
require('dotenv').config();
const notFound = require('./Middleware/notfound')

const app = express();

const  port = 5000;

app.use(express.json());
app.use('/api/amazon',item)
app.use(errorHandlerMiddleWare);


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,() =>{
            console.log(`server is  listen at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
    
};

start();