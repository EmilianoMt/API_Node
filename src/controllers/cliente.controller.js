import Cliente from '../models/cliente.model.js';

export const createCliente = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.status(201).send(cliente);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).send(clientes);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getClienteByNumero = async (req, res) => {
    try {
        const { numero } = req.body;
        const numeroCliente = Number(numero);
        console.log(numeroCliente);
        

        if (isNaN(numeroCliente)) {
            return res.status(400).send({ error: 'El número de cliente no es válido' });
        }

        const cliente = await Cliente.findOne({ numero: numeroCliente });
        console.log(cliente);
        

        if (!cliente) {
            return res.status(404).send({ error: 'Cliente no encontrado' });
        }

        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send(error);
    }
};