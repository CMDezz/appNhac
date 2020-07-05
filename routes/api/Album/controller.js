const {Song} = require('./../../../models/Song')

const {Album} = require('./../../../models/Album')
const _ = require('lodash')
const { isEmpty } = require('lodash')


let Ar =[3,1,2,0];
var schedule = require('node-schedule');
const axios = require('axios');
//2 gio 2 phut 2 giay
var ranPerDay = schedule.scheduleJob('2 25 8 * * *', async function(){
    let num = 0;
    let i = 0
    var ranAr=[];
    await axios.get('https://giadinhmusicapp.herokuapp.com/api/Albums/')
    .then(albums=>{
        num = (albums.data.length)
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
    console.log(Ar)
});
// console.log(ar)
// console.log("123")



// https://stackoverflow.com/questions/51301301/how-would-i-get-a-function-to-run-every-24-hours-on-a-server/51301855


module.exports.getTodayAlbum=(req,res,next)=>{
    console.log(Ar)
    Album.find()
        // .populate("IDSongs")
        // .populate("IDTopics")
        .then(albums=>{
        //    console.log(ar)
            return Ar.map(n=>albums[n])
        })
        .then(playlist=>res.status(200).json(playlist))
        .catch(err=>res.status(500).json(err))
}


//get songs of  an album

module.exports.getSongs=(req,res,next)=>{
    const {idalbum}=req.body;
    let ar = []
    Album.findById({_id:idalbum})
    .populate("IDSongs")
        .then(album=>{
            ar.push(...album.IDSongs)
            return ar
        })
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}


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