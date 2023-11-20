const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\s]+$/.test(value);
      },
    },
  },
  semester: {
    type: String,
    validate: {
      validator: function(value) {
        return /^[1-12]+$/.test(value);
      },
    },
  },
  program: {
    type: String,
    minlength: 1,
    maxlength: 15,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z]+$/.test(value);
      },
    },
  },
});


const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;

