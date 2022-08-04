const permisoController = require("../controllers/permiso.controller")


async function PermisoRoutes (fastify){
    // Crear
    fastify.post('/permisos', {
        handler: permisoController.createPermiso
    })
    // Obtener todos
    fastify.get('/permisos', {
        // preValidation: [fastify.jwtauthentication],
        handler: permisoController.getPermisos
    })
    // Obtener uno por su id
    fastify.get('/permisos/:id', {
        handler: permisoController.getPermiso
    })
    // Actualizar
    fastify.put('/permisos/:id', {
        // preValidation: [fastify.jwtauthentication],
        handler: permisoController.updatePermiso
    })
    // Eliminar
    fastify.delete('/permisos/:id', {
        // preValidation: [fastify.jwtauthentication],
        handler: permisoController.removePermiso
    })
}


module.exports = PermisoRoutes;