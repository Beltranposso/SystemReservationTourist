const db = require("../db/ConexionDB.js");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Experiencia = db.define("experiencias", {
    id: {
        type: DataTypes.STRING,
        defaultValue: () => uuidv4(),
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    capacidad_maxima: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_guia: {
        type: DataTypes.STRING,
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

module.exports = Experiencia;
