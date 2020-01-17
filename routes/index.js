// Aqui van las rutas de todos los componentes
const user = require('../components/user/controller');
const notes = require('../components/notes/controller');

const routes = (server) => {
    server.use('/user', user)
    server.use('/notes', notes)
};

module.exports = routes;