const express = require('express');
require("../source/database/connect");

// const MensRanking = require("../source/models/schema");

const router = require("./routers/mens")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`app is listening at port ${port}`);
});