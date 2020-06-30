const express = require("express")
const SongController = require('./controller')
const router= express.Router();

router.get("/",SongController.getSong);
router.get("/:id",SongController.getSongById);
router.post("/",SongController.createSong);
router.delete("/:id",SongController.deleteSongById)

module.exports=router;