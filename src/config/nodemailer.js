import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transport = nodemailer.createTransport({
    host: process.env.HOST_NODEMAILER,
    port: process.env.PORT_NODEMAILER,
    auth:{
        user: process.env.USER_NODEMAILER,
        pass: process.env.PASS_NODEMAILER
    }
})

const sendEmailConfirm = async(userEmail, token)=>{
    let info = await transport.sendMail({
        from: 'gestionRentaVehiculos@outlook.com',
        to: userEmail,
        subject: "Verificacion de cuenta nueva",
        html: 
        `
        <h1>RENTA DE VEHICULOS</h1>
        <hr>
        <a href="${process.env.API}/confirmar/${token}">Click aqui para confirmar tu cuenta</a>
        <hr>
        <footer>Bienvenido!!!</footer>
        `
    })
    console.log("Mensaje de envio satisfactorio", info.messageId)
}
const sendMailToRecoveryPassword = async(userMail,token)=>{
    let info = await transport.sendMail({
    from: 'gestionRentaVehiculos@outlook.com',
    to: userMail,
    subject: "Correo para reestablecer tu contraseña",
    html: `
    <h1>RENTA DE VEHICULOS</h1>
    <hr>
    <a href="${process.env.API}/recuperar-password/${token}">Clic para reestablecer tu contraseña</a>
    <hr>
    <footer>Bienvenido!!!</footer>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}
export{
    sendEmailConfirm,
    sendMailToRecoveryPassword
}