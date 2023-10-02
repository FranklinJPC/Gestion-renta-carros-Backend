const listarClientes = (req, res) =>{
    res.status(200).json({msg: "Lista Clientes"})
}
const detalleCliente = (req, res) =>{
    res.status(200).json({msg: "Detalle Cliente"})
}
const crearCliente = (req, res) =>{
    res.status(200).json({msg: "Crear Cliente"})
}
const actualizarCliente = (req, res) =>{
    res.status(200).json({msg: "Actualizar Cliente"})
}
const eliminarCliente = (req, res) =>{
    res.status(200).json({msg: "Eliminar Cliente"})
}

export{
    listarClientes,
    detalleCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}