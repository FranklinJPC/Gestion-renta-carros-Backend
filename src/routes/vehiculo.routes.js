import { Router } from 'express';
import verificarAutenticacion from '../middlewares/autentication.js';
import{
    listarVehiculo,
    detalleVehiculo,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
} from '../controllers/vehiculo.controllers.js'
const router = Router()

router.get("/vehiculos", verificarAutenticacion, listarVehiculo);
router.get("/vehiculo/:id", verificarAutenticacion, detalleVehiculo);
router.post("/vehiculo/registro", verificarAutenticacion, crearVehiculo);
router.put("/vehiculo/actualizar/:id", verificarAutenticacion, actualizarVehiculo);
router.delete("/vehiculo/eliminar/:id", verificarAutenticacion, eliminarVehiculo);

export default router