import React from 'react';
import { getImageSvg } from "../../utility/getImage";
import ProjectCard from "./projectCard";


const List = ({data}) => {

  // console.log(data);
  return (<>

    <section className='h-full w-full py-8 md:py-16'>
      <div className='sm:container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

            {(data.length == 0) ? (<>
              <div className='col-span-full pt-8 lg:pt-0 text-center flex flex-col items-center'>
                <h1 className='text-4xl md:text-5xl lg:w-2/3'>Oops !</h1>
                <div className='text-center  text-3xl pt-5'>No Project Found</div>
                <div className='w-[75%] lg:w-1/2'>
                  <img src={getImageSvg("noProject")} className='object-contain' alt="no project found" loading='lazy' title="project of no found" />
                </div>
              </div>
            </>)
            : (data.map(({_id:id,images, location, title, status}) => (
                <ProjectCard id={id} images={images[0]} location={location} title={title} status={status}  />
            )))
            }

        </div>
      </div>
    </section>

  </>);
};

export default List;