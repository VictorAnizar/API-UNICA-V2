// Auth middleware decorador para fastify 

const fastifyPlugin = require("fastify-plugin");

module.exports = fastifyPlugin(async (fastify) => {
    fastify.decorate('jwtauthentication', async (req, res) => {
        try {
            // Verificando el token
            await req.jwtVerify();
        } catch (error) {
            res.send(error)
        }

    })
})