import { Router } from 'express';
import verificarAutenticacion from '../middlewares/autentication.js';
import{
    listarClientes,
    detalleCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
} from '../controllers/cliente.controllers.js'
const router = Router()

router.get("/clientes", verificarAutenticacion, listarClientes);
router.get("/cliente/:id", verificarAutenticacion, detalleCliente);
router.post("/cliente/registro", verificarAutenticacion, crearCliente);
router.put("/cliente/actualizar/:id", verificarAutenticacion, actualizarCliente);
router.delete("/cliente/eliminar/:id", verificarAutenticacion, eliminarCliente);

export default router