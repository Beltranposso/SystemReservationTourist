// Importa los modelos necesarios
const Usuario = require('./Usuarios.js');
const Guia = require('./Guias.js');
const Experiencia = require('./Experiencias.js');
const Reserva = require('./reservas.js');

// Relación: Guía -> Experiencias
// Un guía puede tener muchas experiencias
Guia.hasMany(Experiencia, {
    foreignKey: 'id_guia',
    as: 'experiencias'
});
// Una experiencia pertenece a un guía
Experiencia.belongsTo(Guia, {
    foreignKey: 'id_guia',
    as: 'guia'
});

// Relación: Usuario -> Reservas 
// Un usuario puede hacer muchas reservas
Usuario.hasMany(Reserva, {
    foreignKey: 'id_usuario',
    as: 'reservas'
});
// Una reserva pertenece a un usuario
Reserva.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
});

// Relación: Experiencia -> Reservas
// Una experiencia puede tener muchas reservas
Experiencia.hasMany(Reserva, {
    foreignKey: 'id_experiencia',
    as: 'reservas'
});
// Una reserva pertenece a una experiencia
Reserva.belongsTo(Experiencia, {
    foreignKey: 'id_experiencia',
    as: 'experiencia'
});

// Exporta los modelos y sus relaciones para que se puedan importar en cualquier parte del codigo 
module.exports = {
    Usuario,
    Guia,
    Experiencia,
    Reserva
};
