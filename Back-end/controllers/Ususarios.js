



const Usuario = require('../models/Usuarios.js');

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.log("Hubo un error al traer los Usuarios");
        res.json({ message: error.message });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        console.log("Hubo un error al crear el Usuario");
        res.json({ message: error.message });
    }
};
