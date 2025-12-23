import React, {useState} from 'react';
import { useLocation } from "react-router-dom";

import Button from '../ui/Button';
import { getImageSvg } from '../../utility/getImage';
import Api from '../../utility';
import { toast } from 'sonner';

const CommonForm = ({formControls, formData, setFormData, onsubmit, defaultOnSubmit=false, formClass, subject="Mail from Anusha Website",
                      buttonText,btntype="button",btnonclick,btnclass, isEdit = true, btnHide=true
}) => {

  const [result, setResult] = useState("");
  const [showPassword, setShowPassword] = useState({});

  const domLocation = useLocation();

  function formDataHandler(e) {
    const {name, value} = e.target;
    console.log(name , value);
    console.log(formData);
    setFormData((prevData)=>(
      {...prevData, [name] : value}
    ));
  };

  // async function onSubmitt(e) {
  //   console.log("form data");
    
  //   e.preventDefault();
  //   const formDatas = new FormData(e.target);
  //   console.log(e.target, formDatas);

  //       //     formData.append("name", data.name);
  //       // formData.append("description", data.description);
  //       // formData.append("category", data.category);
  //       // formData.append("subCategory", data.subCategory);
  //       // formData.append("price", data.price);
  //       // formData.append("bestSeller", data.bestSeller);
  //       // formData.append("sizes", JSON.stringify(data.sizes));

    
  //   formDatas.append("access_key", "f91bffe5-a806-47ce-bf7c-f2e843ea0996");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formDatas
  //   });

  //   const data = await response.json();
  //   setResult(data.success ? "Success" : "Error");

  //   setTimeout(() => {
  //     setFormData({});
  //     setResult(false);
  //   }, 1500);
  // };
  async function defaultSubmit(e) {
    try {
      console.log("form data");
      e.preventDefault();

      const formDatas = new FormData(e.target);
      formDatas.append("subject", subject);

        // console.log(e.target, formDatas);
      // for (let [key, value] of formDatas.entries()) {
      //   console.log(key, value);
      // };
      // formData.append("subject", data.name);
      // formData.append("sizes", JSON.stringify(data.sizes));
    
      const response = await Api.post(
        "/api/contact/sendMail",
        formDatas,
        {
          withCredentials: true,
          // headers: { "Content-Type": "multipart/form-data" }
        }
      );
      console.log(response);
      if (response?.data?.success) {
        toast.success(`${response?.data ?.message}`);

        setResult(response?.data.success ? "Success" : "Error");
        setTimeout(() => {
          setFormData({});
          setResult(false);
        }, 1500);

        return { success: true };
      };
      toast.error("Failed", {
        description: response?.data?.message || "Something went wrong",
      });

      setResult(response?.data.success ? "Success" : "Error");
      setTimeout(() => {
        setFormData({});
        setResult(false);
      }, 1500);

    } catch (error) {
      console.error(error);
      toast.error("Failed", {
        description: error?.response?.data?.message || "Network error",
      });
    };
  };

  function renderInputs(control) {
    let element = null;
    const value = formData[control.name] || "";
    const Icon  = control.icon || null;

    switch (control.componentType) {
      case "input":
        const isPassword = control?.type === "password";
        const isVisible = showPassword[control.name];
        element = <div className={`bg-white border border-gray-400 px-4 py-0.5 rounded-2xl flex gap-3 items-center group focus-within:border-blue-500 focus-within:bg-blue-50 ${!isEdit && "bg-gray-100! cursor-not-allowed"}`}>
          {Icon && <img src={getImageSvg(Icon)} className="size-8 group-focus-within:stroke-blue-500"
            loading='lazy' alt={`${Icon} icon`} title={`icon of ${Icon}`}
          />}

          <input 
            type={isPassword && isVisible ? "text" : control?.type}
            name={control?.name}
            id={control?.name}
            disabled={!isEdit}
            className={(control?.style) || `${!isEdit && "bg-gray-100 cursor-not-allowed"} w-full border-none outline-none py-2 rounded-2xl group-focus:bg-blue-50 ` }
            placeholder={control?.placeholder}
            required
            value = {value}
            onChange = {(e)=>formDataHandler(e)}
            autoComplete={control?.name}
            aria-label={control?.name}
          />

        {/* 👁️ Eye Toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  [control.name]: !prev[control.name],
                }))
              }
              className="text-gray-500 hover:text-gray-700"
            >
              {isVisible ? "🙈" : "👁️"}
            </button>
          )}
        </div>
        break;

      case "textarea":
        element = <textarea
          placeholder={control?.placeholder}
          name={control?.name}
          id={control?.name}
          className={(control?.style) || `${!isEdit && "bg-gray-100! cursor-not-allowed"} w-full h-32 border rounded-3xl bg-white border-gray-400 px-4 py-2.5 focus-within:border-blue-500 focus-within:bg-blue-50` }
          value = {value}
          onChange = {(e)=>formDataHandler(e)}
          autoComplete={control?.name}
          aria-label={control?.name}
          disabled={!isEdit}
        />
        break;

      case "select":
        element = (
            <select id={control?.name} name={control?.name} value={value} onChange={(e)=>formDataHandler(e)} 
              placeholder={control.placeholder} 
              className={`${!isEdit && "bg-gray-100! cursor-not-allowed"} w-full border border-gray-400 px-4 py-2.5 bg-white rounded-2xl focus-within:border-blue-500 focus-within:bg-blue-50`}
              autoComplete={control?.name}
              aria-label={control?.name}
              disabled={!isEdit}
            >
                {(control?.options && control.options.length > 0) ?
                    control.options.map((option)=>(
                  <option key={option.id} value={option.id}>{option.name}</option>)
                )
                : null
              }

            </select>

        )
        break;

      case "dynamicArray":
        const transports = formData[control.name] || [];
        const lastItem = transports[transports.length - 1];
        const isLastRowFilled =
          !lastItem || (lastItem.label?.trim() && lastItem.value?.trim());

        element = (
          <div className="space-y-4">

            {transports.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">

                {/* LABEL INPUT */}
                <input
                  type="text"
                  placeholder="Label"
                  className={`${!isEdit && "bg-gray-100! cursor-not-allowed"} border px-3 py-2 rounded-xl w-full`}
                  value={item.label || ""}
                  onChange={(e) => {
                    const arr = [...transports];
                    arr[index].label = e.target.value;
                    setFormData(prev => ({ ...prev, [control.name]: arr }));
                  }}
                  disabled={!isEdit}
                />

                {/* VALUE INPUT */}
                <input
                  type="text"
                  placeholder="Value"
                  className={`${!isEdit && "bg-gray-100! cursor-not-allowed"} border px-3 py-2 rounded-xl w-full`}
                  value={item.value || ""}
                  onChange={(e) => {
                    const arr = [...transports];
                    arr[index].value = e.target.value;
                    setFormData(prev => ({ ...prev, [control.name]: arr }));
                  }}
                  disabled={!isEdit}
                />

                {/* DELETE BUTTON */}
                <button
                  type="button"
                  className="bg-red-500 text-white px-3 py-2 rounded-xl"
                  onClick={() => {
                    const arr = [...transports];
                    arr.splice(index, 1);
                    setFormData(prev => ({ ...prev, [control.name]: arr }));
                  }}
                  disabled={!isEdit}
                >
                  ✕
                </button>
              </div>
            ))}

            {/* ADD NEW ROW */}
            <button
              type="button"
              disabled={(!isLastRowFilled) || (!isEdit)}
              className={`bg-blue-600 text-white px-4 py-2 rounded-xl ${
                isLastRowFilled ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => {
                console.log("arr : ", formData[control.name]);
                
                setFormData(prev => ({
                  ...prev,
                  [control.name]: [...transports, { label: "", value: "" }],
                }));
              }}
            >
              + Add
            </button>

          </div>
        );
        break;


      default:
        element = <input
          type={control?.type}
          placeholder={control?.placeholder}
          name={control?.name}
          id={control?.name}
          className={(control?.style) || `w-full border rounded-lg ${!isEdit && "bg-gray-100 cursor-not-allowed"}` }
          onChange = {()=>formDataHandler(e)}
          disabled={!isEdit}
        />
        break;
    };

    return element;
  };

  return (

    <form onSubmit={defaultOnSubmit ? defaultSubmit : onsubmit}>
      {result && <div className='flex justify-end pb-5'>
        <span className={`px-5 py-3 rounded-3xl text-white text-base ${(result == "Success") ? "bg-green-600" : "bg-red-500" }`}>{result}</span>
      </div> }
      <div className={formClass}>
        {
          formControls.map((controlItem, i)=>(
            <div key={i} className={`w-full text-left ${(controlItem.componentType == "textarea") ? ((domLocation.pathname.includes("/admin")) ? "col-span-1" : "md:col-span-2") : "md:col-span-1"} `}>
              <label htmlFor={`${controlItem?.name}`} className='text-base font-josefin font-medium pb-2 block'>{controlItem.label}</label>
              {
                renderInputs(controlItem)
              }
            </div>
          ))
        }
      </div>
      <Button bttype={btntype}  btnonclick={btnonclick} outcls={btnclass} text={buttonText || "Submit"} btnHide={btnHide}></Button>
    </form>
  );
};

export default CommonForm;