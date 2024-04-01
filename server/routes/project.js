const express = require("express");
const {
  createProject,
  updateProject,
  deleteCategory,
  createCategory,
  getAllDetails,
} = require("../controllers/project");
const router = express.Router();
router.get("/getAllDetails", getAllDetails);
router.post("/createProject", createProject);
router.post("/updateProject", updateProject);
router.post("/createCategory", createCategory);
router.delete("/deleteCategory", deleteCategory);

module.exports = router;
