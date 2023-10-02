import Usuario from "../models/Usuario.js";
import generateJWT from "../helpers/createJWT.js";
import{
    sendEmailConfirm,
    sendMailToRecoveryPassword
} from '../config/nodemailer.js'

const registro = async(req, res)=> {
    const {email, password} = req.body
    if(Object.values(req.body).includes("")) return res.status(404).json({msg: "Debe llenar todos los campos"})
    const verificarEmailBDD = await Usuario.findOne({email});
    if(verificarEmailBDD) return res.status(400).json({msg: "Usuario ya creado"})
    const nuevoUsuarios = new Usuario(req.body)
    nuevoUsuarios.password = await nuevoUsuarios.encryptPassword(password)

    const token = nuevoUsuarios.createToken()
    await sendEmailConfirm(email, token)
    await nuevoUsuarios.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})
}
const login = async(req, res)=> {
    const {email, password} = req.body
    if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Llenar todos los campos"})
    const verificarUserBDD = await Usuario.findOne({email}).select("-status -token -updateAt -createdAt")
    if(verificarUserBDD?.confirmEmail == false) return res.status(400).json({msg: "Deber verificar su correo"})
    if(!verificarUserBDD) return res.status(400).json({msg: "Cuenta no registrada"})
    const verificarPassword = await verificarUserBDD.matchPasswords(password)
    if(!verificarPassword) return res.status(400).json({msg: "Contrasenia Incorrecta"})
    const token = generateJWT(verificarUserBDD._id)
    const {nombre, apellido, _id} = verificarUserBDD
    res.status(200).json({
        token,
        nombre,
        apellido,
        _id,
        email: verificarUserBDD.email
    })
}
const confirmarEmail = async(req, res) =>{
    if(!(req.params.token)) return res.status(400).json({msg: "No se puede validar la cuenta, lo siento"})
    const usuarioFindEmail = await Usuario.findOne({token: req.params.token})
    if(!usuarioFindEmail?.token) return res.status(400).json({msg: "Usuario ya verificado"})
    usuarioFindEmail.token = null
    usuarioFindEmail.confirmEmail = true
    await usuarioFindEmail.save()
    res.status(200).json({msg: "Verificacion completada!! Puede Iniciar sesion"})
}
const actualizarPassword = async(req, res) =>{
    const userBDD = await Usuario.findById(req.userBDD._id)
    if(!userBDD) return res.status(404).json({msg:`Lo sentimos, no existe el usuario ${id}`})
    const verificarPassword = await userBDD.matchPassword(req.body.passwordactual)
    if(!verificarPassword) return res.status(404).json({msg:"Lo sentimos, el password actual no es el correcto"})
    userBDD.password = await userBDD.encrypPassword(req.body.passwordnuevo)
    await userBDD.save()
    res.status(200).json({msg:"Password actualizado correctamente"})
}
const recuperarPassword = async(req, res) =>{
    const {email} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const userBDD = await Usuario.findOne({email})
    if(!userBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    const token = userBDD.createToken()
    userBDD.token=token
    await sendMailToRecoveryPassword(email,token)
    await userBDD.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para reestablecer tu cuenta"})
}
const perfil = (req, res) =>{
    delete req.userBDD.token
    delete req.userBDD.confirmEmail
    delete req.userBDD.createdAt
    delete req.userBDD.updatedAt
    delete req.userBDD.__v
    res.status(200).json(req.userBDD)
}
const nuevoPassword = async(req, res) =>{
    const{password,confirmpassword} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if(password != confirmpassword) return res.status(404).json({msg:"Lo sentimos, los passwords no coinciden"})
    const userBDD = await Usuario.findOne({token:req.params.token})
    if(userBDD?.token !== req.params.token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    userBDD.token = null
    userBDD.password = await userBDD.encrypPassword(password)
    await userBDD.save()
    res.status(200).json({msg:"Felicitaciones, ya puedes iniciar sesión con tu nuevo password"})
}
const comprobarTokenPassword = async(req, res) =>{
    if(!(req.params.token)) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    const userBDD = await Usuario.findOne({token:req.params.token})
    if(userBDD?.token !== req.params.token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    await userBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes crear tu nuevo password"}) 
}
const detalleUsuario = (req, res) =>{
    res.status(200).json({msg: "Detalle Usuario"})
}
const actualizarPerfil = async (req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, debe ser un id válido`});
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const userBDD = await Usuario.findById(id)
    if(!userBDD) return res.status(404).json({msg:`Lo sentimos, no existe el usuario ${id}`})
    if (us.email !=  req.body.email)
    {
        const userBDDMail = await Usuario.findOne({email:req.body.email})
        if (userBDDMail)
        {
            return res.status(404).json({msg:`Lo sentimos, el usuario ya se encuentra registrado`})  
        }
    }
    userBDD.nombre = req.body.nombre 
    userBDD.apellido = req.body.apellido 
    userBDD.email = req.body.email 
    await userBDD.save()
    res.status(200).json({msg:"Perfil actualizado correctamente"})
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
    detalleUsuario,
    actualizarPerfil
}