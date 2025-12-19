import React, {useState, useEffect} from 'react';

import ButtonArrow from "../ui/ButtonArrow";
import { toast } from 'sonner';
import { fetchAllProjects } from '../../redux/shopSlice';
import { useDispatch } from 'react-redux';

const Filter = ({selcValue, setSelcValue}) => {
    const dispatch = useDispatch();

    const formControls =[
      {
        name : "status",
        label : "Project Status",
        options : [
            {val:'', text: "All Projects"},
            {val:'under construction', text: "Under Construction"},
            {val:'completed', text: "Completed"},
        ],
      },
      {
        name : "projectType",
        label : "Project Type",
        options : [
            {val:'', text: "All Type"},
            {val:'Apartment', text: "Apartment"},
            {val:'Building', text: "Building"},
            {val:'Industrial', text: "Industrial"},
            {val:'Office', text: "Office"},
            {val:'Residential', text: "Residential"},
            {val:'Villa', text: "Villa"},
        ],
      },
      {
        name : "location",
        label : "Project Location",
        options : [
            {val:'', text: "All Location"},
            {val:'Chennai', text: "Chennai"},
            {val:'Thiruvallur', text: "Thiruvallur"},
            {val:'Dindugal', text: "Dindugal"},
            {val:'Trichy', text: "Trichy"},
        ],
      },
      // {
      //   name : "budget",
      //   label : "Project Budget",
      //   options : [
      //       {val:'All', text: "All budget"},
      //       {val:'50l-1c', text: "₹50L - ₹1c"},
      //       {val:'1c-2c', text: "₹1c - ₹2c"},
      //       {val:'2c-5c', text: "₹2c - 5c"},
      //       {val:'5c-10c', text: "₹5c - ₹10c"},
      //       {val:'10c+', text: "₹10c +"},
      //   ],
      // },
    ];

    // function handleFilter(){
    //   let dummyProds = [...projList];

    //   console.log(selcValue);
      
      
    //   if (selcValue.status == "Completed") {
    //     dummyProds = dummyProds.filter((data)=>(data.status == "Completed"));
    //   }else if (selcValue.status == "Under Construction") {
    //     dummyProds = dummyProds.filter((data)=>(data.status == "Under Construction"));
    //   };
      
    //   if (selcValue.type == "Apartment") {
    //     dummyProds = dummyProds.filter((data)=>{
    //       return (data.keyDetails['Project Type'] == "Apartment")
    //     });
    //   }else if (selcValue.type == "Building") {
    //     dummyProds = dummyProds.filter((data)=>(data.keyDetails['Project Type'] == "Building"));
    //   }else if (selcValue.type == "Industrial") {
    //     dummyProds = dummyProds.filter((data)=>(data.keyDetails['Project Type'] == "Industrial"));
    //   }else if (selcValue.type == "Office") {
    //     dummyProds = dummyProds.filter((data)=>(data.keyDetails['Project Type'] == "Office"));
    //   }else if (selcValue.type == "Residential") {
    //     dummyProds = dummyProds.filter((data)=>(data.keyDetails['Project Type'] == "Residential"));
    //   }else if (selcValue.type == "Villa") {
    //     dummyProds = dummyProds.filter((data)=>(data.keyDetails['Project Type'] == "Villa"));
    //   };
      
    //   if (selcValue.location == "Chennai") {
    //     dummyProds = dummyProds.filter((data)=>{
    //       console.log(data);
    //       return (data.location.main == "Chennai")
    //     });
    //   }else if (selcValue.location == "Thiruvallur") {
    //     dummyProds = dummyProds.filter((data)=>(data.location.main == "Thiruvallur"));
    //   }else if (selcValue.location == "Dindugal") {
    //     dummyProds = dummyProds.filter((data)=>(data.location.main == "Dindugal"));
    //   }else if (selcValue.location == "Trichy") {
    //     dummyProds = dummyProds.filter((data)=>(data.location.main == "Trichy"));
    //   };
      

    //   setProjData(()=>dummyProds);      
    // };
    
    async function handleFilter(){
      try {
        let data = await dispatch(fetchAllProjects(selcValue)).unwrap();
          if (data?.success) {
            toast.success(`${data?.message}`);
            return { success: true };
          };
          toast.error("Failed", {
            description: data?.message || "Something went wrong",
          });

        return { success: false };
        
      } catch (error) {
          console.error(error.message);
          toast.error("Failed", {
              description: error?.message || "Network error",
          });
          return { success: false };
      };
    };


    function slcCreator(control) {
        const value = selcValue[control?.name] || "";

        function formDataHandler(e) {
          const { name, value } = e.target;
          // console.log(name , value);
          setSelcValue(prevData => {
            // If empty value → remove the key
            if (value === "") {
              const { [name]: _, ...rest } = prevData;
              return rest;
            }
            // Otherwise set the value
            return {
              ...prevData,
              [name]: value,
            };
          });
        };

        return (
            <select id={control?.name} name={control?.name} value={value} onChange={(e)=>formDataHandler(e)} 
              placeholder={control?.placeholder}
              className='w-full border border-gray-400 px-4 py-2.5 bg-white rounded-2xl focus-within:border-blue-500 focus-within:bg-blue-50'>
                {(control?.options && control.options.length > 0) ?
                  control.options.map((option)=>(
                  <option key={option.val} value={option.val}>{option.text}</option>)
                )
                : null
              }

            </select>

        );
    }

  return (<>
    <section className='h-full w-full lg:py-5'>
        <div className='sm:container mx-auto pt-10 lg:pt-5 px-4'>
          <div className='grid grid-cols-2 xsl:grid-cols-3 lg:flex justify-center items-end gap-8'>

            {
            formControls.map((controlItem, i)=>(
              <div key={i} className={`w-full text-left`}>
                <label htmlFor={controlItem.name} className='text-base font-josefin font-medium pb-2 block'>{controlItem.label}</label>
                {
                    slcCreator(controlItem)
                }
              </div>
            ))
            }

            <div className=''>
                <ButtonArrow bttype={"button"}  btnonclick={()=>handleFilter()} outcls={"w-fit"} text={"Search"}></ButtonArrow>
            </div>
          </div>
        </div>
    </section>

  </>);
};

export default Filter;