const express = require("express")
const PlaylistController = require('./controller')
const router= express.Router();

router.get("/",PlaylistController.getPlaylist);
router.get("/getTodayPlaylist",PlaylistController.getTodayPlaylist);

router.post("/getSongs",PlaylistController.getSongs);
router.post("/",PlaylistController.createPlaylist);
router.delete("/:id",PlaylistController.deletePlaylistById);
router.put("/:id",PlaylistController.updatePlaylistById);
router.patch("/:id",PlaylistController.addMoreSongs);


module.exports=router;