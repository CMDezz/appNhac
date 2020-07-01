const {Album} = require('./../../../models/Album')
const _ = require('lodash')
const { isEmpty } = require('lodash')

module.exports.getGenre=(req,res,next)=>{
    Album.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}

module.exports.createGenre=(req,res,next)=>{
    const {AlbumName,AlbumSingerName,AlbumImage,IDSongs} = req.body;
 
    Album.create({IDSongs,AlbumName,AlbumSingerName,AlbumImage})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}

module.exports.deleteAlbumById=(req,res,next)=>{
    const {id} = req.params;
    console.log(id)
    Album.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}
//update tat ca, 
module.exports.updateAlbumById = (req,res,next)=>{
    const {id} = req.params;

 
    Album.findById(id)
        .then(album=>{
            if(!album) Promise.reject("Album not found")

            Object.keys(req.body).forEach(key=>album[key]=req.body[key])
            return album.save()
        })
        .then(album=>res.status(200).json(album))
        .catch(err=>res.status(500).json(err))
    

}

//them songs vao IDSongs
module.exports.addMoreSongs = (req,res,next)=>{
    const {id} = req.params;
    const songs = req.body.IDSongs

 
    Album.findById(id)
        .then(album=>{
            if(!album) Promise.reject("Album not found")
            
            album.IDSongs.push(...songs)
            return album.save()
        })
        .then(album=>res.status(200).json(album))
        .catch(err=>res.status(500).json(err))
    

}