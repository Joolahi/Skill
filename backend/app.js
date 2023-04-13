require("dotenv").config();
const express = require("express");
port = 3500;
const cors = require("cors");
const router = require("./routes/routes.js");

const app = express();

app.use(cors());

app.use("/", router);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
