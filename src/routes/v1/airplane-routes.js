const express= require("express")

const {AirplaneMiddlewares} = require("../../middlewares")

const {AirplaneController} = require("../../controllers")
const router = express.Router();

router.post("/", AirplaneMiddlewares.validateCreateRequest , AirplaneController.createAirplane)

router.get("/",  AirplaneController.getAirplanes)

module.exports = router;