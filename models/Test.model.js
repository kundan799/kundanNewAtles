const { Schema, model, default: mongoose } = require("mongoose");

const Test_shema = new Schema({
  Name: String,
  Subject: String,
  Marks: Number,
  Date: String,
  StudentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
});

const Tests = model("Test", Test_shema);

module.exports = Tests;
