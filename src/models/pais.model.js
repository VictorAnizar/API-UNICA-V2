const { Schema, model } = require("mongoose")

const paisSchema = new Schema({
    nombre: {type: String, required: true}
}, {
    // Añade "created At" y "Updated at"
    timestamps: false,
    // Elimina el "_V" de los documentos que crea mongoose
    versionKey: false
})



module.exports = model('Pais', paisSchema);