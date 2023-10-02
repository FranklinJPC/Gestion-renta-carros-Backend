import Express  from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import rutasUsuario from './routes/usuario.routes.js'
import rutasCliente from './routes/cliente.routes.js'
import rutasVehiculo from './routes/vehiculo.routes.js'
import rutasReserva from './routes/reserva.routes.js'

const app = Express()
dotenv.config()

app.set('port', process.env.PORT || 3003)
app.use(cors())

app.use(Express.json())

app.get('/', (req, res)=>{res.status(200).json({msg: "Funciona!!"})})
app.use('/api', rutasUsuario)
app.use('/api', rutasCliente)
app.use('/api', rutasVehiculo)
app.use('/api', rutasReserva)

app.use((req, res)=>{res.status(404).json({msg: "Endpoint no encontrado"})})

export default app
