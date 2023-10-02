const listarReserva = (req, res) =>{
    res.status(200).json({msg: "Lista Reserva"})
}
const detalleReserva = (req, res) =>{
    res.status(200).json({msg: "Detalle Reserva"})
}
const crearReserva = (req, res) =>{
    res.status(200).json({msg: "Crear Reserva"})
}
const actualizarReserva = (req, res) =>{
    res.status(200).json({msg: "Actualizar Reserva"})
}
const eliminarReserva = (req, res) =>{
    res.status(200).json({msg: "Eliminar Reserva"})
}

export{
    listarReserva,
    detalleReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva
}