const Reserva = require('../models/reservas.js');

exports.getAllReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.json(reservas);
    } catch (error) {
        console.log("Hubo un error al traer las Reservas");
        res.json({ message: error.message });
    }
};

exports.createReserva = async (req, res) => {
    try {
        const nuevaReserva = await Reserva.create(req.body);
        res.json(nuevaReserva);
    } catch (error) {
        console.log("Hubo un error al crear la Reserva");
        res.json({ message: error.message });
    }
};
