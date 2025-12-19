import React from 'react';
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import { getImageSvg } from '../../utility/getImage';
import ButtonArrow from '../ui/ButtonArrow';

const OurServices = ({setOpenPop}) => {

    const cards = [
        {icon: "calender",title: "Construction Management", text: "From planning to delivery, we orchestrate complex developments with precision, excellence, and total confidence"},
        {icon: "our-journey-icon-3",title: "Architecture & Design", text: "We create architectural expressions that elevate performance, enhance lifestyle, and define timeless value."},
        {icon: "brick",title: "Real Estate Development", text: "We engage at the earliest stage, shaping visionary concepts into high-value investments with lasting impact."},
        {icon: "builder_worker",title: "Strategic Design", text: "From concept to master plan, we curate spaces with intelligent layouts that redefine innovation and purpose."},
        {icon: "building",title: "Space Styling", text: "Interiors tailored to reflect identity and aspiration, blending refined elegance with elevated comfort."},
        {icon: "our-journey-icon-2",title: "Business Environments", text: "Premium offices, retail destinations, and commercial spaces crafted to inspire productivity and growth."},
    ];

  return (<>
    <section className='h-full w-full py-16'>
      <div className='sm:container mx-auto px-4'>

        <div className='pb-10 flex flex-col justify-center items-center'>
            <Marquee quotes={"our Solutions"} />
            <div className='pt-10'></div>
            <Heading text={"Find Out What We Offer"} />
            <p className="max-w-2xl md:pb-8 text-center text-lg leading-8 text-gray-600">We develop quality infrastructure & real estate projects</p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16'>
            {cards.map(({icon,title,text}, index)=>(
                <div key={index} className='rounded-3xl p-10 bg-bg-brown'>
                    <div className='pb-4 md:mb-20 border-b border-b-gray-300'>0{index+1}.</div>
                    <img src={getImageSvg(icon)} className='size-14' loading='lazy' alt={`${icon} icon`} title={`icon of ${icon}`} />
                    <h3 className='text-3xl md:text-4xl py-5'>{title}</h3>
                    <p>{text}</p>
                </div>
             )
            )}
        </div>

        <div className='pt-10 lg:pt-16 text-center'>
           <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
        </div>



      </div>
    </section>
  </>);
};

export default OurServices;