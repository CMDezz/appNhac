const mongoose = require("mongoose");


const AdsSchema = new mongoose.Schema({
    IDSong : [{type:mongoose.Schema.Types.ObjectId,ref:"Song",required:true}],
    AdsImage : {type:String,required:true},
    AdsTitle :{type:String,required:false},
    AdsContent : {type:String,required:true}
})

const Ads = mongoose.model("Ads",AdsSchema,"Ads");

module.exports ={
    Ads,AdsSchema
}