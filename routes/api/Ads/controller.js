const {Ads} = require('./../../../models/Ads');
const _= require("lodash");


// .populate({path:"IDSong",select:'_id SongName SongImage SongSinger'})
module.exports.getAds =(req,res,next)=>{
    Ads.find()
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

module.exports.getSongOfaAds=(req,res,next)=>{
    const {idquangcao} = req.body;
    let ar = []
    Ads.findById({_id:idquangcao})
    .populate("IDSong")
        .then(ads=>{
            ar.push(...ads.IDSong)
            return ar
        })
        .then((songs)=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
        
}


