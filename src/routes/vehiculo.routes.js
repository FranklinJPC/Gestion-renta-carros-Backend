import { Router } from 'express';
import{
    listarVehiculo,
    detalleVehiculo,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
} from '../controllers/vehiculo.controllers.js'
const router = Router()

router.get("/vehiculos", listarVehiculo);
router.get("/vehiculo/:id", detalleVehiculo);
router.post("/vehiculo/registro", crearVehiculo);
router.put("/vehiculo/actualizar/:id", actualizarVehiculo);
router.delete("/vehiculo/eliminar/:id", eliminarVehiculo);

export default router