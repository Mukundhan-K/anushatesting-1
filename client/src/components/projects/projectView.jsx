import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import Banner from "../common/Banner";
import { getImageSvg, getImagewebp } from '../../utility/getImage';
import Heading from "../common/Heading";
import CommonSEO from '../../utility/commonSeo';
import { viewProject } from '../../redux/shopSlice';
import { toast } from 'sonner';

const ProjectView = () => {

  const { projId } = useParams();
  const dispatch = useDispatch();
  const {projectDetail:projData, loading} = useSelector((state)=>state.shopProductReducer);

  const [prodImg, setProdImg] = useState("");


  useEffect(() => {
    if (!projId) return;
    
    dispatch(viewProject(projId)).unwrap()
      .then((res) => {
        console.log("ersp : ",res);
        
        if (res?.success && res?.project?.images?.length) {
          setProdImg(res.project.images?.[0] || ""); // first image
        }
      })
      .catch((err) => {
        toast.error("Failed to load project");
        console.error(err);
      });
  }, [projId, dispatch]);

  if (loading || !projData?._id) {
    return <div className="min-h-[60vh] grid place-items-center">Loading...</div>;
  }
  

  return (<>

    <CommonSEO
      title={`${projData?.title} project | Construction in Chennai | Builders,interior design,renovation chennai`}  
    />

    <section className='h-full w-full'>

      <Banner hgt='mini' title={projData?.title} link1={"/home"} text1={"Home"} text2={projData?.title} />
      
      <div className='sm:container mx-auto px-4'>

        <div className=''>
          <div className='flex gap-2 items-end  pb-6 '>
            <div className={`size-9 rounded-full aspect-square bg-a-royalsafforn grid place-items-center`}>
                <img src={getImageSvg("location")} alt="location icon" title="location icon" className='size-7' loading="lazy" />
            </div>
            <span className='text-black text-xl'>{projData?.location}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-6xl text-black`}>{projData?.title}</h1>
        </div>

        <hr className='border-gray-300 my-5' />

      {/* product key feat --------------------------- */}
        <div className='py-4 grid grid-cols-2  xl:grid-cols-4 items-center gap-x-8'>

          <div className='py-2 md:py-8 flex flex-col xsl:flex-row items-center gap-5'>
            <div className='size-14 rounded-full aspect-square grid place-items-center border border-gray-400'>
                <img src={getImageSvg("/cup")} className="size-9" loading='lazy' alt={`status icon`} title={`status icon`} />
            </div>
            <div className='flex flex-col text-center xsl:text-left'>
                <span className='text-xl text-gray-600 font-medium font-outfit!'>Status</span>
                <span className='text-xl font-medium font-outfit!'>{projData?.status}</span>
            </div>
          </div>

          {(projData?.projectType) && 
            <div className='py-2 md:py-8 flex flex-col xsl:flex-row items-center gap-5'>
              <div className='size-14 rounded-full aspect-square grid place-items-center border border-gray-400'>
                  <img src={getImageSvg("/cup")} className="size-9" loading='lazy' alt={`icon`} title={`icon`}  />
              </div>
              <div className='flex flex-col text-center xsl:text-left break-all'>
                  <span className='text-xl text-gray-600 font-medium '>Project Type</span>
                  <span className='text-xl font-medium '>{projData.projectType}</span>
              </div>
            </div>}  

          {(projData?.projectArea) && 
            <div className='py-2 md:py-8 flex flex-col xsl:flex-row items-center gap-5'>
              <div className='size-14 rounded-full aspect-square grid place-items-center border border-gray-400'>
                  <img src={getImageSvg("/cup")} className="size-9" loading='lazy' alt={`icon`} title={`icon`}  />
              </div>
              <div className='flex flex-col text-center xsl:text-left break-all'>
                  <span className='text-xl text-gray-600 font-medium '>Total Area</span>
                  <span className='text-xl font-medium '>{projData.projectArea}  Sq.Ft</span>
              </div>
            </div>}

          {(projData?.numberOfFloors) && 
            <div className='py-2 md:py-8 flex flex-col xsl:flex-row items-center gap-5'>
              <div className='size-14 rounded-full aspect-square grid place-items-center border border-gray-400'>
                  <img src={getImageSvg("/cup")} className="size-9" loading='lazy' alt={`icon`} title={`icon`}  />
              </div>
              <div className='flex flex-col text-center xsl:text-left break-all'>
                  <span className='text-xl text-gray-600 font-medium '>Floors</span>
                  <span className='text-xl font-medium '>{projData.numberOfFloors}</span>
              </div>
            </div>}

        </div>

      {/* product image --------------------------- */}
        <div className='py-8 max-h-[700px] flex flex-col-reverse md:flex-row gap-3'>
          <div className={`grid grid-cols-4! md:flex md:flex-col md:w-1/6 no-scrollBar md:overflow-y-scroll justify-between sm:justify-normal gap-5`}>
            {projData?.images.map((prodImg, i)=>(
              <img onClick={()=>setProdImg(prodImg)} src={prodImg} className="w-32 h-auto md:w-full flex-shrink-0 object-contain block rounded-3xl
                cursor-pointer" key={i}  loading='lazy' alt={`project image ${1} - anusha structures`} title={`project image ${i} - anusha structures`}  />
            ))}
          </div>

          <div className='h-[330px] md:h-[630px] overflow-hidden w-full'>
            <img src={prodImg} className="h-full w-full object-cover object-center block rounded-3xl"  loading='lazy' alt={`Main project image - anusha structures`} title={`Main project image - anusha structures`}  />
          </div>
        </div>

      {/* product description --------------------------- */}
        <div className='w-full py-8 flex flex-col lg:flex-row justify-between gap-12'>
          <div className=''>
            <Heading align='left' text={"Project Description"} />
            <p className="pt-4 text-lg leading-8 text-gray-600">{projData?.description}</p>
          </div>

          <div className='min-w-[350px] xl:min-w-[450px]'>
            <h3 className='text-2xl pb-3'>Key Details</h3>

            <div className='text-lg flex flex-col gap-4'>

              <div className='flex gap-3'>
                <div className='size-2 inline-block mt-2 aspect-square bg-a-royalsafforn rounded-full'></div>
                <p>
                  <span className='font-medium! text-nowrap pr-3'>Location :</span>
                  <span className='text-gray-600'>{projData?.location}</span>
                </p>
              </div>


              <div className='flex gap-3'>
                <div className='size-2 inline-block mt-2 aspect-square bg-a-royalsafforn rounded-full'></div>
                <p>
                  <span className='font-medium! text-nowrap pr-3'>Commencement Date :</span>
                  <span className='text-gray-600'>{new Date(projData.commencementDate).toLocaleDateString()}</span>
                </p>
              </div>

              <div className='flex gap-3'>
                <div className='size-2 inline-block mt-2 aspect-square bg-a-royalsafforn rounded-full'></div>
                <p>
                  <span className='font-medium! text-nowrap pr-3'>Total Built-Up Area :</span>
                  <span className='text-gray-600'>{projData?.projectArea}  Sq.Ft</span>
                </p>
              </div>

              <div className='flex gap-3'>
                <div className='size-2 inline-block mt-2 aspect-square bg-a-royalsafforn rounded-full'></div>
                <p>
                  <span className='font-medium! text-nowrap pr-3'>Number of Floors :</span>
                  <span className='text-gray-600'>{projData?.numberOfFloors} </span>
                </p>
              </div>

              <div className='flex gap-3'>
                <div className='size-2 inline-block mt-2 aspect-square bg-a-royalsafforn rounded-full'></div>
                <p>
                  <span className='font-medium! text-nowrap pr-3'>Special Features :</span>
                  <span className='text-gray-600'>{projData?.specialFeatures} </span>
                </p>
              </div>

              <div className='flex gap-3'>
                <div className='size-2 inline-block mt-2 aspect-square bg-a-royalsafforn rounded-full'></div>
                <p>
                  <span className='font-medium! text-nowrap pr-3'>Amenities :</span>
                  <span className='text-gray-600'>{projData?.amenities} </span>
                </p>
              </div>

            </div>
          </div>
        </div>

        <hr className='border-gray-300 my-5' />

      {/* product Features --------------------------- */}
        <div className='pt-5 pb-16'>
          <Heading align='left' text={"Features & amenities"} />

          <div className='pt-16 grid xsl:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16 sm:gap-y-28'>
            {projData?.features?.map((item, i)=>(
              <div key={i} className='rounded-3xl px-5 text-center flex flex-col items-center gap-4' style={{backgroundColor: 'transparent',backgroundImage: `linear-gradient(180deg, #F6F3EC 0%, #F6F3EC00 100%)`}}>
                <div>
                  <svg className='w-44'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 104" fill="none" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H320C290.545 0 267.772 24.6753 253.628 49.8666C235.516 82.1247 200.378 104 160 104C119.622 104 84.4835 82.1247 66.3718 49.8666C52.228 24.6753 29.4552 0 0 0Z" fill="white" />
                  </svg>
                </div>
                <div className='-mt-20 size-16 aspect-square grid place-items-center bg-gray-300 rounded-full'>
                    <img src={getImageSvg("cup")} className='size-10!' loading='lazy' alt={`${item.label} icon`} title={`${item.label} icon`}  />
                </div>
                <div className='font-josefin text-2xl font-semibold'>{item.label}</div>
                <p className=' text-gray-500'>{item.value}</p>


              </div>
            ))}
          </div>
        </div>

      {/* location --------------------------- */}

        <hr className='border-gray-300 my-5' />

        <div className='pt-5 pb-16'>
          <Heading align='left' text={"Location"} />

          <div className='py-8 grid lg:grid-cols-2 items-center gap-8'>
            <div className='p-10 md:px-16 border border-gray-500 rounded-3xl'>
              <div className=''>
                <div>Address</div>
                <div className='pt-4'>
                  <h3 className='text-3xl'>{projData?.address}</h3>
                </div>
              </div>

              <hr className='border-gray-300 my-5' />

              <div>
                <h3 className='text-2xl pb-5'>Key transport</h3>
                <div className='grid grid-cols-2 gap-5'>
                  {projData?.keyTransport.map((item, i)=>(
                    <div key={i} className='font-bold'>
                      <div className='text-gray-500 pb-2'>{item.label}</div>
                      <div>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className='rounded-3xl overflow-hidden'>
              <iframe src={projData.mapLink} className='w-full h-[500px]' allowFullScreen="" loading="lazy" title="Google Map showing Anusha Structures office location" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      {/* product image --------------------------- */}


      </div>
    </section>
  </>);
};

export default ProjectView;