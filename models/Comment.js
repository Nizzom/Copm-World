const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  author: {type: String, required: true, unique: true},
  text: {type: String, required: true, unique: true},
  date: {type: Date, default: Date.now},
  moth: {type: Types.ObjectId, ref: 'Content', required: true}
})

module.exports = model('Comment', schema)
