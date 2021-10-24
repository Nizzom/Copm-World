const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  text: {type: String, required: true, unique: true},
})

module.exports = model('Cat', schema)
