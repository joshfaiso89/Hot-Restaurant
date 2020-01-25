//Dependencies
const express = require("express")
const path = require("path")
//Express app
const app = express()
const PORT = 8080

//express app to handle data parsing
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const reservations = [
  {
    tableName: "billbowerman",
    name: "Bill Bowerman",
    phoneNumber: 9195555555,
    email: "BigBill@gmail.com"
  }
]

//Basic route that sends the user first to the AJAX page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"))
})

//display all tables
app.get("/api/reservations", (req, res) => {
  return res.json(reservations)
})

//Display a single entry for a table
app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "make.html"))
})

app.get("/tables", (req, res) => {
  res.sendfile(path.join(__dirname, "view.html"))
})

//Create new reservations, takes in JSON input
app.post("/api/reservations", (req, res) => {
  const newTable = req.body

  console.log(newTable)

  reservations.push(newTable)

  res.json(newTable)
})
//starts the server to begin listening
app.listen(PORT, () => {
  console.log("App listening on Port" + PORT)
})
