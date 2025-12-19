import React, {useState} from 'react';
import Marquee from '../ui/marquee';
import { getImageSvg, getImagewebp } from '../../utility/getImage';
import CommonForm from '../common/CommonForm';
import { Link } from 'react-router-dom';

const Hero = () => {

  const [formData, setFormData] = useState({});
  
  const registeredFormControl = [
    {
      name : "name",
      placeholder : "Enter your Name",
      componentType : "input",
      type : "text",
      icon : "user"
    },
    {
      name : "email",
      placeholder : "Enter your Email",
      componentType : "input",
      type : "email",
      icon : "email"
    },
    {
      name : "phone",
      placeholder : "Enter your Number",
      componentType : "input",
      type : "tel",
      icon : "call"
    },
    {
      name : "location",
      placeholder : "Enter your Plot location",
      componentType : "input",
      type : "text",
      icon : "location-house"
    }
  ];

  return (<>
    <section id='hero' className=''>
      <div className='container mx-auto px-4'>

        <div className='h-full w-full py-10 xl:py-16 flex gap-16 justify-between items-center 2xl:items-start'>
      
          <div className='h-full w-full flex flex-col justify-between gap-10'>

              <div className='text-center h-full flex-1 2xl:pb-20 flex flex-col justify-end gap-5'>
                <Marquee quotes={"Inspiring Lives"} color='white' />
                <h1 className='lg:w-2/3 text-5xl xs:text-6xl pt-10 pb-10 md:pb-0 2xl:py-10 sm:py-0 text-white font-extrabold [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)] text-left'>Construct Your Dream Space With Us</h1>
              </div>

              <div className='flex flex-col justify-center items-center gap-3'>
                  <hr className='w-full border-gray-300 pb-5' />

                  <div className='w-full flex justify-between items-center gap-5'>
                      <div className='flex items-center gap-4'>
                          <div className='flex items-center'>
                              <div className='size-20 bg-a-royalsafforn rounded-full'></div>
                              {/* <div className=' text-6xl font-bold'>1</div> */}
                              <div className=' -ml-12 text-6xl font-bold text-white'>7</div>
                          </div>
                          <div className='w-2/3 border-l ml-4! pl-4 text-white font-medium border-l-gray-200 text-2xl'>
                              Years of Expertise
                          </div>

                      </div>

                      <div className='flex items-center gap-5'>
                          <div className="img-pill border border-white">
                              <img src={getImagewebp("hero-pill-1")} alt="Anusha Contruction building" loading='lazy' title={`building of Anusha Contruction`}  />
                          </div>
                          <div className="img-pill hidden sm:inline-block border border-white">
                              <img src={getImagewebp("hero-pill-2")} alt="Anusha Contruction building" loading='lazy' title={`building of Anusha Contruction`}  />
                          </div>
                          <div className="img-pill hidden sm:inline-block border border-white">  
                              <img src={getImagewebp("hero-pill-3")} alt="Anusha Contruction building" loading='lazy' title={`building of Anusha Contruction`}  />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className={`h-fit bg-white rounded-2xl shadow-lg w-full max-w-[400px] hidden md:block mx-auto p-6`}>

            <div className="py-4 mb-3 border-b border-gray-300 text-center">
              <h2 className="font-semibold text-xl pb-2 font-outfit">Book Free Appointment</h2>
              <p className='text-sm'>Expert Construction Solutions by Anusha at the Right Price.</p>
            </div>

            <CommonForm
                formControls={registeredFormControl}
                formData={formData}
                setFormData={setFormData}
                defaultOnSubmit={true}
                btnclass={"pt-3 justify-center"}
                formClass={`grid grid-cols-1 gap-2`}
                buttonText={"Start your Construction"}
                btntype='submit'
            />

            <p className="py-3 text-xs text-gray-900">
                * By submitting this form, I confirm that I have read and agreed to accept Anusha's 
                <Link to={"/privacy-policy"} className="text-orange-400">&nbsp; &nbsp; Privacy Policy</Link>
            </p>

          </div>


        </div>
      </div>

      {/* <div className='container mx-auto px-4 sm:px-0'>
        <div className='h-full w-full pt-48 pb-5 lg:pb-10 flex flex-col justify-between gap-10'>

            <div className='text-center h-full flex-1 md:pb-20 flex flex-col justify-end items-center gap-5'>
              <Marquee quotes={"Inspiring Lives"} color='white' />
              <h1 className='md:w-2/3 text-5xl xs:text-6xl md:text-7xl lg:text-8xl py-10 sm:py-0 text-white font-extrabold [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]'>Construct Your Dream Space With Us</h1>
              <p className='text-white lg:w-1/2 font-medium hidden sm:block sm:font-bold text-xl'>We bring your dream spaces to life with expert construction and interior design services across India. delivering quality, precision, and timeless craftsmanship.</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-3'>
                <hr className='w-full border-gray-300 pb-5' />

                <div className='w-full flex justify-between items-center gap-5'>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center'>
                            <div className='size-20 bg-a-royalsafforn rounded-full'></div>
                            <div className=' -ml-12 text-6xl font-bold text-white'>7</div>
                        </div>
                        <div className='w-2/3 border-l ml-4! pl-4 text-white font-medium border-l-gray-200 text-2xl'>
                            Years of Expertise
                        </div>

                    </div>

                    <div className='flex items-center gap-5'>
                        <div className="img-pill border border-white">
                            <img src={getImagewebp("hero-pill-1")} alt="Anusha Contruction building" loading='lazy' title={`building of Anusha Contruction`}  />
                        </div>
                        <div className="img-pill hidden sm:inline-block border border-white">
                            <img src={getImagewebp("hero-pill-2")} alt="Anusha Contruction building" loading='lazy' title={`building of Anusha Contruction`}  />
                        </div>
                        <div className="img-pill hidden sm:inline-block border border-white">  
                            <img src={getImagewebp("hero-pill-3")} alt="Anusha Contruction building" loading='lazy' title={`building of Anusha Contruction`}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> */}

    </section>

    <section className='h-full w-full block md:hidden'>
        <div className='container mx-auto px-4'>
          <div
            className={`bg-white rounded-2xl shadow-lg w-full max-w-[500px] mx-auto my-10 p-6`}
       >

            <div className="py-4 mb-3 border-b border-gray-300 text-center">
              <h2 className="font-semibold text-xl pb-2 font-outfit">Book Free Appointment</h2>
              <p className='text-sm'>Expert Construction Solutions by Anusha at the Right Price.</p>
            </div>

            <CommonForm
                formControls={registeredFormControl}
                formData={formData}
                setFormData={setFormData}
                defaultOnSubmit={true}
                btnclass={"pt-8 justify-center"}
                formClass={`grid grid-cols-1 gap-5`}
                buttonText={"Start your Construction"}
                btntype='submit'
            />

            <p className="py-3 text-xs text-gray-500">
                * By submitting this form, I confirm that I have read and agreed to accept Anusha's 
                <Link to={"/privacy-policy"} className="text-a-royalsafforn">&nbsp; &nbsp; Privacy Policy</Link>
            </p>

          </div>
        </div>
    </section>
  </>);
};

export default Hero;