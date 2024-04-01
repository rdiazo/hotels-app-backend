const { getAll, create, getOne, remove, update } = require('../controllers/reservation.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const reservationRouter = express.Router();

reservationRouter.route('/reservations')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

reservationRouter.route('/reservations/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = reservationRouter;