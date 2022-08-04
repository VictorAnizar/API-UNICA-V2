const { Schema, model, SchemaTypes } = require("mongoose")
const crypto = require('crypto');

const personaSchema = new Schema({
    // Pais al que pertenece este usuario
    id_pais_natal: { type: Schema.Types.ObjectId, required: true , ref: "Pais"},
    
    // Nombre de sesión de un usuario específico
    curp: { type: String, required: [true, "No puede estar vacío el curp"], unique:true },
    // Nombre del usuario como se tiene registrado actualmente
    nombre: { type: String, required: [true, "No puede estar vacío el nombre"] },
    // Apellido paterno del usuario como se tiene registrado actualmente
    apellido_paterno: { type: String, required: [true, "No puede estar vacío el apellido paterno"] },
    // Apellido materno del usuario como se tiene registrado actualmente
    apellido_materno: { type: String, required: [true, "No puede estar vacío el apellido materno"] },
    //  Correo electrónico del usuario
    email: { type: String, required: [true, "No puede estar vacío el email"] },
    // sexo del usuario
    sexo: { type: String, required: [true, "No puede estar vacío el sexo"] },
    
    nacionalidad: { type: String, required: [true, "No puede estar vacía la nacionalidad"] },
    
    fecha_nacimiento: { type: Date, required: false },
    
    password: { type: String, required: true },
    
    salt: { type: String, required: false }
}, {
    // Añade "created At" y "Updated at"
    timestamps: false,
    // Elimina el "_V" de los documentos que crea mongoose
    versionKey: false
})

personaSchema.methods.crearPassword = function (pass) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(pass, 'this.salt', 10000, 512, 'sha512')
        .toString("hex")
}

personaSchema.methods.validarPassword = function (pass) {
    const newHash = crypto.pbkdf2Sync(pass, 'this.salt', 10000, 512, 'sha512')
        .toString('hex')
    if(this.password == newHash){
        return true;
    }else{
        return false;
    }
    // return false;
}

module.exports = model('Persona', personaSchema);