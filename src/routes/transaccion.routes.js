import express from 'express';
import { createTransaccion, getTransacciones, getTransaccionesByNumeroCliente } from '../controllers/transaccion.controller.js';

const router = express.Router();

router.post('/transacciones', createTransaccion);
router.get('/transacciones', getTransacciones);
router.get('/transacciones/:numero_cliente', getTransaccionesByNumeroCliente);

export default router;