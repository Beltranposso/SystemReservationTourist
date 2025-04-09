const express = require('express');
const { getAllUsuarios, createUsuario } = require('../controllers/Ususarios.js');

const router_usuarios = express.Router();

router_usuarios.get('/', getAllUsuarios);
router_usuarios.post('/', createUsuario);

module.exports = router_usuarios;
