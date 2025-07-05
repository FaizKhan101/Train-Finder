const Train = require("../models/trains");

exports.getTrains = async (req, res) => {
  const trains = await Train.find();
  res.status(200).json(trains);
};

exports.getTrain = async (req, res) => {
  const text = req.params.text;
  const trains = await Train.find();

  const searchTrains = trains.filter(
    (train) =>
      train.train_number.includes(text) ||
      train.train_name.toLowerCase().includes(text.toLowerCase()) ||
      train.departure_days.some((v) =>
        v.toLowerCase().includes(text.toLowerCase())
      )
  );

  res.status(200).json(searchTrains);
};

exports.getTrainDetail = async (req, res) => {
  const trainNumber = req.params.trainNumber;

  const train = await Train.findOne({ train_number: trainNumber });

  res.status(200).json(train);
};

exports.postTrain = async (req, res) => {
  const trainData = req.body;

  const train = new Train(trainData);
  await train.save();
  res.json({ message: "Train added successfully." });
};

exports.updateTrain = async (req, res) => {
  const updatedTrain = req.body;

  await Train.updateOne(
    { train_number: updatedTrain.train_number },
    { $set: { route: updatedTrain.route } }
  );
  res.json({ message: "Train timing updated." });
};
