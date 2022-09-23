import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/shopsAndOrders", {
    //Quitar warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Connected to DB: shopsAndOrders on localhost"))
    .catch(error => console.log(error))