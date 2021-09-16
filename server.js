const express = require("express");
const path = require("path");
const dbConnection = require('./config/connection');

const routes = require("./controllers")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);

dbConnection.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on port:  http://localhost:" + PORT);
  });
});