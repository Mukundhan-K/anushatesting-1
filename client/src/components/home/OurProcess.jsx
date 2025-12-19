import React, { useState, useEffect } from "react";
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import { getImageSvg, getImagewebp } from '../../utility/getImage';

const OurProcess = () => {

    const card = [
        {icon: "geometric_measure", title: "01/ consultation", text: "Listening to your needs and project goals"},
        {icon: "building_civil_engineering", title: "02/ Design Drafting", text: "Developing innovative and functional concepts."},
        {icon: "blueprint", title: "03/ Blueprints & Approvals", text: "Ensuring clarity with plans and approvals."},
        {icon: "building_civil engineering", title: "04/ Construction", text: "Executing each phase with precision and quality."}
    ];

    const [cols, setCols] = useState(getCols());

  // update column count based on screen width
    useEffect(() => {
        const handleResize = () => setCols(getCols());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (<>
    <section className='h-full w-full py-5 overflow-hidden' id='ourProcess'>
      {/* <hr className='border-black  -mb-36' /> */}
      <div className='sm:container mx-auto py-8 px-4'>

        <div>
          <Marquee quotes={"our process"} />
          <div className='pt-8'></div>
          <div className="lg:w-[500px]">
            <Heading text={"Turning vision Into Timeless Landmarks"} align='left' />
          </div>
        </div>

        <div className='cardGrp mt-10 grid xs:grid-cols-2 lg:grid-cols-4 relative'>
          {card.map(({icon, title, text})=>(
              <div key={title} className='p-5'>
                <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                    <img src={getImageSvg(icon)} className='size-16' loading='lazy' alt={`${title} icon`} title={`icon of ${title}`}  />
                </div>
                <div className='hidden lg:block mt-8 my-5 size-3 aspect-square bg-a-royalsafforn relative z-10 rounded-full'></div>
                <h3 className='text-2xl mb-3 mt-5 lg:mt-0'>{title}</h3>
                <p className='text-gray-600 w-3/5'>{text}</p>
              </div>
           )
          )}
        </div>

        {/* <div className='border grid grid-cols-5 place-items-center gap-0 p-0 m-0 rounded-3xl'>
            {[...new Array(10)].map((n,i)=>(
                <div key={i} className='w-full h-full border-r border-b -mb-0.5 -mr-0.5'>
                    <img src={getImagePng(`ourprocess/${i+1}`)} alt="" className='size' />
                </div>
             )
            )}
        </div> */}


        <div
          className="grid mt-16 border border-gray-300 rounded-3xl"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {[...new Array(10)].map((_, index) => {
            const colIndex = index % cols;
            const rowIndex = Math.floor(index / cols);
            
            const isFirstRow = rowIndex === 0;
            const isFirstCol = colIndex === 0;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-2 text-center 
                ${!isFirstRow ? "border-t" : ""} 
                ${!isFirstCol ? "border-l" : ""}
                ${(isFirstCol && rowIndex == 3 && cols == 3) && "border-r" }
                ${(cols == 3 && rowIndex == 2 && !isFirstCol) && "border-b"}
                border-gray-300`}
              >
                <img src={getImagewebp(`ourprocess/${index+1}`)} className='w-32' loading='lazy' alt={`${index} icon`} title={`materials used in anusha structures `}  />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  </>);
};

export default OurProcess;

// Responsive column logic
function getCols() {
  if (window.innerWidth < 640) return 2; // mobile
  if (window.innerWidth < 1024) return 3; // tablet
  return 5; // desktop
}


