const Guia = require('../models/Guias.js');

exports.getAllGuias = async (req, res) => {
    try {
        const guias = await Guia.findAll();
        res.json(guias);
    } catch (error) {
        console.log("Hubo un error al traer los Guías");
        res.json({ message: error.message });
    }
};

exports.createGuia = async (req, res) => {
    try {
        const nuevoGuia = await Guia.create(req.body);
        res.json(nuevoGuia);
    } catch (error) {
        console.log("Hubo un error al crear el Guía");
        res.json({ message: error.message });
    }
};
