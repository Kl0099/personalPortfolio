const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    thumbnail: String,
    description: String,
    projectCategory: {
      type: String,
      ref: "ProjectCategory",
    },
    githublink: String,
    livelink: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
