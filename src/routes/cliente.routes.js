import express from 'express';
import { createCliente, getClientes, getClienteByNumero } from '../controllers/cliente.controller.js';

const router = express.Router();

router.post('/clientes', createCliente);
router.get('/clientes', getClientes);
router.post('/clientes/saldo', getClienteByNumero);

export default router;