// configure env
require('dotenv').config();
require('dotenv').load();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;
const router = require("./routes/index");
app.use(router);

app.listen(port, err => {
  if (err) throw err;
  console.log("listening on port", port);
});
