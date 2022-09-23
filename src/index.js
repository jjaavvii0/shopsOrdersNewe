import express from "express"  
import morgan from "morgan"


const app = express()
app.listen(4000);


app.get("/", (req, res) =>{
    res.status(200).json({message:"Welcome to shops and orders API"})
})


console.log("Server listen on port", 4000)