const {Album} = require('./../../../models/Album')


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