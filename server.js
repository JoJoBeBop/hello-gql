'use strict';
require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema/schema');
const db = require("./db/animals");
const passport = require('./utils/pass');
const authRoute = require('./routes/routes');

const port = 3000;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

const checkAuth = (req, res) => {
  passport.authenticate('jwt', {session: false}, (err, user) =>{
    if (err || !user) {
      throw new Error("Not authenticated")
    }
  })(req, res)
};

app.use("/auth", authRoute);


app.use(
  '/graphql',
  (req, res) => {
    graphqlHTTP({
      schema: MyGraphQLSchema,
      graphiql: true,
      context: {req, res, checkAuth},
    })(req, res);
  });

db.on("connected", () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
