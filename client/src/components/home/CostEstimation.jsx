import React from 'react';
import {NavLink} from "react-router-dom";

import Marquee from '../ui/marquee';
import Heading from '../common/Heading';

import CostEstimator from "../estimators/CostEstimator";
import LoanEstimator from "../estimators/LoanEstimator";
import ButtonArrow from '../ui/ButtonArrow';
import { getImageSvg, getImagewebp } from '../../utility/getImage';

const CostEstimation = ({setOpenPop}) => {

  const registeredFormControl = [
    {
      name : "name",
      label : "Name",
      placeholder : "Ex - Arunya",
      componentType : "input",
      type : "text",
      icon : "user"
    },
    {
      name : "email",
      label : "Email",
      placeholder : "Enter your Email",
      componentType : "input",
      type : "email",
      icon : "email"
    },
    {
      name : "phone",
      label : "Phone",
      placeholder : "Ex - +91 76959 50724",
      componentType : "input",
      type : "tel",
      icon : "call"
    },
    {
      name : "constructionPackage",
      label : "Construction Package",
      placeholder : "Select your Package",
      componentType : "select",
      options : [
        {id:'basic', name: "Basic"},
        {id:'pro', name: "Pro"},
      ],
    },
    {
      name : "location",
      label : "Location of Plot",
      placeholder : "Ex - Perumal (St), velacherry",
      componentType : "input",
      type : "text",
      icon : "location-house"
    },
    {
      name : "builtarea",
      label : "Built-up Area (sqft)",
      placeholder : "Ex - 1000",
      componentType : "input",
      type : "text",
      icon : "ruler-l"
    },
  ];


  return (<>
    <section className='h-full w-full'>
      <div className='sm:container mx-auto  py-8 lg:py-10 px-4'>

        <div className='pb-10 flex flex-col justify-center items-center'>
            <Marquee quotes={"Free Estimate"} />
            <div className='pt-10'></div>
            <Heading text={"Estimate your Home Construction Cost"} />
            <p className="lg:max-w-2xl lg:pb-8 text-center text-lg leading-8 text-gray-600">Building your dream home? Calculate your home construction cost</p>
        </div>

        <div className='flex justify-center gap-5'>

          <div id='costEst' className='w-1/2 hidden lg:flex rounded-3xl px-5 py-10 bg-cover bg-center  items-end' style={{backgroundColor: "#0001", backgroundBlendMode: "multiply"}}>
            <div className='pb-5 flex justify-between items-center gap-5'>
              <ButtonArrow text='Be our next Client' />
              <div className='flex items-center'>
                {[...new Array(3)].map((_,i)=>(
                    <div key={i} className={`rounded-full size-fit border-2 border-white ${(i != 0) && '-ml-4'}`}>
                      <img src={getImagewebp(`review/${i+1}`)} className='size-16 rounded-full' loading='lazy' alt={`${i} image - client - anusha structures`} title={`image of client of anusha structures`} />
                    </div>
                  )
                )}
              </div>
              <h3 className='text-white text-2xl'>
                1k+ <br /> More
              </h3>
            </div>
            {/* <p className='text-white text-xl'>Every project is a reflection of our clients' dreams. With the trust of thousands of happy homeowners, we deliver each design with passion, precision, and genuine creativity</p> */}
          </div>

          <div className='min-h-full! bg-bg-brown w-full lg:w-1/2 p-8 flex flex-col justify-center gap-10 border border-gray-400   rounded-3xl'>
            <div className='flex justify-end'>
              <div className='flex justify-end items-center gap-3'>
                <div className='w-fit bg-a-royalsafforn p-5 rounded-3xl animate-bounce duration-500'>
                  <img src={getImageSvg("calculator")} className='size-10'loading='lazy' alt={`calculator icon`} title={`icon of calculator`} />
                </div>
                <NavLink to={"/estimator"} className='w-1/2 underline-offset-4 text-blue-800'>Click here for Detailed Estimation</NavLink>
              </div>
            </div>
            <CostEstimator registeredFormControl={registeredFormControl} halign={"center"} />
          </div>

        </div>

        <div className='pt-10 lg:pt-16 text-center'>
           <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
        </div>

      </div>
    </section>
  </>);
};

export default CostEstimation;