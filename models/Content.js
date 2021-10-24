const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  img: {type: String, required: true},
  title: { type: String, required: true, unique: true },
  header: { type: String, required: true, unique: true },
  part_1: {
    header: { type: String, required: true },
    text: { type: String, required: true },
    img: { type: String },
    img_source: {type: String}
  },
  part_2: {
    header: { type: String, required: true },
    text: { type: String, required: true },
    img: { type: String },
    img_source: {type: String}
  },
  part_3: {
    header: { type: String, required: true },
    text: { type: String, required: true },
    img: { type: String },
    img_source: {type: String}
  },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  moth: {type: Types.ObjectId, ref: 'ContTitle', required: true}
});

module.exports = model("Content", schema);
