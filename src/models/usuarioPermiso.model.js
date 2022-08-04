const { Schema, model } = require("mongoose")

const UsuarioPermisoSchema = new Schema({
    // Identificador único de relación de permiso y usuario
    // _id: { type: Number, alias: "upoid" },
    upoid: { type: Number, required: true, index: true, unique:true },
    // Identificador únicio de usuario relacionado
    upousrid: { type: Schema.Types.ObjectId, required: true , ref: "Usuario"},
    // Identificador de permiso
    upopmoid: { type: Schema.Types.ObjectId, required: true , ref: "Permiso"},
    // Fecha y Hora de Inicio del Permiso
    upofechainicio: { type: Date },
    // Fecha y Hora de Fin del Permiso
    upofechafin: { type: Date },
    // Descriptor específico de permiso
    upodescriptor: { type: String, required: true }
}, {
    // Añade "created At" y "Updated at"
    timestamps: false,
    // Elimina el "_V" de los documentos que crea mongoose
    versionKey: false
})



module.exports = model('UsuarioPermiso', UsuarioPermisoSchema);