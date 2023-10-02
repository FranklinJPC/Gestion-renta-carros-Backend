import { Router } from 'express';
import{
    listarReserva,
    detalleReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva
} from '../controllers/reserva.controllers.js'
const router = Router()

router.get("/reservas", listarReserva);
router.get("/reserva/:id", detalleReserva);
router.post("/reserva/registro", crearReserva);
router.put("/reserva/actualizar/:id", actualizarReserva);
router.delete("/reserva/eliminar/:id", eliminarReserva);

export default router