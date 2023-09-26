const express = require("express")
const mongoose=require("mongoose")
const app = express()
app.use(express.json())
const {connection}=require("./db")




app.get("/", (req, res) => {
    res.send("hii")
})

app.listen(1234,async () => {
    try {
        await connection
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})