const express = require('express');
const router = express.Router();
const Room = require('../models/room')

router.post('/', async (req, res, next) =>{
  try {
    let room = new Room(req.body);
    await room.save();
    res.json({
      status: true,
      data: room,
      message: 'Successfully saved!'
    })
  } catch (e) {
    res.json({
      status: false,
      // message: e.message.split(':')[0]
      message: e.message
    })
  }
});
router.get('/get', async (req, res, next) => {
  try {
    await Room.find().sort('-createdAt').exec(function (err, room) {
      res.json({
        status: true,
        data: room,
        message: 'Successfully fetched!'
      })
    });
  } catch (e) {
    res.json({
      status: false,
      // message: e.message.split(':')[0]
      message: e.message
    })
  }
})

module.exports = router;
