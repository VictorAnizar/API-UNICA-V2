const usuarioPermisoController = require("../controllers/usuarioPermiso.controller")


async function UsuarioPermisoRoutes (fastify){
    // Crear
    fastify.post('/usuarioPermisos', {
        handler: usuarioPermisoController.createUsuarioPermiso
    })
    // Obtener todos
    fastify.get('/usuarioPermisos', {
        // preValidation: [fastify.jwtauthentication],
        handler: usuarioPermisoController.getUsuarioPermisos
    })
    // Obtener uno por su id
    fastify.get('/usuarioPermisos/:id', {
        handler: usuarioPermisoController.getUsuarioPermiso
    })
}


module.exports = UsuarioPermisoRoutes;