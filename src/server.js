const { config } = require('./config/index.js');
const express = require('express');
const app = express();
const db = require('./db');

db(config.dbUrl);

async function main() {
    await app.listen(config.port)
    console.log(`Server listening on port ${config.port}`);
};

main()