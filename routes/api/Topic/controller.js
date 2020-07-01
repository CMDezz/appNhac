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


//update tat ca, 
module.exports.updateTopicById = (req,res,next)=>{
    const {id} = req.params;

 
    Topic.findById(id)
        .then(Topic=>{
            if(!Topic) Promise.reject("Topic not found")

            Object.keys(req.body).forEach(key=>Topic[key]=req.body[key])
            return Topic.save()
        })
        .then(Topic=>res.status(200).json(Topic))
        .catch(err=>res.status(500).json(err))
    

}