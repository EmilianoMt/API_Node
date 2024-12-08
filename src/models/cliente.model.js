import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    numero: {
        type: Number,
        required: true,
    },
    saldo: {
        type: Number,
        required: true,
    },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;