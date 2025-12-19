const path = require("path");
const projDb = require(path.join(__dirname,"..","model","project.js"));
const {throwError} = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"))

// ==============================================
// list products =================================

// route - get - api/shop/list
// access - private -

const listProject = async(req,res,next)=>{
    try {
        console.log("list projects", req.body);
        const data = req.body || {};
        
        const projects = await projDb.find(data);
        if (!projects) {
            throwError("Projects fetching Failed", 401);
        };
        console.log(projects);
        
        return res.status(200).json({
            success : true,
            message : "list of all projects",
            projects
        });

    } catch (error) {
        next(error); 
    };
};

// ==============================================
// single products =================================

// route - get - api/shop/singleProject
// access - private -

const singleProject = async(req,res,next)=>{
    try {
       
        const projID = req.params.id;
        
        const project = await projDb.findById(projID);
        if (!project) {
            throwError("project not removed", 401);
        };
        return res.status(200).json({
            success : true,
            project
        });

    } catch (error) {
       next(error);
    }
};
// ==========================================================

module.exports = { listProject, singleProject };