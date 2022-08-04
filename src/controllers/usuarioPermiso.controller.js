const boom = require("boom");

const UsuarioPermiso = require("../models/usuarioPermiso.model");

const getUsuarioPermisos = async (request, reply) => {
    try {
        const usuarioPermisos = await UsuarioPermiso.find()
        reply.code(200).send(usuarioPermisos);
    } catch (err) {
        throw boom.boomify(err);
    }
};

const getUsuarioPermiso = async (request, reply) => {
    try {
        const usuarioPermiso = await UsuarioPermiso.findById(request.params.id);

        reply.code(200).send(usuarioPermiso);
    } catch (err) {
        throw boom.boomify(err);
    }
}




const createUsuarioPermiso = async (request, reply) => {
    try {
        const nuevoUsuarioPermiso = new UsuarioPermiso(request.body);
        console.log(nuevoUsuarioPermiso);
        
        await nuevoUsuarioPermiso.save();
        reply.code(201).send(nuevoUsuarioPermiso);
    } catch (err) {
        throw boom.boomify(err);
    }
}

module.exports = {
    getUsuarioPermisos, getUsuarioPermiso, createUsuarioPermiso
}

