const {Ads} = require('./../../../models/Ads');
const _= require("lodash");


// .populate({path:"IDSong",select:'_id SongName SongImage SongSinger'})
module.exports.getAds =(req,res,next)=>{
    Ads.find()
        .then(ads=>res.status(200).json(ads))
        .catch(err=>res.status(500).json(err))
}

module.exports.createAds=(req,res,next)=>{
    const {IDSong,SongName,SongImage,AdsImage,AdsContent} = req.body;
 
    Ads.create({IDSong,SongName,SongImage,AdsImage,AdsContent})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}

module.exports.deleteAdsById=(req,res,next)=>{
    const {id} = req.params;
    
    Ads.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}