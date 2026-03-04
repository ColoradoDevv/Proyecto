import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';

// cargar variables de entorno desde .env
dotenv.config();

mongoose.set('strictQuery', true) //Permite evitar advertencias de moongose
mongoose.Promise = global.Promise;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sia';

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Conecto exitosamente la base de datos!')
})
.catch((err) => {
    console.error('Error al conectar el MongoDB. ', err)
})

// Middleware servidor (end-points), rutas (Router)

const app = express();

// CORS básico permitiendo frontend local
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}));

app.use(bodyParser.json());// Permite leer datos en modo json
app.use(bodyParser.urlencoded({extented: true}));

app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`Servidor Corriendo en.. Puerto ${port}`)
})

const uploadsPath = path.resolve('uploads');
if(!fs.existsSync(uploadsPath)) {
    fs.mkdirSync(uploadsPath, {recursive: true});
}

// rutas estáticas de uploads
app.use('/uploads', express.static(uploadsPath));

// rutas de API externas
import apiRouter from './routes/api.js';
app.use('/api', apiRouter);
