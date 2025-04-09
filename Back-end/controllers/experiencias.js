const Experiencia = require('../models/Experiencias.js');

exports.getAllExperiencias = async (req, res) => {
    try {
        const experiencias = await Experiencia.findAll();
        res.json(experiencias);
    } catch (error) {
        console.log("Hubo un error al traer las Experiencias");
        res.json({ message: error.message });
    }
};

exports.createExperiencia = async (req, res) => {
    try {
        const nuevaExperiencia = await Experiencia.create(req.body);
        res.json(nuevaExperiencia);
    } catch (error) {
        console.log("Hubo un error al crear la Experiencia");
        res.json({ message: error.message });
    }
};
