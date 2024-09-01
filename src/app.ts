import express, { Request, Response } from 'express'
import "dotenv/config"
import db from "./config/database"
import router from './routes/routes'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/', router)

app.listen(PORT, () => console.log(`Express API running on port ${PORT}`))