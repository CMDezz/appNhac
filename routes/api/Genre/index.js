const express = require("express")
const GenreController = require('./controller')
const router= express.Router();

router.get("/",GenreController.getGenre);
router.post("/",GenreController.createGenre);
router.delete("/:id",GenreController.deleteGenreById)

module.exports=router;