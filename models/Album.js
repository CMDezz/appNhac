const mongoose = require('mongoose');


const AlbumSchema = new mongoose.Schema({
    IDSongs : [{type:mongoose.Schema.Types.ObjectId,ref:"Song",required:true}],
    AlbumName : {type:String,required:true},
    AlbumSingerName:{type:String,required:true},
    AlbumImage : {type:String,required:true}
})

const Album = mongoose.model("Album",AlbumSchema,"Album");

module.exports={
    Album,AlbumSchema
}