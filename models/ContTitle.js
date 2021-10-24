const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  text: {type: String, required: true},
  moth: {type: Types.ObjectId, ref: 'SubCat', required: true},
})

module.exports = model('ContTitle', schema)
