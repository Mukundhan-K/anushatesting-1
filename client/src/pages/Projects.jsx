import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

import Banner from '../components/common/Banner';
import List from '../components/projects/List';
import Filter from '../components/projects/Filter';
import Marquee from '../components/ui/marquee';
import CommonSEO from '../utility/commonSeo';
import { toast } from 'sonner';

import { fetchAllProjects } from "../redux/shopSlice";

const Projects = () => {

  const dispatch = useDispatch();
  const {productList} = useSelector((state)=>(state.shopProductReducer));
  const [selcValue, setSelcValue] = useState({});
  

  async function fetchAllProds(){
    try {
      let data = null;
      if (!productList.length){
        data = await dispatch(fetchAllProjects(selcValue)).unwrap();
        // console.log("list all projs : ", data);
        if (data?.success) {
          toast.success(`${data?.message}`);
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
    fetchAllProds();
  }, []);

  // console.log("proj data  : ", data);

  return (<>

      <CommonSEO
        title='Our Projects | Turnkey Construction in Chennai | Builders,interior design,renovation chennai'   
      />

      <Banner title={"Our Projects"} link1={"/home"} text1={"Home"} text2={"Our Projects"} />
      <section className='h-full w-full md:pt-10'>
        <div className='sm:container mx-auto px-4'>
            <div className=''>
                <Marquee quotes={"our Projects"} />
                <div className='pt-8'></div>
                <h1 className='text-4xl md:text-5xl lg:w-2/3'>Our Residential and Commercial Construction Projects</h1>
            </div>
        </div>
      </section>

      <Filter selcValue={selcValue} setSelcValue={setSelcValue} />
      <List data = {productList} />
  </>);
};

export default Projects;