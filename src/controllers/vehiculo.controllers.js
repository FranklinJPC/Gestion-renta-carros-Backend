import mongoose from "mongoose"
import Vehiculo from "../models/Vehiculo.js"

const listarVehiculo = async(req, res) =>{
    const vehiculos = await Vehiculo.find({}).select("-createdAt -updatedAt -__v")
    res.status(200).json(vehiculos)
}
const detalleVehiculo = async(req, res) =>{
    try {
        const {id} = req.params
        const vehiculo = await Vehiculo.findById(id).select("-createdAt -updatedAt -__v")
        res.status(200).json(vehiculo)
    } catch (error) {
        console.log(error)
    }
}
const crearVehiculo = async(req, res) =>{
    try {
        if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Llenar todos los campos"}) 
        const nuevoVehiculo = new Vehiculo(req.body)
        await nuevoVehiculo.save()
        res.status(200).json({msg: "Nuevo vehiculo agregado"})
    } catch (error) {
        console.log(error)
    }
}
const actualizarVehiculo = async(req, res) =>{
    try {
        const {id} = req.params
        if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Llenar todos los campos"})
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({msg: "Vehiculo no encontrado"})
        await Vehiculo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({msg: "Actualizacion exitosa"})
    } catch (error) {
        console.log(error)
    }
}
const eliminarVehiculo = async(req, res) =>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(200).json({msg: "Vehiculo no encontrado"})
        await Vehiculo.findByIdAndRemove(req.params.id, req.body)
        res.status(200).json({msg: "Vehiculo Eliminado"})
    } catch (error) {
        console.log(error)
    }
}

export{
    listarVehiculo,
    detalleVehiculo,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
}