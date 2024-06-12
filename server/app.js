const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

// Find All Games for Home
// Find Specific Game by Id


const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
