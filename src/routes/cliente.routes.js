import { Router } from 'express';
import{
    listarClientes,
    detalleCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
} from '../controllers/cliente.controllers.js'
const router = Router()

router.get("/clientes", listarClientes);
router.get("/cliente/:id", detalleCliente);
router.post("/cliente/registro", crearCliente);
router.put("/cliente/actualizar/:id", actualizarCliente);
router.delete("/cliente/eliminar/:id", eliminarCliente);

export default router