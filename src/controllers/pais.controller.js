const boom = require("boom");

const Pais = require("../models/pais.model");

const getPaises = async (request, reply) => {
    try {
        const paises = await Pais.find()
        reply.code(200).send(paises);
    } catch (err) {
        throw boom.boomify(err);
    }
};

const getPais = async (request, reply) => {
    try {
        const pais = await Pais.findById(request.params.id);

        reply.code(200).send(pais);
    } catch (err) {
        throw boom.boomify(err);
    }
}

const createPais = async (request, reply) => {
    try {
        const nuevoPais = new Pais(request.body);
        console.log(nuevoPais);
        
        await nuevoPais.save();
        reply.code(201).send(nuevoPais);
    } catch (err) {
        throw boom.boomify(err);
    }
}

module.exports = {
    getPaises, getPais, createPais
}