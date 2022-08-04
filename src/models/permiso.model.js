const { Schema, model } = require("mongoose")

const permisoSchema = new Schema({
    // Identificador único de permiso
    // _id: { type: Number, alias: "pmoid" },
    pmoid:{ type: Number, required: true, index: true, unique:true,dropDups: true },
    // Descripción textual del permiso asignado
    pmonombre: { type: String, required: true},
    // Descriptor de permiso para uso interno de la solución
    pmodescriptor: { type: String, required: true},
    // Campo indicativo de que cierto permiso pertenece a la solución del SIIPP-G y no es eliminable
    pmosistema: { type: String, required: true},
}, {
    // Añade "created At" y "Updated at"
    timestamps: false,
    // Elimina el "_V" de los documentos que crea mongoose
    versionKey: false,
})



module.exports = model('Permiso', permisoSchema);