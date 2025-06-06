# Train Schedule

This is a simple web application to view the schedule of trains. The application is built using React, Express, and MongoDB.

## Features

- View the schedule of trains
- Search for a specific train by number or name
- View the details of a specific train

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the server with `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in a web browser

## Configuration

The application requires a MongoDB database to store the train schedule data. The database connection settings can be configured in the `app.js` file.

## Development

The application is built using React and Express. The React components are located in the `src` directory, and the Express server is located in the `server` directory.

## API

The application provides a simple API to retrieve the train schedule data. The API is located at [http://localhost:3000/api/trains](http://localhost:3000/api/trains).

### Endpoints

- `GET /api/trains`: Retrieve all trains
- `GET /api/trains/:text`: Retrieve trains matching the specified text
- `GET /api/trains/:trainNumber/detail`: Retrieve the details of the specified train

### Response format

The API returns data in JSON format. The data is an array of objects, where each object contains the following properties:

- `train_number`: The number of the train
- `train_name`: The name of the train
- `departure_days`: An array of strings representing the days of the week on which the train departs
- `from_station`: The name of the station from which the train departs
- `to_station`: The name of the station at which the train arrives
- `departure_time`: The time at which the train departs
- `arrival_time`: The time at which the train arrives

## License

The application is licensed under the MIT License. See the `LICENSE` file for more information.
