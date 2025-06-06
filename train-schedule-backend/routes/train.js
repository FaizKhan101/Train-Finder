const express = require("express")

const trainController = require("../controllers/train.js")

const router = express.Router()

router.get('/trains', trainController.getTrains)

router.get("/trains/:text", trainController.getTrain)

router.get("/trains/:trainNumber/detail", trainController.getTrainDetail)

module.exports = router