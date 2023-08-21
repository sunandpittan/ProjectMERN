const express = require("express");
const router = require("./Router/routes");
const connection = require("./Config/mongo");
const dotenv = require("dotenv");
const cors = require("cors");

connection();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

dotenv.config();

const port = process.env.port || 4000;
app.listen(port, console.log(`Server is running on port ${port}`));
