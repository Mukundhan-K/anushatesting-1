import React from 'react';
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import { getImageSvg, getImagewebp } from '../../utility/getImage';
import ButtonArrow from '../ui/ButtonArrow';

const Review = ({setOpenPop}) => {
 
  
    const review = [
        {img:"review/1", rate:"star-5", name: "Ruthra Kanna" ,review:"Working with Anusha Structures was a great experience. the design they created was too good. They really know how to bring ideas to life."},
        {img:"review/2", rate:"star-5", name: "Sagar Siddharth" ,review:"We were amazed by how Anusha Structures's team refined our idea into a beautiful and eco-friendly design. It truly felt like they understood our vision from day one"},
        {img:"review/3", rate:"star-4", name: "Arjun Rajesh" ,review:"Anusha Structures's architectural insight completely elevated our concept. The end result was elegant, sustainable, and far better than what we imagined."},
    ];

  return (<>
    <section className='h-full w-full py-8 md:py-16 bg-bg-brown'>
      <div className='sm:container mx-auto px-4'>
        <div className='pb-8 md:pb-16 flex flex-col justify-center items-center'>
          <Marquee quotes={"truested patners"} />
          <div className='pt-10'></div>
          <Heading text={"What Our Clients Say"} />
        </div>

        <div className='grid md:grid-cols-3 gap-5 lg:gap-10'>
          {review.map(({name,rate,review,img})=>(
            <div key={name} className='h-full w-full bg-white pt-8 pb-5 pl-8 pr-5 rounded-3xl shadow-sm group'>
              <img src={getImageSvg(rate)} className='h-4' loading='lazy' alt={`star icon`} title={`icon of star`} />
              <div className='flex justify-end relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" className="size-32 text-gray-100 group-hover:text-a-royalsafforn/20 group-hover:size-36 transition-all duration-500 absolute -top-5 rotate-y-180 rotate-x-180" >
                    <path d="M14.5,28.8c2.3,0,4.1-1.9,4.1-4.1V14.4c0-2.3-1.9-4.1-4.1-4.1h-3c-1.9,0-3.1-2-2.3-3.7L11,2.9C11.4,2,10.8,1,9.8,1C9.4,1,9.1,1.1,8.8,1.4L2.5,7.7C0.9,9.3,0,11.5,0,13.8l0,10.9c0,2.3,1.9,4.1,4.1,4.1H14.5L14.5,28.8z" fill="currentColor" />
                    <path d="M40,24.7V14.4c0-2.3-1.9-4.1-4.1-4.1h-3c-1.9,0-3.1-2-2.3-3.7l1.8-3.6C32.8,2,32.2,1,31.2,1 c-0.4,0-0.7,0.1-0.9,0.4l-6.3,6.3c-1.6,1.6-2.5,3.8-2.5,6.1v10.9c0,2.3,1.9,4.1,4.1,4.1h10.3C38.1,28.8,40,27,40,24.7z"
                    fill="currentColor" />
                </svg>
              </div>
              <p className='py-6 text-gray-500 relative z-10'>{review}</p>
              <div className='flex justify-between gap-5'>
                <span className='text-2xl font-medium'>{name}</span>
                <img src={getImagewebp(img)} className='w-16 rounded-full' loading='lazy' alt={`${name} image - review - anusha structures`} title={`reviewer ${name} image of anusha structures`} />
              </div>
            </div>
          ))}
        </div>

        <div className='pt-10 lg:pt-16 text-center'>
           <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
        </div>
      </div>
    </section>
  </>);
};

export default Review;