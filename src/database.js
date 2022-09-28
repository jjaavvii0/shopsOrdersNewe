import mongoose from "mongoose"
require('dotenv').config()

mongoose.connect(process.env.URI, {
    //Quitar warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Connected to DB"))
    .catch(error => console.log(error))