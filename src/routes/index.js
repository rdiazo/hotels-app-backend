const express = require('express');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const hotelRouter = require('./hotel.router');
const imageRouter = require('./image.router');
const reviewRouter = require('./review.routers');
const reservationRouter = require('./reservation.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter);
router.use(cityRouter);
router.use(hotelRouter);
router.use(imageRouter);
router.use(reviewRouter);
router.use(reservationRouter);

module.exports = router;