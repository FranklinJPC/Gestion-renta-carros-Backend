import { Router } from 'express';
import verificarAutenticacion from '../middlewares/autentication.js';
import{
    listarReserva,
    detalleReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva
} from '../controllers/reserva.controllers.js'
const router = Router()

router.get("/reservas", verificarAutenticacion, listarReserva);
router.get("/reserva/:id", verificarAutenticacion, detalleReserva);
router.post("/reserva/registro", verificarAutenticacion, crearReserva);
router.put("/reserva/actualizar/:id", verificarAutenticacion, actualizarReserva);
router.delete("/reserva/eliminar/:id", verificarAutenticacion, eliminarReserva);

export default router