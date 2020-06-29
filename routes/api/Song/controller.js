const {Song} = require('./../../../models/Song')


module.exports.getSong=(req,res,next)=>{
    Song.find()
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}

module.exports.createSong=(req,res,next)=>{
    const {IDGenre,SongName,SongImage,SongSinger,SongLink} = req.body;
 
    Song.create({IDGenre,SongName,SongImage,SongLink,SongSinger})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}
module.exports.deleteSongById=(req,res,next)=>{
    const {id} = req.params;

    Song.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}
