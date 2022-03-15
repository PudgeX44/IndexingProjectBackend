const mongoose = require("mongoose");

const DocketSchema = new mongoose.Schema({
  points: {
    type: Number,
    required: [true, "Please enter number of points"],
    min: 1,
    max: 10,
  },
  docketNumber: {
    type: String,
    required: [true, "Please enter docket number"],
    unique: true,
    match: [
      /^201\d-1?\d[a-zA-Z]-[0-9]+$/,
      "Please provide correct docket number",
    ],
  },
  firstname: {
    type: String,
    required: [true, "Please enter first name"],
  },
  middlename: {
    type: String,
    required: [true, "Please enter middle name"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter last name"],
  },
  suffix: {
    type: String,
  },
  sex: {
    type: String,
    enum: ["male", "female"],
  },
  birthdate: { type: Date },
  province: { type: String },
  municipalityOrCity: { type: String },
  specificPlace: { type: String },
  notes: { type: String },
  consent: { type: Boolean },
  withPicture: {
    type: Boolean,
    required: [true, "Please input if picture of victim is present or not"],
    default: false,
  },
});

module.exports = mongoose.model("Docket", DocketSchema);
