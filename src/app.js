import express from 'express';
import clienteRoutes from './routes/cliente.routes.js';
import transaccionRoutes from './routes/transaccion.routes.js';


const app = express();

app.use(express.json());
app.use(`/api/movistar`, clienteRoutes);
app.use('/api/movistar', transaccionRoutes);

export default app;

