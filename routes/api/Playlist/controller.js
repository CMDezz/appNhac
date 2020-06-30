const {Playlist} = require('./../../../models/Playlist')


module.exports.getPlaylist=(req,res,next)=>{
    Playlist.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(playlist=>res.status(200).json(playlist))
        .catch(err=>res.status(500).json(err))
}


module.exports.getRandom4Playlist=(req,res,next)=>{
    Playlist.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(playlist=>{
            let i= 0;
            let arr=[];
            let temp =[]
            while (i<4){
                
               let ran =  Math.floor(Math.random() * 4); 
               if(!temp.includes(ran)){
                temp.push(ran)
                arr.push(playlist[ran])
                i++
               }
              
            }
            return arr
        })
        .then(playlist=>res.status(200).json(playlist))
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


//update tat ca, 
module.exports.updatePlaylistById = (req,res,next)=>{
    const {id} = req.params;

 
    Playlist.findById(id)
        .then(Playlist=>{
            if(!Playlist) Promise.reject("Playlist not found")

            Object.keys(req.body).forEach(key=>Playlist[key]=req.body[key])
            return Playlist.save()
        })
        .then(Playlist=>res.status(200).json(Playlist))
        .catch(err=>res.status(500).json(err))
    

}

//them songs vao IDSongs
module.exports.addMoreSongs = (req,res,next)=>{
    const {id} = req.params;
    const songs = req.body.IDSongs

 
    Playlist.findById(id)
        .then(Playlist=>{
            if(!Playlist) Promise.reject("Playlist not found")
            
            Playlist.IDSongs.push(...songs)
            return Playlist.save()
        })
        .then(Playlist=>res.status(200).json(Playlist))
        .catch(err=>res.status(500).json(err))
    

}