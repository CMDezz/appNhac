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


//get song by ID
module.exports.getSongById=(req,res,next)=>{
    const {id} = req.params;

    Song.findById(id)
        .then((song)=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err)) 
}


//get song by Name 
module.exports.findSongByName=(req,res,next)=>{
    const {Name} = req.headers;
    console.log(req.header)

    Song.findById(id)
        .then((song)=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err)) 
}

//them genresID
module.exports.addMoreSongs = (req,res,next)=>{
    const {id} = req.params;
    const IDGenre = req.body.IDGenre

 
    Song.findById(id)
        .then(Song=>{
            if(!Song) Promise.reject("Song not found")
            
            Song.IDGenre.push(...IDGenre)
            return Song.save()
        })
        .then(Song=>res.status(200).json(Song))
        .catch(err=>res.status(500).json(err))
    

}

//mostlike songs
module.exports.get5LikestSongs = (req,res,next)=>{
    Song.find()
        .sort({Likes:-1})
        .limit(5)
        .then(Song=>res.status(200).json(Song))
        .catch(err=>res.status(500).json(err))
}



 //update like of a song
module.exports.updateLike = (req,res,next)=>{
    const {luotthich,idbaihat} =req.body;
    Song.findById({_id:idbaihat})
        .then(Song=>{
             Song.Likes += luotthich
             return Song.save();
        })
        .then(Song=>res.status(200).json({message:"Like success!"}))
        .catch(err=>res.status(500).json(err))
}

module.exports.findSong = (req,res,next)=>{
    const {tukhoa} = req.body;
    var re = new RegExp(tukhoa,"gi");
    Song.find({SongName:re})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}

