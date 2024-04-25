const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

//mongodb setup
require("./utils/mongoConfig");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(3000, () => console.log("running"));
