const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    await db
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("[db] Base de Datos Conectada con exito "))
    .catch(err => console.error("[db]", err));
}

module.exports = connect;