const mongoose = require("mongoose");

const projectcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProjectCategory", projectcategorySchema);
