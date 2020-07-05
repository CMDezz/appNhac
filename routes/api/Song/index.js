const express = require("express")
const SongController = require('./controller')
const router= express.Router();

router.get("/",SongController.getSong);
router.get("/getById/:id",SongController.getSongById);

router.post("/",SongController.createSong);
router.post("/updateLikes",SongController.updateLike);
router.post("/findSong",SongController.findSong)

router.delete("/:id",SongController.deleteSongById)
router.patch("/:id",SongController.addMoreSongs)

router.get("/get5Songs",SongController.get5LikestSongs);
module.exports=router;