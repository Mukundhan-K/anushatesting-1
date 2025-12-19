const path = require("path");
const projDb = require(path.join(__dirname,"..","model","project.js"));
const cloudinary = require("cloudinary").v2;
const {throwError} = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"))


// ==============================================
// add products =================================

// route - get - api/product/add
// access - / middleware - multer upload  / -  private -

const addProject = async (req,res,next)=>{
    try {
        console.log("inside add")
        // console.log("body : ",req.body);
        console.log("files : ",req.files);

        if (!req?.files || req?.files?.length === 0) {
            return throwError("At least one image is required", 400);
        };
        if (req?.files?.length > 4) {
            return throwError("Maximum 4 images allowed", 400);
        };
        
    // Access other form data
        const {title, description, status, projectType, projectArea, commencementDate, priceRange, numberOfFloors,
            specialFeatures, amenities, video, mapLink, location, address
         } = req.body;
         
        const features = JSON.parse(req?.body?.features || "[]");
        const keyTransport = JSON.parse(req?.body?.keyTransport || "[]");
        
        const imageUrls = [];

        // Upload images to Cloudinary
        for (const file of req?.files) {
            const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "anushaprojects" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(file.buffer);
            });

            imageUrls.push(result.secure_url);
        };

        // Save to DB
        const project = {
           title, description, status, projectType, commencementDate, priceRange,
            specialFeatures, amenities, features, video, mapLink, location, address, keyTransport,
            images: imageUrls,
        };

        console.log("project : ", project);

        const projectCR = await projDb.create({
            ...project,
            projectArea: Number(projectArea),
            numberOfFloors: Number(numberOfFloors),
        });

        if (projectCR) {
            return res.status(201).json({
                success : true,
                message : "project added",
                project : projectCR
            });
        } else {
            return throwError("project creation failed", 401);
        };

    } catch (error) {
        next(error);
    };
};

// ==============================================
// list products =================================

// route - get - api/product/list
// access - private -

const listProject = async(req,res,next)=>{
    try {
        console.log("list projects");
        
        const projects = await projDb.find({});
        if (!projects) {
            throwError("Projects fetching Failed", 401);
        };
        // console.log(projects);
        
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
// edit products =================================

// route - get - api/product/editProject
// access - private -

const editProject = async(req,res, next)=>{
    try {
        const id= req.params.id;
        console.log("id : ",id, req.body);

        // Parse JSON fields
        const features = req.body.features
        ? JSON.parse(req.body.features)
        : [];

        const keyTransport = req.body.keyTransport
        ? JSON.parse(req.body.keyTransport)
        : [];

        const existingImages = req.body.existingImages
        ? JSON.parse(req.body.existingImages)
        : [];

        const removeImages = req.body.removeImages
        ? JSON.parse(req.body.removeImages)
        : [];

        let finalImages = [...existingImages];

        console.log("removeImages : ", removeImages);
        

        // Upload new images
        for (const file of req.files || []) {
            const result = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                { folder: "anushaprojects" },
                (err, result) => (err ? reject(err) : resolve(result))
                ).end(file.buffer);
            });

            finalImages.push(result.secure_url);
        }

        // Delete removed images from Cloudinary
        for (const img of removeImages) {
            const publicId = img.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`anushaprojects/${publicId}`);
        }

        // Build safe update object
        const updateData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            projectType: req.body.projectType,
            commencementDate: req.body.commencementDate,
            priceRange: req.body.priceRange,
            specialFeatures: req.body.specialFeatures,
            amenities: req.body.amenities,
            video: req.body.video,
            mapLink: req.body.mapLink,
            location: req.body.location,
            address: req.body.address,

            projectArea: Number(req.body.projectArea),
            numberOfFloors: Number(req.body.numberOfFloors),

            features,
            keyTransport,
            images: finalImages,
        };

        const updatedProject = await projDb.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            throwError("Update failed", 400);
        };
        return res.status(201).json({
            success : true,
            message: "Project updated successfully",
            project: updatedProject,
        });

    } catch (error) {
        next(error);
    };
};

// ==============================================
// single products =================================

// route - get - api/product/singleProject
// access - private -

const singleProject = async(req,res, next)=>{
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

// ==============================================
// remove products =================================

// route - post - api/product/removeProject
// access - private -

const removeProject = async(req,res, next)=>{
    try {
       
        const { id } = req.params;

        console.log("del proj : ", id);
        console.log("Type:", typeof id);

        const project = await projDb.findById(id);
        if (!project) {
            throwError("project not removed", 401);
        };

        // 2️⃣ Delete images from Cloudinary
        if (project.images && project.images.length > 0) {
        for (const img of project.images) {
            const publicId = img.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`anushaprojects/${publicId}`);
        }
        }

        // 3️⃣ Delete project from DB
        await projDb.findByIdAndDelete(id);

        return res.status(200).json({
            success : true,
            message : "Project deleted successfully"
        });

    } catch (error) {
       next(error);
    }
};


// ==========================================================

module.exports = {addProject, removeProject, listProject, singleProject, editProject};