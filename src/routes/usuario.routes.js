import { Router } from "express";
import verificarAutenticacion from "../middlewares/autentication.js";
import{
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
} from '../controllers/usuario.controllers.js'
const router = Router()

router.post('/login',login)
router.post('/registro',registro)
router.get('/confirmar/:token',confirmarEmail)
router.post('/recuperar-password',recuperarPassword)
router.get('/recuperar-password/:token',comprobarTokenPassword)
router.post('/nuevo-password/:token',nuevoPassword)

router.get('/perfil', verificarAutenticacion, perfil)
router.put('/usuario/actualizarpassword', verificarAutenticacion, actualizarPassword)
router.get('/usuario/:id', verificarAutenticacion, detalleUsuario)
router.put('/usuario/actualizar/:id', verificarAutenticacion, actualizarPerfil)

export default router