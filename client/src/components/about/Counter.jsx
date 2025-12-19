import React from 'react';
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import ButtonArrow from '../ui/ButtonArrow';
import { Link } from 'react-router-dom';

const Counter = () => {

    const counterData = [
        {count:"25+", text:"Completed Projects"},
        {count:"55+", text:"Trusted Partners"},
        {count:"15+", text:"Happy Clients"},
        {count:"35+", text:"Works Delivered"},
    ];

  return (<>
    <section className='h-full w-full py-8 lg:py-16 bg-bg-brown'>
      <div className='sm:container mx-auto px-4'>
        <div className='grid grid-cols-12 gap-8 lg:gap-16'>

            <div id='count-2' className='h-96 md:h-full col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 rounded-3xl bg-cover bg-center bg-no-repeat'>

            </div>

            <div className='col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8 '>

                <div className='grid grid-cols-10 gap-5'>
                  <div className='col-span-10 xl:col-span-7'>
                    <Marquee quotes={"About us"} />
                    <div className='pt-10'></div>
                    <Heading text={"Designing the Architectural Landmarks for the Future"} align='text-left' classes={"w-4/5"} />
                    <p className="py-5 text-lg leading-8 text-gray-600">In sectors spanning commercial, residential, hospitality, and institutional architecture, we design environments that inspire lasting value. Together, we shape spaces that exceed your expectations and transform the future of built design.</p>
                    
                    <Link to={"/projects"} className='w-fit'>
                      <ButtonArrow text='View More' />
                    </Link>
                  </div>

                  <div id='count-1' className='xl:col-span-3 hidden xl:block h-full rounded-3xl bg-cover bg-center bg-no-repeat'>
                  </div>
                </div>

                <div className='pt-10 lg:pt-20 grid grid-cols-2 gap-5 lg:gap-0 lg:flex lg:divide-x lg:divide-gray-400'>
                    {counterData.map(({count,text}, i)=>(
                        <div key={i} className={`lg:pr-5 xl:pr-10 ${(i != 0) && 'lg:pl-5 xl:pl-10'}`}>
                            <h3 className='text-4xl md:text-5xl xl:text-6xl font-outfit pb-2'>{count}</h3>
                            <p>{text}</p>
                        </div>
                      )
                    )}
                </div>
            </div>

        </div>
      </div>
    </section>
  </>);
};

export default Counter;