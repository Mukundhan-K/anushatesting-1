import React from 'react';

import AboutUs from "../components/about/AboutUs";
import Banner from '../components/common/Banner';
import Counter from '../components/about/Counter';
import Marquee from '../components/ui/marquee';
import Heading from '../components/common/Heading';

import WhyChooseUs from "../components/home/WhyChooseUs";
import Awards from '../components/about/Awards';
import Review from "../components/home/Review";
import OurProjects from "../components/home/OurProjects";
import CommonSEO from '../utility/commonSeo';
import ButtonArrow from '../components/ui/ButtonArrow';

const About = ({setOpenPop}) => {

    const cards = [
      {img: "triangle", title: "Strategic Design", text: "We provide innovative architecture services in India, shaping layouts that blend creativity, sustainability, and function."},
      {img: "building", title: "Space Styling", text: "Luxury interior design solutions that reflect lifestyle and purpose, combining comfort, elegance, and modern aesthetics."},
      {img: "quality", title: "Business Environments", text: "Commercial architecture for offices, retail, and corporate spaces built to elevate productivity and brand impact."},
      {img: "tape", title: "Project Oversight", text: "Turnkey construction services managing every stage with precision, transparency, and world class engineering standards."},
      {img: "ruler-l", title: "Modern Transformations", text: "Sustainable architecture solutions revitalizing old structures with contemporary upgrades and future-ready innovations."},
      {img: "building_civil engineering", title: "Bespoke Creations", text: "Custom luxury home design services in India, crafting exclusive spaces tailored to individual vision and lifestyle"}
    ];


  return (<>
    <CommonSEO
      title='About Us | Turnkey Construction in Chennai | Builders,interior design,renovation chennai'   
    />

    <Banner title={"About Us"} link1={"/home"} text1={"home"} text2={"About Us"} />
    <AboutUs setOpenPop={setOpenPop} />
    <Counter />

    <section className='h-full w-full pt-16 py-8'>
      <div className='sm:container mx-auto px-0'>
    
        <div className='pb-10 flex flex-col items-center'>
          <Marquee quotes={"our offerings"} />
          <div className='pt-10'></div>
          <Heading text={"Our Path to Architectural Greatness"} classes={"w-4/5"} />
        </div>

        <WhyChooseUs data={cards} css={"sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8"} outercss={"mg:p-10 rounded-3xl"} crdcss={"bg-bg-brown"} />

        <div className='pt-10 xl:pt-16 text-center'>
          <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
        </div>

      </div>
    </section>

    <Awards />
    <OurProjects />
    <Review setOpenPop={setOpenPop}  />

  </>);
};

export default About;