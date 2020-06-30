const express = require("express")
const PlaylistController = require('./controller')
const router= express.Router();

router.get("/",PlaylistController.getPlaylist);
router.post("/",PlaylistController.createPlaylist);
router.delete("/:id",PlaylistController.deletePlaylistById);
router.put("/:id",PlaylistController.updatePlaylistById);
router.patch("/:id",PlaylistController.addMoreSongs);


module.exports=router;