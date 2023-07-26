const express = require("express");
const rotuerApi = require("./src/router/app.router");
const { errorHandler } = require("./src/middleware");

const app = express();
const port = 3001;
app.use(express.json());

const router = express.Router()
app.use("/api/v1", router);


app.listen(port, () => {
  console.log("Server on ", port);
})

rotuerApi(app);

app.use(errorHandler)

