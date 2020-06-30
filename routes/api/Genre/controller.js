const {Genre} = require('./../../../models/Genre')


module.exports.getGenre=(req,res,next)=>{
    Genre.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .populate({path:"IDTopics",select:"_id TopicName"})
    
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}
//get only name
module.exports.getListNameGenre=(req,res,next)=>{
    let arr = []
    Genre.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .populate({path:"IDTopics",select:"_id TopicName"})
        .then(songs=>{
            songs.map(s=>arr.push(`${s.GenreName} -- id : ${s._id}`))
            return arr
        })
        .then(arr=>res.status(200).json(arr))
        .catch(err=>res.status(500).json(err))
}
//get genres of a topic 
module.exports.getTopic=(req,res,next)=>{
    const {id} = req.params;

    Genre.find({IDTopics:id})
    .populate({path:"IDTopics",select:"_id TopicName"})
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}



// .populate({path:"IDSong",select:'_id SongName SongImage SongSinger'})

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



module.exports.deleteGenreById=(req,res,next)=>{
    const {id} = req.params;
    Genre.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}
module.exports.deleteAllGenre=(req,res,next)=>{
    // const {id} = req.params;
    // console.log(id)
    Genre.deleteMany()
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))   
}

//update tat ca, 
module.exports.updateGenreById = (req,res,next)=>{
    const {id} = req.params;

 
    Genre.findById(id)
        .then(Genre=>{
            if(!Genre) Promise.reject("Genre not found")

            Object.keys(req.body).forEach(key=>Genre[key]=req.body[key])
            return Genre.save()
        })
        .then(Genre=>res.status(200).json(Genre))
        .catch(err=>res.status(500).json(err))
    

}

//them topic vao genre
module.exports.addMoreTopics = (req,res,next)=>{
    const {id} = req.params;
    const topic = req.body.IDTopics

 
    Genre.findById(id)
        .then(Genre=>{
            if(!Genre) Promise.reject("Genre not found")
            
            Genre.IDTopics.push(...topic)
            return Genre.save()
        })
        .then(Genre=>res.status(200).json(Genre))
        .catch(err=>res.status(500).json(err))
    

}