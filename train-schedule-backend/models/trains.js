const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    train_number: String,
    train_name: String,
    departure_days: [String],
    departure_time: String,
    route: [
        {
            station: String,
            arrival_time: String,
            new_arrival_time: String
        }
    ]
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
