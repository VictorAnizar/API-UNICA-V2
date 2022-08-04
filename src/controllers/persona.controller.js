const boom = require("boom");

const Persona = require("../models/persona.model");

const mongoose = require('mongoose')

const getPersonas = async (request, reply) => {
    try {
        const personas = await Persona.find()
        reply.code(200).send(personas);
    } catch (err) {
        throw boom.boomify(err);
    }
};

const getPersona = async (request, reply) => {
    try {
        const persona = await Persona.findById(request.params.id);

        reply.code(200).send(persona);
    } catch (err) {
        throw boom.boomify(err);
    }
}

const createPersona = async (request, reply) => {
    try {
       
        const nuevoPersona = new Persona(request.body);
        console.log(nuevoPersona);
        // console.log(mongoose.isValidObjectId(request.body.usrcsrid));
        const password = request.body.password;
        nuevoPersona.crearPassword(password);
        await nuevoPersona.save();
        reply.code(201).send(nuevoPersona);
    } catch (err) {
        throw boom.boomify(err);
    }
}

const updatePersona = async (request, reply) => {
    try {
        const persona = await Persona.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true,
        });

        reply.code(200).send(persona);
    } catch (err) {
        throw boom.boomify(err);
    }
}

const removePersona = async (request, reply) => {
    try {
        await Persona.findByIdAndDelete(request.params.id);

        reply.code(204).send();
    } catch (err) {
        throw boom.boomify(err);
    }
}

module.exports = {
    getPersonas, getPersona, createPersona, updatePersona, removePersona
}