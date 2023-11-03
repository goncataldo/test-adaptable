require("dotenv").config();
import express from 'express'
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello hola!")
})
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})