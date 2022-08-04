const personaController = require("../controllers/persona.controller")


async function PersonaRoutes (fastify){
    // Crear
    fastify.post('/personas', {
        handler: personaController.createPersona
    })
    // Obtener todos
    fastify.get('/personas', {
        // preValidation: [fastify.jwtauthentication],
        handler: personaController.getPersonas
    })
    // Obtener uno por su id
    fastify.get('/personas/:id', {
        handler: personaController.getPersona
    })
    // Actualizar
    fastify.put('/personas/:id', {
        // preValidation: [fastify.jwtauthentication],
        handler: personaController.updatePersona
    })
    // Eliminar
    fastify.delete('/personas/:id', {
        // preValidation: [fastify.jwtauthentication],
        handler: personaController.removePersona
    })
}


module.exports = PersonaRoutes;