const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  text: {type: String, required: true, unique: true},
  moth: {type: Types.ObjectId, ref: 'Cat', required: true }
})

module.exports = model('SubCat', schema)
