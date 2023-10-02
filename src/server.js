import Express  from "express"
import cors from 'cors'
import dotenv from 'dotenv'
const app = Express()
dotenv.config()

app.set('port', process.env.PORT || 3003)
app.use(cors())

app.use(Express.json())

app.get('/', (req, res)=>{res.status(200).json({msg: "Funciona!!"})})

app.use((req, res)=>{res.status(404).json({msg: "Endpoint no encontrado"})})

export default app
