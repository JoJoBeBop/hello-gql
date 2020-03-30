'use strict';
require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema/schema');
const db = require("./db/animals");

const port = 3000;


const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  }),
);
db.on("connected", () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
