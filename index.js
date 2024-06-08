const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config({ path: "./.env" })

mongoose.connect("mongodb://localhost:27017/fullstack-todo")

const app = express()
app.use(express.json())


app.use(cors());




app.use("/api/todo", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(404).json("resource not found")
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "something went wrong" })
})



mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTsED");
    app.listen(5000, console.log("Server running"))
})