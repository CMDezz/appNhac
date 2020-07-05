const express = require("express");
const AdsController = require("./controller");

const router = express.Router();

router.get("/",AdsController.getAds);
router.post("/getSong",AdsController.getSongOfaAds);
router.put("/updateAds/:id",AdsController.updateAds);

router.post("/",AdsController.createAds)
router.delete("/:id",AdsController.deleteAdsById)
module.exports=router;