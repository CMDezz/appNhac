const mongoose = require('mongoose')

const TopicSchema = new mongoose.Schema({
    TopicName :{type:String,required:true},
    TopicImage:{type:String,required:true}
})

const Topic = mongoose.model("Topic",TopicSchema,"Topic");

module.exports={
    Topic,TopicSchema
}