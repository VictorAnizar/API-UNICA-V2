const boom = require("boom")

const Persona = require('../models/persona.model')

async function Router(fastify) {

    // Ruta para iniciar sesión y generar Token
    fastify.post('/login', async (req, res) => {

        const { curp, password } = req.body;
        if (!curp || !password) {
            res.status(400).send({ error: true, msg: 'Parámetros obligatorios faltantes' });
            return;
        }
        // Verificacion en bd
        const usuarioIncomming = await Persona.findOne({ curp: req.body.curp })

        if (!usuarioIncomming) {
            res.status(400).send({ error: true, msg: 'No es posible iniciar sesion, usuario incorrecto o inexistente' });
            return;
        }


        // console.log(usuarioIncomming);
        if (usuarioIncomming.validarPassword(req.body.password)) {
            const token = fastify.jwt.sign({ curp }, { expiresIn: 86400 });
            res.code(200).send({ token })
        }
        else {
            res.status(400).send({ error: true, msg: 'No es posible iniciar sesion, Contraseña incorrecta' });
            return;
        }
        // Usuario.find('nombre': )
        res.code(400)

    })
    //Prueba de ruta protegida
    fastify.get('/authRoute', {
        preValidation: [fastify.jwtauthentication, fastify.saluda],
        // preValidation: [fastify.saluda]
    }, async (req, res) => {
        res.status(200).send({ msg: "Inicio de sesión exitoso" });
    })
    //Prueba de ruta protegida
    fastify.get('/authRoute2', {
        preValidation: [fastify.jwtauthentication]
    }, async (req, res) => {
        res.status(200).send({ msg: "Ruta accedida" });
    })

    fastify.register(require('./paises.routes'))
    fastify.register(require('./personas.routes'))
    // fastify.register(require('./permisos.routes'))
    // fastify.register(require('./usuarioPermisos.routes'))

}

module.exports = Router