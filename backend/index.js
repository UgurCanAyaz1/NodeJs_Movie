const express= require('express')
const mongoose= require('mongoose')
const app= express()
const cors = require("cors")

// Import model
const Movie= require('./models/movieModel')

// Import routers
const movieRouter = require("./routers/movieRouter")

// Allow usage of json files in app
app.use(express.json());

// Enable Cors
app.use(cors({origin : "*"}))

require('dotenv').config()
port=5000

// Connecting to MongoDB
// Be sure to switch CONNECTION_STRING with your own connection string!
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("Connected to MongoDB");})
.catch((err) => {console.error("Error connecting to MongoDB:", err);});

// routes
app.use("/movie", movieRouter)

app.listen(port,() => {
    console.log("listening on port: ", port)
})
