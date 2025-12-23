import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProductFormElements } from "../../data/formData";
import CommonForm from '../common/CommonForm';
import ImageUpload from "../adminView/ImageUpload";
import Api from '../../utility';
import { editProject, deleteProject,viewProject } from "../../redux/adminSlice";


const ViewProjects = () => {

  const [formData, setFormData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [imageFile, setImageFile] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [removeImages, setRemoveImages] = useState([]);

  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

 const getProject = useCallback(async() => {
     try {
      const data = await dispatch(viewProject(id)).unwrap();
      if (data?.success) {
        toast.success("Success", {
          description: `fetched project :  ${data?.project?.title}`,
        });

        console.log("proj cr : ",data);
        setFormData(
          {
            ...data?.project,
            commencementDate: data?.project?.commencementDate
              ? data?.project?.commencementDate.split("T")[0]
              : "",
          }
        );
        setExistingImages(data?.project?.images || []);
        return { success: true };
      };

      toast.error("Failed", {
        description: data?.message || "Something went wrong",
      });
      return { success: false };
      } catch (error) {
          console.error(error);
          toast.error("Failed", {
            description: error?.message || "Network error",
          });
          return { success: false };
      };
   }
   ,  [id])
 

  useEffect(() => {
   console.log(id);
   getProject();
  }, [navigate, id]);

  
  async function handleForm(e) {
    e.preventDefault();
    if (!isEdit) return;

    const formdata = new FormData();

    const cleanedData = {
      ...formData,
       keyTransport: formData.keyTransport?.filter(
        item => item.label?.trim() && item.value?.trim()
      ),
      features: formData.features?.filter(
        item => item.label?.trim() && item.value?.trim()
      ),
    };
    console.log("cl data : ", cleanedData);
    
  // Append normal form fields
    Object.entries(cleanedData).forEach(([key, value]) => {
      if (key === "features" || key === "keyTransport") {
        formdata.append(key, JSON.stringify(value));
      } else {
        formdata.append(key, value);
      }
    });
    // Append images
    formdata.append("existingImages", JSON.stringify(existingImages));
    formdata.append("removeImages", JSON.stringify(removeImages));
    imageFile.forEach((img) => formdata.append("images", img));

    for (let [key, value] of formdata.entries()) {
      console.log(key, value);
    };

    try {
      const data = await dispatch(editProject({formdata, id})).unwrap();
      console.log("proj cr : ",data);
          

      if (data?.success) {
        toast.success("Success", {
          description: `${data?.message}`,
        });

        navigate("/admin");
        return { success: true };
      };

      toast.error("Failed", {
        description: data?.message || "Something went wrong",
      });
      return { success: false };
    } catch (error) {
        console.error(error);
        toast.error("Failed", {
          description: error?.message || "Network error",
        });
        return { success: false };
    };
  }

  const handleDeleteProject = useCallback(async () => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const data = await dispatch(deleteProject(id)).unwrap();

      if (data?.success) {
        toast.success("Deleted", {
          description: "Project deleted successfully",
        });
        navigate("/admin");
      }
    } catch (err) {
      toast.error("Failed", {
        description: err?.message || "Delete failed",
      });
    }
  }
  ,  [id]);

  
  return (
    <section className='px-4'>
      <div className='container mx-auto'>

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">Project Details</h2>

          <div className="flex gap-3">
            {!isEdit ? (
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-xl"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-xl"
                  onClick={(e) => handleForm(e)}
                >
                  Update
                </button>

                <button
                  className="px-4 py-2 bg-gray-400 text-white rounded-xl"
                  onClick={() => setIsEdit(false)}
                >
                  Cancel
                </button>
              </>
            )}

            <button
              className="px-4 py-2 bg-red-600 text-white rounded-xl"
              onClick={handleDeleteProject}
            >
              Delete
            </button>
          </div>
        </div>

        <div>

          <ImageUpload 
            file={imageFile} setfile={setImageFile}
            isEdit={isEdit}
            existingImages={existingImages}
            setExistingImages={setExistingImages}
            removeImages={removeImages}
            setRemoveImages={setRemoveImages}
          />

          <CommonForm
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              onsubmit={handleForm}
              btnclass={"pt-5 justify-center"}
              formClass={`grid grid-cols-1 gap-3`}
              buttonText={"Book Free Consultation"}
              btntype='submit'
              isEdit={isEdit}
              btnHide={false}
          />

        </div>

      </div>
    </section>
  );
};

export default ViewProjects;