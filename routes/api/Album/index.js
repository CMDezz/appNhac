const express = require("express")
const AlbumController = require('./controller')
const router= express.Router();

router.get("/",AlbumController.getGenre);
router.post("/",AlbumController.createGenre);
router.delete("/:id",AlbumController.deleteAlbumById);


module.exports=router;