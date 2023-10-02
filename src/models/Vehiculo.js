import { Schema, model } from "mongoose";
const vehiculoSchema = new Schema({
    marca: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    modelo: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    anio_fabricacion: {
        type: String,
        require: true,
        trim: true,
    },
    placa: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    color: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    tipo_vehiculo: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    kilometraje: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    descripcion: {
        type: String,
        require: true,
        trim: true,
        maxlength: 40
    }
},{
    timestamps: true
})

export default model('Vehiculo', vehiculoSchema)