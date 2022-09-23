import app from "./app"
import "./database"

app.listen(4000);

app.get("/", (req, res) =>{
    res.json({message:"Welcome to shops and orders API"})
})