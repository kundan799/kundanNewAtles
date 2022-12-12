const { model, Schema } = require("mongoose");

const Student_shema = new Schema({
  name: String,
  gender: String,
  age: Number,
});

const Students = model("Student", Student_shema);

module.exports = Students;
