import mongoose, { Schema,model } from "mongoose";
const reservaScheam = new Schema({
    codigo: {
        type: Number,
        require: true,
        trim: true,
        maxlength: 11
    },
    descripcion: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    id_cliente: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente'
    },
    id_vehiculo: {
        type: mongoose.Types.ObjectId,
        ref: 'Vehiculo'
    }
}, {
    timestamps: true
})

export default model('Reserva', reservaScheam)