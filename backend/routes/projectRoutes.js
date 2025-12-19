const path = require("path");
const router = require("express").Router();
const authMiddleware = require(path.join(__dirname,"..","middleware","authMiddleware.js"));
const upload = require(path.join(__dirname,"..","middleware","multer.js"));

const {addProject, removeProject, listProject, singleProject, editProject} = require(path.join(__dirname,"..", "controller", "projectController.js"));


// add project
// api - /api/project/addProject
router.post("/addProject", authMiddleware, upload.array("images", 4), addProject);

// remove project
// api - /api/project/removeProject
router.delete("/removeProject/:id", authMiddleware, upload.none(), removeProject);

// list project
// api - /api/project/listProject
router.get("/listProject", listProject);

// single project
// api - /api/project/listProject
router.get("/singleProject/:id", singleProject);

// edit project
// api - /api/project/editProject
router.put("/editProject/:id", authMiddleware, upload.array("images", 4), editProject);

module.exports = router;