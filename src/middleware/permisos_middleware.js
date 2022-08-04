// Auth middleware decorador para fastify 

const fastifyPlugin = require("fastify-plugin");

module.exports = fastifyPlugin(async (fastify) => {
    fastify.decorate('saluda', async (req, res) => {
        try {
            // Verificando el token
            // await req.jwtVerify();
            console.log(req);
            // Se tiene que verificar el requ.body y los permisos
        } catch (error) {
            res.send(error)
        }

    })
})