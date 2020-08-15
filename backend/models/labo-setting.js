const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const laboSettingSchema = new Schema({
  type: {type: String, required: true},
  name: {type: String, required: true},
  value: {type: Number},
  superscript: {type: Number},
  unit: {type: String},
  min: {type: Number},
  max: {type: Number},
  result: {type: Number},
}, {timestamps:true});
module.exports = mongoose.model('LaboSetting', laboSettingSchema);
