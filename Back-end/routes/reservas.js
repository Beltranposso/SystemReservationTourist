const express = require('express');
const { getAllReservas, createReserva } = require('../controllers/reservas.js');

const router_reservas = express.Router();

router_reservas.get('/', getAllReservas);
router_reservas.post('/', createReserva);

module.exports = router_reservas;
