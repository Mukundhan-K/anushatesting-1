import React, {useState, useEffect, useRef} from 'react';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProjects } from "../../redux/adminSlice";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchedRef = useRef(false);

  const {productList:prodList} = useSelector((state)=>(state.adminProductReducer));

  async function fetchAllProds(){
    try {
      let data = null;

      if (!prodList.length){
        data = await dispatch(fetchAllProjects()).unwrap();
        // console.log("list all projs : ", data);

        if (data?.success) {
          toast.success(`${data ?.message}`);
          return { success: true };
        };

        toast.error("Failed", {
          description: data?.message || "Something went wrong",
        });
      };

      return { success: false };
      
    } catch (error) {
        console.error(error.message);
        toast.error("Failed", {
            description: error?.message || "Network error",
        });
        return { success: false };
    };
  };
  
 useEffect(() => {
  if (fetchedRef.current) return;
  fetchedRef.current = true;
   fetchAllProds();
 }, []);


  return (<>
    <section id='listProducts'>

      <h1 className='capitalize text-xl font-medium text-a-royalsafforn mb-3'>all products list</h1>

      <div className='flex flex-col gap-2'>
       
        {/* table heading */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-slate-200 bg-gray-100 text-sm capitalize'>
          <b>image</b>
          <b>name</b>
          <b>category</b>
          <b>Location</b>
          <b className='text-center'>action</b>
        </div>

        {/* table body */}
        { prodList.map((item, index)=>(
          <div className='grid grid-cols-[1fr-3fr-1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-slate-200 text-sm capitalize' key={index}>
            <img src={item?.images[0]} className='max-w-12' alt="" />
            <p>{item?.title}</p>
            <p>{item?.projectType}</p>
            <p>{item?.location}</p>
            {/* <p>{item?.location} |  {item?.priceRange}</p> */}
            <div className='flex justify-center items-center'>
              <p className='text-right md:text-center cursor-pointer bg-a-green w-fit px-5 py-2 rounded text-white' onClick={()=>navigate(`/admin/viewprojects/${item._id}`)}>View</p> 
            </div>
          </div>
        ))}

      </div>

    </section>
  </>);
};

export default List;