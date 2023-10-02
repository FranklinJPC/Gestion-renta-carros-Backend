const listarVehiculo = (req, res) =>{
    res.status(200).json({msg: "Lista Vehiculo"})
}
const detalleVehiculo = (req, res) =>{
    res.status(200).json({msg: "Detalle Vehiculo"})
}
const crearVehiculo = (req, res) =>{
    res.status(200).json({msg: "Crear Vehiculo"})
}
const actualizarVehiculo = (req, res) =>{
    res.status(200).json({msg: "Actualizar Vehiculo"})
}
const eliminarVehiculo = (req, res) =>{
    res.status(200).json({msg: "Eliminar Vehiculo"})
}

export{
    listarVehiculo,
    detalleVehiculo,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
}