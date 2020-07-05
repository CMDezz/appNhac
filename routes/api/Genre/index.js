const express = require("express")
const GenreController = require('./controller')
const router= express.Router();

router.get("/",GenreController.getGenre);
router.get("/onlyName",GenreController.getListNameGenre);
router.post("/getSongs",GenreController.getSongs);

router.post("/",GenreController.createGenre);
router.delete("/:id",GenreController.deleteGenreById)
router.delete("/",GenreController.deleteAllGenre)
router.put("/:id",GenreController.updateGenreById);
router.patch("/:id",GenreController.addMoreTopics);
router.post("/getGenresOfATopic",GenreController.getTopic)
module.exports=router;