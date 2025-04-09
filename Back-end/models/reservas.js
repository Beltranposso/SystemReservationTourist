const db = require("../db/ConexionDB.js");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Reserva = db.define("reservas", {
    id: {
        type: DataTypes.STRING,
        defaultValue: () => uuidv4(),
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_experiencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Reserva;
