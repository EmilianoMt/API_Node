import Transaccion from '../models/transaccion.model.js';
import Cliente from '../models/cliente.model.js';

export const createTransaccion = async (req, res) => {
    try {
        const { numero_cliente, monto } = req.body;

        // Buscar el cliente por número
        let cliente = await Cliente.findOne({ numero: numero_cliente });

        if (!cliente) {
            // Si el cliente no existe, crear uno nuevo
            cliente = new Cliente({
                numero: numero_cliente,
                saldo: monto,
            });
        } else {
            // Si el cliente existe, actualizar el saldo
            cliente.saldo += monto;
        }

        // Guardar el cliente actualizado o nuevo
        await cliente.save();

        // Crear la transacción con estado "Exitoso"
        const transaccion = new Transaccion({
            ...req.body,
            estado: "Exitoso",
        });

        await transaccion.save();
        res.status(201).send(transaccion);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.find();
        res.status(200).send(transacciones);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getTransaccionesByNumeroCliente = async (req, res) => {
    try {
        const transacciones = await Transaccion.find({ numero_cliente: req.params.numero_cliente });
        if (!transacciones.length) {
            return res.status(404).send();
        }
        res.status(200).send(transacciones);
    } catch (error) {
        res.status(500).send(error);
    }
};