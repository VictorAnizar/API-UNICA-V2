const fastify = require("fastify")({
    // Objeto de config
    // Para ver en consola las peticiones que van llegando o info extra del server
    logger: true
})

require('./utils/mongoose')

// Para ir documentando
// fastify.register(require("fastify-swagger"), swagger.options)

// Clave secreta que requiere JWT
fastify.register(require("fastify-jwt"), {
    secret: "secret"
})


// Middleware de autenticacion
fastify.register(require('./middleware/auth_middleware'));
fastify.register(require('./middleware/permisos_middleware'));

// Configuracion de cors de fastify
fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
        const corsOptions = {
            origin: '*',
            credentials: true,            //access-control-allow-credentials:true
            optionSuccessStatus: 200,
        }

        // do not include CORS headers for requests from localhost
        if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false
        }

        // callback expects two parameters: error and options
        callback(null, corsOptions)
    }



})

// Rutas
fastify.register(require("./routes/index.routes"))

// Ruta raíz de backend
fastify.get("/", (req, res) => {
    res.send({ hola: "mundo" })
})

// Inicia el servidor
const start = async () => {
    await fastify.listen(5000)
    fastify.log.info(`Servidor escuchando en ${fastify.server.address().port}`)
};

start();