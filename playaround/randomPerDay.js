var schedule = require('node-schedule');
const axios = require('axios');
const PlaylistController = require('./../routes/api/Playlist/controller')
var ranPerDay = schedule.scheduleJob('*/5 * * * * *', async function(){
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
    PlaylistController.setAr(ranAr)
    // console.log(ranAr)
});
// console.log(ar)
// console.log("123")
module.exports={
    ranPerDay
};



// https://stackoverflow.com/questions/51301301/how-would-i-get-a-function-to-run-every-24-hours-on-a-server/51301855



