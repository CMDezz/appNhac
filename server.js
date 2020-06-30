const express = require('express');
const mongoose = require('mongoose');
var {ranPerDay} = require('./routes/api/Playlist/controller')
const config = require('./config/index.js');

mongoose.connect(config.mongodbUri,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connected to MongoDb successfully!"))
    .catch(err=>console.log(err))


const app = express();

app.use(express.json());

app.use('/api',require('./routes/api'))

const Port = process.env.PORT || config.port;


app.listen(Port,()=>{
    console.log(`App is running on port: ${Port}`)
})

 
// Make a request for a user with a given ID




