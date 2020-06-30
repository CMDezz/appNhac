const express = require("express")
const GenreController = require('./controller')
const router= express.Router();

router.get("/",GenreController.getGenre);
router.get("/onlyName",GenreController.getListNameGenre);
router.post("/",GenreController.createGenre);
router.delete("/:id",GenreController.deleteGenreById)
router.delete("/",GenreController.deleteAllGenre)
router.put("/:id",GenreController.updateGenreById);
router.patch("/:id",GenreController.addMoreTopics);
router.get("/getGenresOfATopic/:id",GenreController.getTopic)
module.exports=router;