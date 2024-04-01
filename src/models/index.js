const City = require("./City");
const Image = require("./Image");
const Hotel = require("./Hotel");
const User = require("./User");
const Review = require("./Review");
const Reservation = require("./Reservation");

City.hasMany(Hotel);
Hotel.belongsTo(City);

Hotel.hasMany(Image);
Image.belongsTo(Hotel);

User.hasMany(Review);
Review.belongsTo(User);

Hotel.hasMany(Review);
Review.belongsTo(Hotel);

Hotel.hasMany(Reservation);
Reservation.belongsTo(Hotel);

User.hasMany(Reservation);
Reservation.belongsTo(User);