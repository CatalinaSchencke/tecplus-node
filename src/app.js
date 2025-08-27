import express from 'express';
import userRouter from './routes/user.js';


const app = express();


// Middlewares globales
app.use(express.json());


// Rutas
app.use('/user', userRouter);


// Manejo básico de 404
app.use((req, res) => {
res.status(404).json({ error: 'Recurso no encontrado' });
});


export default app;