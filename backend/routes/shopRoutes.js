const path = require("path");
const router = require("express").Router();

const { listProject, singleProject } = require(path.join(__dirname,"..", "controller", "shopController.js"));


// list project
// api - /api/shop/listProject
router.post("/listProject", listProject);

// single project
// api - /api/shop/listProject
router.get("/singleProject/:id", singleProject);

module.exports = router;