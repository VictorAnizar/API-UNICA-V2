const boom = require("boom");

const Permiso = require("../models/permiso.model");

const getPermisos = async (request, reply) => {
    try {
        const permisos = await Permiso.find()
        reply.code(200).send(permisos);
    } catch (err) {
        throw boom.boomify(err);
    }
};

const getPermiso = async (request, reply) => {
    try {
        const permiso = await Permiso.findById(request.params.id);

        reply.code(200).send(permiso);
    } catch (err) {
        throw boom.boomify(err);
    }
}

const createPermiso = async (request, reply) => {
    try {
        const nuevoPermiso = new Permiso(request.body);
        console.log(nuevoPermiso);
        
        await nuevoPermiso.save();
        reply.code(201).send(nuevoPermiso);
    } catch (err) {
        throw boom.boomify(err);
    }
}

const updatePermiso = async (request, reply) => {
    try {
        const permiso = await Permiso.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true,
        });

        reply.code(200).send(permiso);
    } catch (err) {
        throw boom.boomify(err);
    }
}

const removePermiso = async (request, reply) => {
    try {
        await Permiso.findByIdAndDelete(request.params.id);

        reply.code(204).send();
    } catch (err) {
        throw boom.boomify(err);
    }
}

module.exports = {
    getPermisos, getPermiso, createPermiso, updatePermiso, removePermiso
}