const {Topic} = require('./../../../models/Topic')


module.exports.getTopic=(req,res,next)=>{
    Topic.find()
        .then(songs=>res.status(200).json(songs))
        .catch(err=>res.status(500).json(err))
}

module.exports.createTopic=(req,res,next)=>{
    const {TopicName,TopicImage} = req.body;
 
    Topic.create({TopicName,TopicImage})
        .then(song=>res.status(200).json(song))
        .catch(err=>res.status(500).json(err))
}

module.exports.deleteTopicById=(req,res,next)=>{
    const {id} = req.params;

    Topic.deleteOne({_id:id})
        .then(()=>res.status(200).json({Message:"Deleted successfully"}))
        .catch(err=>res.status(500).json(err))
        
}
