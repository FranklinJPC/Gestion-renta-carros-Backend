const registro = (req, res)=> {
    res.status(200).json({msg: "Registro"})
}
const login = (req, res)=> {
    res.status(200).json({msg: "Login"})
}
const confirmarEmail = (req, res) =>{
    res.status(200).json({msg: "Confirmar Email"})
}
const actualizarPassword = (req, res) =>{
    res.status(200).json({msg: "Actualizar Password"})
}
const recuperarPassword = (req, res) =>{
    res.status(200).json({msg: "recuperar password"})
}
const perfil = (req, res) =>{
    res.status(200).json({msg: "Perfil"})
}
const nuevoPassword = (req, res) =>{
    res.status(200).json({msg: "Nuevo Password"})
}
const comprobarTokenPassword = (req, res) =>{
    res.status(200).json({msg: "Comprobar Token"})
}
const detalleUsuario = (req, res) =>{
    res.status(200).json({msg: "Detalle Usuario"})
}
export{
    registro,
    login,
    confirmarEmail,
    actualizarPassword,
    recuperarPassword,
    perfil,
    nuevoPassword,
    comprobarTokenPassword,
    detalleUsuario
}