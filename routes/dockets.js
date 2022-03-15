const express = require("express");
const router = express.Router();

const {
  getAllDockets,
  getDocket,
  createDocket,
  updateDocket,
  deleteDocket,
} = require("../controllers/dockets");

router.route("/").get(getAllDockets).post(createDocket);
router.route("/:id").get(getDocket).patch(updateDocket).delete(deleteDocket);

module.exports = router;
