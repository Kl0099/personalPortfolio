const Project = require("../models/Projects");
const ProjectCategory = require("../models/ProjectCategory");
exports.createProject = async (req, res) => {
  try {
    let { name, category, description, thumbnail, githublink, livelink } =
      req.body;

    if (!name || !category || !description || !thumbnail || !githublink) {
      return res.status(404).json({
        success: false,
        message: "all fields are required",
      });
    }

    category = category.toLowerCase();
    const isCategory = ProjectCategory.find({ name: category });
    if (!isCategory) {
      return res.status(404).json({
        success: false,
        message: "category is not found  first create a new category",
      });
    }

    if (!livelink) {
      livelink = githublink;
    }

    const project = await Project.create({
      name: name,
      description: description,
      thumbnail: thumbnail,
      githublink: githublink,
      livelink: livelink,
      projectCategory: category,
    });

    return res.status(200).json({
      success: true,
      message: "project created",
      data: project,
    });
  } catch (error) {
    console.log("error while creating project", error.message);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    let { category } = req.body;
    if (!category) {
      return res.status(400).json({
        success: false,
        message: "category is required!!!",
      });
    }

    category = category.toLowerCase();

    const projectcategory = await ProjectCategory.create({
      name: category,
    });

    return res.status(200).json({
      success: true,
      message: "project category created",
      data: projectcategory,
    });
  } catch (error) {
    console.log("errro while create a category");
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const {
      name,
      projectId,
      thumbnail,
      description,
      githublink,
      livelink,
      category,
    } = req.body;

    const isProject = await Project.findById(projectId);
    if (!isProject)
      return res.status(404).json({
        success: false,
        message: "project does not found",
      });
    if (name) {
      isProject.name = name;
    }
    if (description) {
      isProject.description = description;
    }
    if (thumbnail) {
      isProject.thumbnail = thumbnail;
    }
    if (githublink) {
      isProject.githublink = githublink;
    }
    if (livelink) {
      isProject.livelink = livelink;
    }
    if (category) {
      isProject.projectCategory = category;
    }

    await isProject.save();
    return res.status(201).json({
      success: true,
      message: "project update successfully",
      data: isProject,
    });
  } catch (error) {
    console.log("errro while updating a project");
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    let { category } = req.body;
    category = category.toLowerCase();
    await ProjectCategory.findOneAndDelete({ name: category });

    return res.status(200).json({
      success: true,
      message: "project delete successfully ",
    });
  } catch (error) {
    console.log("error while deleting cateogry");
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

exports.getAllDetails = async (req, res) => {
  try {
    // console.log("ewwwwwwwwwwwww");
    let category = [];
    let projectDetails = [];
    const Allcategory = await ProjectCategory.find({}).exec();
    // category.push(Allcategory);
    // console.log(Allcategory);
    const projects = await Project.find({}).exec();
    // projectDetails.push(projects);

    // console.log(projects);
    // console.log("bye : ");
    return res.status(200).json({
      success: true,
      message: "successfully get all details",
      category: Allcategory,
      projects: projects,
    });
  } catch (error) {
    console.log("error while get requiest : ");
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
