const {Genre} = require ("./../../models/Genre");
const {Topic} = require ("./../../models/Topic");


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