const express = require('express');
const { getAllGuias, createGuia } = require('../controllers/guias.js');

const router_guias = express.Router();

router_guias.get('/', getAllGuias);
router_guias.post('/', createGuia);

module.exports = router_guias;
