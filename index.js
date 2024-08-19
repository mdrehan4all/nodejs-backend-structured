const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const user = require("./routes/users");
const app = express();

dotenv.config();
const PORT = process.env.PORT;
const ROOTDIR = process.env.ROOTDIR;

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use(ROOTDIR + "/user", user);

app.get(ROOTDIR + "/", async (req, res) => {
  res.status(200);
  res.send({
    message: "Hello World from REST API",
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
