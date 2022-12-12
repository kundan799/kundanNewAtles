const { Router } = require("express");
const TestRouter = Router();
const Test = require("../models/Test.model");

TestRouter.get("/get", async (req, res) => {
  //   console.log(req.params.studentId);

  try {
    const data = await Test.find();
    console.log(data);
    return res.send(data);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

TestRouter.get("/:studentId", async (req, res) => {
  //   console.log(req.params.studentId);

  try {
    const data = await Test.find({ StudentId: req.params.studentId });
    console.log(data);
    return res.send(data);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

TestRouter.post("/", async (req, res) => {
  try {
    const test = await Test.create(req.body);

    return res.send(test);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

TestRouter.delete("/delete/:id", async (req, res) => {
  try {
    const test = await Test.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(test);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

module.exports = TestRouter;
