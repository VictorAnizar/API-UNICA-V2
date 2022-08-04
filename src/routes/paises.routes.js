const paisController = require("../controllers/pais.controller")


async function PaisRoutes (fastify){
    // Crear
    fastify.post('/paises', {
        handler: paisController.createPais
    })
    // Obtener todos
    fastify.get('/paises', {
        preValidation: [fastify.jwtauthentication],
        handler: paisController.getPaises
    })
    // Obtener uno por su id
    fastify.get('/paises/:id', {
        handler: paisController.getPais
    })
}


module.exports = PaisRoutes;