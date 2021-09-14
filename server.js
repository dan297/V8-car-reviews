const express = require("express")
const path = require("path")
const dbConnection = require ('./config/connection')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.send("WELCOME")
})

dbConnection.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log("Server listening on port:  " + PORT);
    });
  });