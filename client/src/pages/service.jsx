import React from 'react';
import Banner from '../components/common/Banner';
import About from "../components/services/About";
import ExpandableGallery from '../components/ui/ExpandableGallery';
import OurServices from '../components/services/OurServices';

import OurProcess from "../components/home/OurProcess";
import CommonSEO from '../utility/commonSeo';

const Service = ({setOpenPop}) => {
  return (<>

    <CommonSEO
      title='Services | Turnkey Construction in Chennai | Builders,interior design,renovation chennai'   
    />

  
    <Banner title={"Our services"} link1={"/home"} text1={"home"} text2={"services"} />
    <About />
    <ExpandableGallery />
    <OurServices setOpenPop={setOpenPop} />
    <OurProcess />
  </>);
};

export default Service;