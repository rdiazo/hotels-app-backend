const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Reservation = sequelize.define('reservation', {
    checkIn: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOut: {
        type: DataTypes.DATE,
        allowNull: false
    },
    //userId
    //hotelId
});

module.exports = Reservation;