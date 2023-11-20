const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");


async function displayStudent(req,res){
  try {
    const students = await Student.find({});
    if (students.length > 0) {
      res.render("studentInterface", { titleName: "Student Info System", students: students, noStudents: false, error: false });
    } else {
      res.render("studentInterface", { titleName: "Student Info System", noStudents: true, error: false });
    }
  } catch (err) {
    console.error("Error:", err);
    res.render("studentInterface", { titleName: "Student Info System", error: true });
  }
}

router.get("/", async (req, res) => {
  try {
    const students = await Student.find({});
    if (students.length > 0) {
      res.render("studentInterface", { titleName: "Student Info System", students: students, noStudents:false, error:false });
    } else {
      res.render("studentInterface", { titleName: "Student Info System", noStudents: true, error:false });
    }
  } catch (err) {
    console.error("Error:", err);
    res.render("studentInterface", { titleName: "Student Info System", error: true });
  }
});

router.post("/", async (req, res) => {
  try{
    await insertDocument(req, res);
  }catch(err){
    console.log(err);
  }
    await displayStudent(req,res);
   
});

async function insertDocument(req, res) {
  try {
    const student = new Student({
      fullname: req.body.fullname,
      semester: req.body.semester,
      program: req.body.program
    });
    await student.save();
  } catch (err) {
    throw new Error("Error in creating document" + err);
  }
}

router.get("/delete/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const delStd = await Student.findByIdAndDelete(id);
      if (!delStd) {
          return res.status(404).json({ error: 'Student not found for this ID' });
      }
      else{
       await displayStudent(req,res)
      }
      
  } catch (error) {
      console.error('Error deleting student:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const editStd = await Student.findById(id);
      if (!editStd) {
          return res.status(404).json({ error: 'Student not found for this ID' });
      }
      else{
       res.render("editStudentInterface",{ titleName: "Edit Student Info", student: editStd});
      }
      
  } catch (error) {
      console.error('Error deleting student:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/update", async (req, res) => {
  try {
    const {id, fullname, semester, program } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(id, {
      fullname: fullname,
      semester: semester,
      program: program
    }, { new: true }); 

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found for this ID' });
    }
    else{
      console.log(req.body)
    
    }
    res.redirect("/student");
  } catch (error) {
    console.error('Error updating student:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
