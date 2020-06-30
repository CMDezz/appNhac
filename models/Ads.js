const mongoose = require("mongoose");


const AdsSchema = new mongoose.Schema({
    IDSong : {type:mongoose.Schema.Types.ObjectId,ref:"Song",required:true},
    SongName : {type:String,required:true},
    SongImage : {type:String,required:true},
    AdsImage : {type:String,required:true},
    AdsContent : {type:String,required:true}
})

const Ads = mongoose.model("Ads",AdsSchema,"Ads");

module.exports ={
    Ads,AdsSchema
}