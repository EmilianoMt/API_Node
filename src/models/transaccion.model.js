import mongoose from 'mongoose';

const transaccionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    numero_cliente: {
        type: String,
        required: true,
    },
    monto: {
        type: Number,
        required: true,
    },
    conpañia: {
        type: String,
        default: 'Movistar',
    },
    fecha_hora: {
        type: Date,
        default: Date.now,
    },
    estado: {
        type: [String],
        required: true,
    },
});

const Transaccion = mongoose.model('Transaccion', transaccionSchema);

export default Transaccion;