import { Router } from "express";
import{
    registro,
    login,
    confirmarEmail,
    actualizarPassword,
    recuperarPassword,
    perfil,
    nuevoPassword,
    comprobarTokenPassword,
    detalleUsuario
} from '../controllers/usuario.controllers.js'
const router = Router()

router.post('/login',login)
router.post('/registro',registro)
router.get('/confirmar/:token',confirmarEmail)
router.post('/recuperar-password',recuperarPassword)
router.get('/recuperar-password/:token',comprobarTokenPassword)
router.post('/nuevo-password/:token',nuevoPassword)

router.get('/perfil',perfil)
router.put('/usuario/actualizarpassword',actualizarPassword)
router.get('/usuario/:id', detalleUsuario)

export default router