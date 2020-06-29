const mongoose = require('mongoose')

const PlaylistSchema = mongoose.Schema({
    IDSongs : [{type:mongoose.Schema.Types.ObjectId,ref:"Song",required:true}],
    PlaylistName : {type:String,required:true},
    PlaylistImage : {type:String,required:true},
    PlaylistIcon:{type:String,required:true},
})

const Playlist = mongoose.model("Playlist",PlaylistSchema,"Playlist");

module.exports={
    Playlist,PlaylistSchema
}