const express = require('express');

const router = express.Router();

router.use("/Ads",require('./Ads'));
router.use("/Albums",require('./Album'));
router.use("/Genres",require('./Genre'));
router.use("/Playlists",require('./Playlist'));
router.use("/Songs",require('./Song'));
router.use("/Topics",require('./Topic'));


module.exports=router;