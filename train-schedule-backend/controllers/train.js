const Train = require("../models/trains")

exports.getTrains = async (req, res) => {
    const trains = await Train.find()
    res.status(200).json(trains)
}

exports.getTrain = async (req, res) => {
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

exports.getTrainDetail = async (req, res) => {
    const trainNumber = req.params.trainNumber

    const train = await Train.findOne({ train_number: trainNumber })

    res.status(200).json(train)
}

exports.postTrain = async (req, res) => {
    const trainData = req.body

    // const train = new Train({ train_number: trainData.train_number, train_name: trainData.train_name, departure_days: trainData.departure_days, departure_time: trainData.departure_time, route: trainData.route })
    const train = new Train(trainData)
    await train.save()
    res.json({ message: "Train added successfully." })
}