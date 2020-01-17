const { config } = require('./config/index.js')
const app = require('./index');

async function main() {
    await app.listen(config.port)
    console.log(`Server listening on port ${config.port}`);
};

main()