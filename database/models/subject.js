const { Schema, model } = require("mongoose");

const subjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Subject = model("Subject", subjectSchema);

module.exports = Subject;
