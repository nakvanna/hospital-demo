const express = require('express');
const router = express.Router();
const Labo = require('../models/labo');
const Labo_Detail = require('../models/labo-detail')

// POST request - create a new labo
router.post('/', async (req, res, next) => {
  // console.log(req.body)
  try {
    let labo_add = new Labo(req.body);
    await labo_add.save().then(async (data) => {
      let labo_id = data._id;
      let hematology = req.body.hematology;
      let biochemistry = req.body.biochemistry;
      let hormonologie = req.body.hormonologie;
      let ionogram = req.body.ionogram;
      let serology = req.body.serology;
      hematology.map(async (data) => {
        let labo_detail = new Labo_Detail({
          labo: labo_id,
          type: data.type,
          name: data.name,
          value: data.value,
          superscript: data.superscript,
          unit: data.unit,
          min: data.min,
          max: data.max,
          result: data.result
        });
        await labo_detail.save();
      });
      biochemistry.map(async (data) => {
        let labo_detail = new Labo_Detail({
          labo: labo_id,
          type: data.type,
          name: data.name,
          value: data.value,
          superscript: data.superscript,
          unit: data.unit,
          min: data.min,
          max: data.max,
          result: data.result
        });
        await labo_detail.save();
      });
      hormonologie.map(async (data) => {
        let labo_detail = new Labo_Detail({
          labo: labo_id,
          type: data.type,
          name: data.name,
          value: data.value,
          superscript: data.superscript,
          unit: data.unit,
          min: data.min,
          max: data.max,
          result: data.result
        });
        await labo_detail.save();
      });
      ionogram.map(async (data) => {
        let labo_detail = new Labo_Detail({
          labo: labo_id,
          type: data.type,
          name: data.name,
          value: data.value,
          superscript: data.superscript,
          unit: data.unit,
          min: data.min,
          max: data.max,
          result: data.result
        });
        await labo_detail.save();
      });
      serology.map(async (data) =>{
        let labo_detail = new Labo_Detail({
          labo: labo_id,
          type: data.type,
          name: data.name,
          value: data.value,
          superscript: data.superscript,
          unit: data.unit,
          min: data.min,
          max: data.max,
          result: data.result
        });
        await labo_detail.save();
      });
    });
    await Labo.findById(labo_add._id).populate('patient').exec(function (err, labo) {
      res.json({
        status: true,
        data: labo,
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
});
// GET request - get labo
router.get('/get', async (req, res, next) => {
  try {
    await Labo.find().sort('-createdAt').populate('patient').exec(function (err, labo) {
      res.json({
        status: true,
        data: labo,
        message: 'Successfully fetched!'
      })
    });
  } catch (e) {
    res.json({
      status: false,
      message: e.message.split(':')[0]
    })
  }
});
router.get('/:id/get', async (req, res, next) => {
  try {
    let labo = await Labo.findById(req.params.id).populate('patient');
    res.json({
      status: true,
      data: labo,
      message: 'Successfully fetched!'
    })
  } catch (e) {
    res.json({
      status: false,
      message: e.message.split(':')[0]
    })
  }
});
// router.get('/:id/get-by-id', async (req, res, next) => {
//   console.log('World');
//   try {
//     await Labo.findById(req.params.id).select('_id').populate('patient', '_id').exec(function (err, labo) {
//       res.json({
//         status: true,
//         data: labo,
//         message: 'Successfully fetched!'
//       })
//     });
//   } catch (e) {
//     res.json({
//       status: false,
//       message: e.message.split(':')[0]
//     })
//   }
// });
router.put('/:id/update', async (req, res, next) => {
  let id = req.params.id;
  try {
    await Labo.findByIdAndUpdate(id, {$set: req.body}, {new: true}).populate('patient')
      .exec(function (err, labo) {
        if (!err) {
          res.json({
            status: true,
            data: labo,
            message: 'Successfully updated!'
          })
        }
      });
  } catch (e) {
    res.json({
      status: false,
      message: e.message.split(':')[0]
    })
  }
});
router.put('/detail/:id/update', async (req, res, next) => {
  let id = req.params.id;
  try {
    await Labo_Detail.findByIdAndUpdate(id, {$set: req.body}, {new: true})
      .exec(function (err, labo_detail) {
        if (!err) {
          res.json({
            status: true,
            data: labo_detail,
            message: 'Successfully updated!'
          })
        }
      });
  } catch (e) {
    res.json({
      status: false,
      message: e.message.split(':')[0]
    })
  }
});
router.get('/:id/edit', async (req, res, next) => {
  try {
    let labo = await Labo.findById(req.params.id).populate('patient');
    res.json({
      status: true,
      data: labo,
      message: 'Successfully fetched!'
    })
  } catch (e) {
    res.json({
      status: false,
      message: e.message.split(':')[0]
    })
  }
});
module.exports = router;
