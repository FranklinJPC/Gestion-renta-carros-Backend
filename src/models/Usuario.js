import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
        maxlength: 30
    },
    apellido: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    email: {
        type: String,
        require: true,
        trim: true,
        maxlength: 30
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    token: {
        type: String,
        default: null,
    },
    confirmEmail: {
        type: Boolean,
        default: false
    },
    estado: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

usuarioSchema.methods.encryptPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    const passwordEncrypt = await bcrypt.hash(password, salt)
    return passwordEncrypt
}
usuarioSchema.methods.matchPasswords = async function(password){
    const response = await bcrypt.compare(password, this.password)
    return response
}
usuarioSchema.methods.createToken = function(){
    const generarToken = this.token = Math.random().toString(36).slice(2)
    return generarToken
}
export default model('Usuario', usuarioSchema)