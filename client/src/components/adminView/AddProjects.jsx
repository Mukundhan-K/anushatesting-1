import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProductFormElements } from "../../data/formData";
import CommonForm from '../common/CommonForm';
import ImageUpload from "./ImageUpload";

import { addProject } from "../../redux/adminSlice";

const AddProjects = () => {

  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  async function handleForm(e) {
    e.preventDefault();
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
    imageFile?.forEach((img) => {
      formdata.append("images", img);
    });

    for (let [key, value] of formdata.entries()) {
      console.log(key, value);
    };

    try {

      const data = await dispatch(addProject(formdata)).unwrap();
      console.log("proj cr : ",data);

      if(data?.success) {
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
  
  return (
    <section className='px-4'>
      <div className='container mx-auto'>

        <div className="flex justify-between items-center pb-5">
          <h2 className="text-xl font-semibold">Add Project</h2>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded-xl"
            onClick={(e) => handleForm(e)}
          >
            Add Project
          </button>
      </div>


        <div>

          <ImageUpload file={imageFile} setfile={setImageFile} />

          <CommonForm
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              onsubmit={handleForm}
              btnclass={"pt-5 justify-center"}
              formClass={`grid grid-cols-1 gap-3`}
              buttonText={"Book Free Consultation"}
              btntype='submit'
              btnHide={false}
          />

        </div>

      </div>
    </section>
  );
};

export default AddProjects;