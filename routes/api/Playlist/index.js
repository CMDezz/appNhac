const express = require("express")
const PlaylistController = require('./controller')
const router= express.Router();

router.get("/",PlaylistController.getPlaylist);
router.post("/",PlaylistController.createPlaylist);
router.delete("/:id",PlaylistController.deletePlaylistById);

module.exports=router;