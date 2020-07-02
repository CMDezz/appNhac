const {Genre} = require ("./../../models/Genre");
const {Topic} = require ("./../../models/Topic");


let Ar =[[0,1,2,3],[11,3,9,6]];
var schedule = require('node-schedule');
const axios = require('axios');

//2 gio 2 phut 2 giay
var ranPerDay = schedule.scheduleJob('2 2 2 * * *', async function(){
    let i = 0,numGenre,numTopic;
    var ranAr=[[],[]];
    await axios.get('https://giadinhmusicapp.herokuapp.com/api/getGenreAndTopic/')
    .then(playlists=>{
         numGenre = (playlists.data.Genre.length);
         numTopic = (playlists.data.Topic.length);
        
    })
    .catch(err=>{
        console.log(err)
    })
    while(i<4){
        let ranGenre =  Math.floor(Math.random() *  numGenre); 
        
        if(!ranAr[1].includes(ranGenre)) {
            ranAr[1].push(ranGenre);
            i++
        }
    }
    i=0
    while(i<4){

        let ranTopic =  Math.floor(Math.random() *  numTopic); 
        if(!ranAr[0].includes(ranTopic)) {
            ranAr[0].push(ranTopic);
            i++;
        }
    }
    Ar=ranAr
    console.log(Ar)
});
// console.log(ar)
// console.log("123")



// https://stackoverflow.com/questions/51301301/how-would-i-get-a-function-to-run-every-24-hours-on-a-server/51301855


// gop genre and topic 
// {"Topic":[{1},{2}],"Genre":[{1}{2}]}

module.exports.getGenreAndTopic = (req,res,next)=>{
    let ar = {}
    Genre.find()
        .then(genre=> {
            ar.Genre=genre;
            return ar
        })
        .then(ar=>{
            Topic.find()
                .then(topic=>{
                    ar.Topic = topic;
                    return ar
                })
                .then(ar=>res.status(200).json(ar))
                .catch(err=>res.status(500).json(err))
        })
        .catch(err=>res.status(500).json(err))
}




module.exports.getTodayGenreAndTopic=(req,res,next)=>{
    console.log(Ar)
    let ar = {}
    Genre.find()
        .then(genre=> {
            let ranGenre = Ar[1].map(n=>genre[n])
            ar.Genre=ranGenre;
            return ar
        })
        .then(ar=>{
            Topic.find()
                .then(topic=>{
                    let ranTopic = Ar[0].map(n=>topic[n])
                    ar.Topic = ranTopic;
                    return ar
                })
                .then(ar=>res.status(200).json(ar))
                .catch(err=>res.status(500).json(err))
        })
        .catch(err=>res.status(500).json(err))
}