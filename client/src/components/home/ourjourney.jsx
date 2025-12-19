import React from 'react';
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import { getImageSvg, getImagewebp } from '../../utility/getImage';
import ButtonArrow from '../ui/ButtonArrow';
import Button from '../ui/Button';
import WhyChooseUs from './WhyChooseUs';
import { Link } from 'react-router-dom';


const OurJourney = () => {

  const icons = [
    {icon: "our-journey-icon-4", text:"enterprise"},
    {icon: "our-journey-icon-2", text:"office"},
    {icon: "our-journey-icon-1", text:"business"},
    {icon: "our-journey-icon-3", text:"Interior"},
  ];

  const cards = [
    {img: "triangle", title: "Visionary Planning", text: "Transforming ideas into practical, high impact blueprints"},
    {img: "quality", title: "Detailed Engineering", text: "Combining structural strength with modern aesthetics."},
    {img: "builder_worker", title: "Sustainable Approach", text: "Ensuring eco-friendly construction without compromising design."},
    {img: "brick", title: "Design Expertise", text: "Merging contemporary styles with timeless architectural principles."}
  ];


  return (<>
    <section id='ourJourney' className=' h-full w-full'>
      <div className='sm:container mx-auto py-10 px-4 lg:pt-36 lg:pb-20 flex flex-col xl:flex-row gap-8 lg:gap-20'>

        <div className='xl:w-1/3 flex flex-col gap-5 lg:gap-20'>
          <Marquee quotes={"our journey"} color="black" />

          <div id='ourJour' className='bg-white h-[500px] p-8 shadow-sm rounded-3xl flex flex-col justify-between gap-3  bg-cover bg-center bg-no-repeat'>
            <p className='capitalize text-xl xl:text-center text-wrap font-medium'>100+ Satisfied Customers World Wide</p>
            <div className='h-fit flex justify-end items-end'>
              <div className='h-fit w-fit bg-white p-5 text-center rounded-3xl'>
                <div className='text-5xl font-josefin text-a-green'>15+</div>
                <div className='capitalize text-sm'>active projects</div>
              </div>
            </div>
          </div>

        </div>

        <div className='h-full xl:w-2/3 flex flex-col md:gap-5 justify-between'>
          <Heading align='left' text={"Our passion is crafting functional yet timeless architecture."} />
          
          <div className='flex flex-col sm:flex-row gap-5 lg:gap-10 2xl:pt-10'>

            <img src={getImagewebp("our-journey-2")}  loading='lazy'  alt="anusha constructions interior" title='interior design of anusha structures' className='order-1 sm:order-none object-cover sm:object-contain  block w-full h-[200px] sm:h-auto sm:w-1/2! lg:w-full self-end rounded-3xl' />
            <div className='2xl:pl-8 py-10 h-full flex flex-col justify-between gap-8'>
              <h2 className='text-base lg:text-xl text-gray-600 font-normal font-outfit'>We are turnkey construction experts with a skilled team of architects, engineers, designers, and craftsmen dedicated to creating durable structures and elegant spaces. With a focus on detail and innovation, we seamlessly combine functionality and aesthetics in every project.</h2>
             
              <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-x-4 gap-5 xl:gap-8'>
                {icons.map(({icon, text})=>(
                    <div key={text} className='flex gap-3 items-center'>
                      <img src={getImageSvg(icon)} alt={`icon ${text}`} className='size-10' loading='lazy' title={`icon ${text}`}  />
                      <span className='text-2xl font-josefin font-semibold capitalize'>{text}</span>
                    </div>
                  )
                )}
              </div>

              
              <Link to={"/projects"} className='w-fit'>
                <ButtonArrow text='Explore All' />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <WhyChooseUs data={cards} outercss={"pt-5 pb-16 bg-white"} crdcss={"bg-bg-brown"} />
    
  </>);
};

export default OurJourney;