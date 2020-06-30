const express = require("express")
const AlbumController = require('./controller')
const router= express.Router();

router.get("/",AlbumController.getGenre);
router.post("/",AlbumController.createGenre);
router.delete("/:id",AlbumController.deleteAlbumById);
router.put("/:id",AlbumController.updateAlbumById);
router.patch("/:id",AlbumController.addMoreSongs);
module.exports=router;