const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Hotel = sequelize.define('hotel', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },  
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addres: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    //citiesId forenea
    lat: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    lon: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
});

module.exports = Hotel;