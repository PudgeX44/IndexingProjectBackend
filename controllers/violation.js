const mongoose = require("mongoose");

const ViolationSchema = new mongoose.Schema({
  violation: {
    type: String,
    required: [true, "Please enter violation"],
  },
  dateOfIncident: { type: Date },
  remarks: {
    type: String,
    required: [true, "Please input remarks"],
  },
});

module.exports = mongoose.model("Violation", ViolationSchema);
