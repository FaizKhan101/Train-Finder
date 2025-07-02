const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const trainRouter = require("./routes/train.js")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.static("public"))
app.use(trainRouter)
app.use('/', (req, res) => {
    res.redirect('/')
})

mongoose.connect("mongodb://localhost:27017/trains").then(() => {
// mongoose.connect("mongodb+srv://FaizKhan:tnUCYSotA0j30xAl@cluster0.3iavjwf.mongodb.net/trains").then(() => {
    app.listen(3000, () => console.log("Server start at port: 3000"))
}).catch(err => {
    console.log(err);
})