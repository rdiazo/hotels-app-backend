const catchError = require('../utils/catchError');
const Reservation = require('../models/Reservation');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const userId = req.user.id;
    const results = await Reservation.findAll({
        include: [{
            model: User,
            attributes: {
                exclude:[ 'password' ]
            }
        }],
        where: {
            userId
        }
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { checkIn, checkOut, hotelId } = req.body;
    const userId = req.user.id;
    const result = await Reservation.create({ checkIn, checkOut, hotelId, userId });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Reservation.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Reservation.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Reservation.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}