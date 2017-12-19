const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// configure env
const { config, load } = require('dotenv');
config();
load();

const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/index");

app.use(router);

app.listen(port, err => {
  if (err) throw err;
  console.log("listening on port", port);
});
