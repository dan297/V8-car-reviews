const express = require("express")
const path = require("path")
const dbConnection = require ('./config/connection')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require("./controllers")

const app = express()

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: dbConnection
    })
  };
  
  app.use(session(sess));


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