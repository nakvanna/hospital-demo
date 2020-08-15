const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const laboSchema = new Schema({
  patient: {type: Schema.Types.ObjectID, ref: 'Patient', required: true},
  doctor: {type: String, required: true},
  title: {type: String, required: true},
  blood_pressure: {type: Number, required: true},
  pulse: {type: Number, required: true},
  heat: {type: Number, required: true},
  spo: {type: Number, required: true},
}, {timestamps:true});
module.exports = mongoose.model('Labo', laboSchema);
