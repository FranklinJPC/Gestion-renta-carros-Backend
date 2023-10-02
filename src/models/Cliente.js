import { Schema, model } from "mongoose";
const clienteSchema = new Schema({
    cedula: {
        type: Number,
        require: true,
        trim: true,
        maxLength: 11
    },
    nombre: {
        type: String,
        require: true,
        trim: true,
        maxlength: 30
    },
    apellido: {
        type: String,
        require: true,
        trim: true,
        maxlength: 30
    },
    ciudad: {
        type: String,
        require: true,
        trim: true,
        maxlength: 10
    },
    email: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    direcccion: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    telefono: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    fecha_nacimiento: {
        type: Date,
        require: true,
        trim: true,
    }
}, {
    timestamps: true
})

export default model('Cliente', clienteSchema)