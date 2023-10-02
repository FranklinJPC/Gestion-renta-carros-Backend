import mongoose from "mongoose"
import Vehiculo from "../models/Vehiculo.js"
import Cliente from "../models/Cliente.js"
import Reserva from "../models/Reserva.js"

const listarReserva = async(req, res) =>{
    const reservas = await Reserva.find({}).where('id_cliente').equals(await Cliente.find({})).populate('id_cliente', '_id nombre apellido cedula').where('id_vehiculo').equals(await Vehiculo.find({})).populate('id_vehiculo', '_id marca modelo placa color tipo_vehiculo descripcion')
    res.status(200).json(reservas)
}
const detalleReserva = async(req, res) =>{
    try {
        const {id} = req.params
        const reserva = await Reserva.findById(id).where('id_cliente').equals(await Cliente.find({})).populate('id_cliente', '_id nombre apellido cedula').where('id_vehiculo').equals(await Vehiculo.find({})).populate('id_vehiculo', '_id marca modelo placa color tipo_vehiculo descripcion') 
        res.status(200).json(reserva)
    } catch (error) {
        console.log(error)
    }
}
const crearReserva = async(req, res) =>{
    try {
        if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Llenar todos los campos"}) 
        const nuevaReserva = new Reserva(req.body)
        await nuevaReserva.save()
        res.status(200).json({msg: "Nueva reserva agregada"})
    } catch (error) {
        console.log(error)
    }
}
const actualizarReserva = async(req, res) =>{
    try {
        const {id} = req.params
        if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Llenar todos los campos"})
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({msg: "Reserva no encontrada"})
        await Reserva.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({msg: "Actualizacion exitosa"})
    } catch (error) {
        console.log(error)
    }
}
const eliminarReserva = async(req, res) =>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(200).json({msg: "Reserva no encontrada"})
        await Reserva.findByIdAndRemove(req.params.id, req.body)
        res.status(200).json({msg: "Reserva Eliminada"})
    } catch (error) {
        console.log(error)
    }
}

export{
    listarReserva,
    detalleReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva
}