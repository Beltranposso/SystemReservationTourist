const db = require("../db/ConexionDB.js");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Usuario = db.define("usuarios", {
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

module.exports = Usuario;
