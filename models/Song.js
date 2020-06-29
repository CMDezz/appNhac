const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    IDGenre : [{type:mongoose.Schema.Types.ObjectId,ref:"Genre"}],
    SongName : {type:String,required:true},
    SongImage:{type:String,required:true},
    SongSinger:{type:String,required:true},
    SongLink : {type:String,required:true}
})

const Song = mongoose.model("Song",SongSchema,"Song");

module.exports={
    Song,SongSchema
}