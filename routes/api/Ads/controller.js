const {Ads} = require('./../../../models/Ads');
const _= require("lodash");


module.exports.getAds =(req,res,next)=>{
    Ads.find()
    .populate("IDSong")
        .then(ads=>res.status(200).json(ads))
        .catch(err=>res.status(500).json(err))
}
module.exports.createAds=(req,res,next)=>{
    const {IDSong,AdsImage,AdsContent} = req.body;
 
    Ads.create({IDSong,AdsImage,AdsContent})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}

module.exports.deleteAdsById=(req,res,next)=>{
    const {id} = req.params;
    
    Ads.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}