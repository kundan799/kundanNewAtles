const { Router } = require("express");
const StudentRouter = Router();
const Student = require("../models/Student.model");

//get the data of student (all student )
StudentRouter.get("/", async (req, res) => {
  try {
    const student = await Student.find();

    return res.send(student);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

//post the data of student (Create  student )
StudentRouter.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.send(student);
  } catch (err) 
  {
    return res.send({ message: err.message });
  }
});


//find the name of student (search)
StudentRouter.get("/name/:key", async (req, res) => {
  try {
    const student = await Student.find({
      $or: [{ name: { $regex: req.params.key } }],
    });

    return res.send(student);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

StudentRouter.get("/sort/asc", async (req, res) => {
  try {
    const student = await Student.find().sort({ age: 1 });

    return res.send(student);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

StudentRouter.get("/sort/desc", async (req, res) => {
    try {
      const student = await Student.find().sort({ age: -1 });
  
      return res.send(student);
    } catch (err) {
      return res.send({ message: err.message });
    }
  });
  

//find the students of gender()
StudentRouter.get("/gender/:studentgender", async (req, res) => {
  try {
    const student = await Student.find({ gender: req.params.studentgender });

    return res.send(student);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

//delete the data of student 

StudentRouter.delete("/delete/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    return res.send(student);
  } catch (err) {
    return res.send({ message: err.message });
  }
});

module.exports = StudentRouter;
