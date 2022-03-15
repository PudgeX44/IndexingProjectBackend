const Docket = require("../models/Dockets");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllDockets = async (req, res) => {
  const docket = await Docket.find({});
  res.status(StatusCodes.OK).json({ docket });
};
const getDocket = async (req, res) => {
  const { id: docketId } = req.params;
  const docket = await Docket.findById({ _id: docketId });
  if (!docket) {
    throw new NotFoundError("docket is not in the database");
  }
  res.status(StatusCodes.OK).json({ docket });
};
const createDocket = async (req, res) => {
  const docket = await Docket.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ docket });
};
const updateDocket = async (req, res) => {
  const { id: docketId } = req.params;
  Object.entries(req.body).map((item) => {
    if (!item[1]) {
      throw new BadRequestError("Please input values to be updated");
    }
  });
  const docket = await Docket.findByIdAndUpdate({ _id: docketId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!docket) {
    throw new NotFoundError("docket is not in the database");
  }
  res.send({ ...req.body });
};
const deleteDocket = async (req, res) => {
  const { id: docketId } = req.params;
  const docket = await Docket.findByIdAndDelete({ _id: docketId });
  if (!docket) {
    throw new NotFoundError("docket is not in the database");
  }
  res.status(StatusCodes.OK).send("deleted docket");
};

module.exports = {
  getAllDockets,
  getDocket,
  createDocket,
  updateDocket,
  deleteDocket,
};
