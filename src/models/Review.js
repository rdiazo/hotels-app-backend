const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Review = sequelize.define('review', {
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //userId
    //hotelId
});

module.exports = Review;