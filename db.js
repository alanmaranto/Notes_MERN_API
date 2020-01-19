const db = require('mongoose');

db.Promise = global.Promise;
db.set('useCreateIndex', true);

async function connect(url) {
    await db
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log("[db] Base de Datos Conectada con exito "))
    .catch(err => console.error("[db]", err));
}

module.exports = connect;