const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({
    IDTopics : [{type:mongoose.Schema.Types.ObjectId,ref:"Topic",required:false}],
    GenreName : {type:String,requried:true},
    GenreImage:{type:String,required:true}
})


const Genre = mongoose.model("Genre",GenreSchema,"Genre");

module.exports={
    Genre,GenreSchema
}