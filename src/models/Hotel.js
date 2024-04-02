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
        type: DataTypes.INTERGER,
        allowNull: false
    },
    lon: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Hotel;