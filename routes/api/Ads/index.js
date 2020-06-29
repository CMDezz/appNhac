const express = require("express");
const AdsController = require("./controller");

const router = express.Router();

router.get("/",AdsController.getAds);
router.post("/",AdsController.createAds)
router.delete("/:id",AdsController.deleteAdsById)
module.exports=router;