const {Playlist} = require('./../../../models/Playlist');


let Ar =[0,1,2,3];
var schedule = require('node-schedule');
const axios = require('axios');
//2 gio 2 phut 2 giay
var ranPerDay = schedule.scheduleJob('2 25 8 * * *', async function(){
    let num = 0;
    let i = 0
    var ranAr=[];
    await axios.get('https://giadinhmusicapp.herokuapp.com/api/Playlists/')
    .then(playlists=>{
        num = (playlists.data.length)
    })
    .catch(err=>{
        console.log(err)
    })
    while(i<4){
        let ran =  Math.floor(Math.random() *  num); 
        if(!ranAr.includes(ran)) {
            ranAr.push(ran);
            i++;
        }
    }
    Ar=ranAr
});
// console.log(ar)
// console.log("123")



// https://stackoverflow.com/questions/51301301/how-would-i-get-a-function-to-run-every-24-hours-on-a-server/51301855













module.exports.getPlaylist=(req,res,next)=>{
    Playlist.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(playlist=>res.status(200).json(playlist))
        .catch(err=>res.status(500).json(err))
}



module.exports.getTodayPlaylist=(req,res,next)=>{
    Playlist.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(playlist=>{
        //    console.log(ar)
            return Ar.map(n=>playlist[n])
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


//getSongsOfAPlaylist
module.exports.getSongs=(req,res,next)=>{
    const {idplaylist} = req.body;

    Playlist.findById({_id:idplaylist}) 
        .populate("IDSongs")
        .then(songs=>res.status(200).json(songs.IDSongs))
        .catch(err=>res.status(500).json(err))

}