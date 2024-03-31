const express = require("express");
const {
  createProject,
  updateProject,
  deleteCategory,
  createCategory,
} = require("../controllers/project");
const router = express.Router();

router.post("/createProject", createProject);
router.post("/updateProject", updateProject);
router.post("/createCategory", createCategory);
router.delete("/deleteCategory", deleteCategory);

module.exports = router;
