const {Playlist} = require('./../../../models/Playlist')


module.exports.getPlaylist=(req,res,next)=>{
    Playlist.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}

module.exports.createPlaylist=(req,res,next)=>{
    const {IDSongs,PlaylistName,PlaylistImage,PlaylistIcon} = req.body;
 
    Playlist.create({IDSongs,PlaylistName,PlaylistImage,PlaylistIcon})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}


module.exports.deletePlaylistById=(req,res,next)=>{
    const {id} = req.params;

    Playlist.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}