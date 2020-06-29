const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');

mongoose.connect(config.mongodbUri,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connected to MongoDb successfully!"))
    .catch(err=>console.log(err))


const app = express();

app.use(express.json());

app.use('/api',require('./routes/api'))

const Port = config.port || process.env.PORT;

app.listen(Port,()=>{
    console.log(`App is running on port: ${Port}`)
})