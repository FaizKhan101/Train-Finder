const Train = require("../models/trains")

exports.getTrains = async (req, res, next) => {
    const trains = await Train.find()
    res.status(200).json(trains)
}

exports.getTrain = async (req, res, next) => {
    const text = req.params.text
    const trains = await Train.find()

    const searchTrains = trains.filter((train) =>
        train.train_number.includes(text) ||
        train.train_name.toLowerCase().includes(text.toLowerCase()) ||
        train.departure_days.some((v) =>
            v.toLowerCase().includes(text.toLowerCase())
        ))

    res.status(200).json(searchTrains)
}

exports.getTrainDetail = async (req, res, next) => {
    const trainNumber = req.params.trainNumber

    const train = await Train.findOne({ train_number: trainNumber })

    res.status(200).json(train)
}