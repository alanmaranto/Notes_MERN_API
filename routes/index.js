// Aqui van las rutas de todos los componentes
const users = require('../components/user/controller');
const notes = require('../components/notes/controller');

const routes = (server) => {
    server.use('/users', users)
    server.use('/notes', notes)
};

module.exports = routes;