const express = require('express');
const { getAllExperiencias, createExperiencia } = require('../controllers/experiencias.js');

const router_experiencias = express.Router();

router_experiencias.get('/', getAllExperiencias);
router_experiencias.post('/', createExperiencia);

module.exports = router_experiencias;
