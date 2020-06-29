const {Genre} = require('./../../../models/Genre')


module.exports.getGenre=(req,res,next)=>{
    Genre.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}

module.exports.createGenre=(req,res,next)=>{
    const {IDTopics,GenreName,GenreImage} = req.body;
 
    Genre.create({IDTopics,GenreName,GenreImage})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}


module.exports.deleteGenreById=(req,res,next)=>{
    const {id} = req.params;
    console.log(id)
    Genre.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}