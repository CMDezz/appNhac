const express = require("express")
const TopicController = require('./controller')
const router= express.Router();

router.get("/",TopicController.getTopic);
router.post("/",TopicController.createTopic);
router.delete("/:id",TopicController.deleteTopicById)
router.put("/:id",TopicController.updateTopicById)

module.exports=router;