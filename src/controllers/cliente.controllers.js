import mongoose from "mongoose"
import Cliente from '../models/Cliente.js'

const listarClientes = async(req, res) =>{
    const clientes = await Cliente.find({}).select("-createdAt -updatedAt -__v")
    res.status(200).json(clientes)
}
const detalleCliente = async(req, res) =>{
    try {
        const {id} = req.params
        const cliente = await Cliente.findById(id).select("-createdAt -updatedAt -__v")
        res.status(200).json(cliente)
    } catch (error) {
        console.log(error)
    }
}
const crearCliente = async(req, res) =>{
    try {
        if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Llenar todos los campos"}) 
        const nuevoCliente = new Cliente(req.body)
        await nuevoCliente.save()
        res.status(200).json({msg: "Nuevo cliente agregado"})
    } catch (error) {
        console.log(error)
    }
}
const actualizarCliente = async(req, res) =>{
    try {
        const {id} = req.params
        if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Llenar todos los campos"})
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({msg: "Cliente no encontrado"})
        await Cliente.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({msg: "Actualizacion exitosa"})
    } catch (error) {
        console.log(error)
    }
}
const eliminarCliente = async(req, res) =>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(200).json({msg: "Cliente no encontrado"})
        await Cliente.findByIdAndRemove(req.params.id, req.body)
        res.status(200).json({msg: "Cliente Eliminado"})
    } catch (error) {
        console.log(error)
    }
}

export{
    listarClientes,
    detalleCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}