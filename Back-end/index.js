require('dotenv').config();
const http = require('http');
const Routerusers = require('./routes/usuarios.js');
const Routerguias = require('./routes/guias.js');
const Routerexperiencias = require('./routes/experiencias.js');
const Routerreservas = require('./routes/reservas.js');
const express = require('express');
const app = express();





app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hola mundo');
});


app.use('/usuarios', Routerusers);
app.use('/guias', Routerguias);
app.use('/experiencias', Routerexperiencias);
app.use('/reservas', Routerreservas);




app.listen(8001, () => {
    console.log('Escuchando en el puerto 3000', 'http://localhost:8001');
});


