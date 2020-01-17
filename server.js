const { config } = require('./config/index.js');
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const routes = require('./routes/index')

db(config.dbUrl);

//middlewares
app.use(cors());
app.use(express.json()); // El servidor entenderá JSON
app.use(express.urlencoded({ extended: false }));

//routes
routes(app)

async function main() {
    await app.listen(config.port)
    console.log(`Server listening on port ${config.port}`);
};

main()