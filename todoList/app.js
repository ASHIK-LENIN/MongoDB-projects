const express = require('express');
const tasks= require('./Routes/tasks')
const connectDB = require('./DB/connect')
const app = express();
require('dotenv').config();
const notFound = require('./MiddleWare/notFound')
const errorHandlerMiddleWare = require('./MiddleWare/errorHandler')

const  port = 3000;

app.use(express.json());
app.use('/api/v1/tasks',tasks);
app.use(notFound);
app.use(errorHandlerMiddleWare);

const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI);
        app.listen(port,() =>{
            console.log(`server listening at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();