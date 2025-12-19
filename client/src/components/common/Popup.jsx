import React,{useState, useEffect} from "react";
import CommonForm from "./CommonForm";
import { Link } from "react-router-dom";
import { getImageSvg } from "../../utility/getImage";

const Popup = ({ isOpen, onClose, title, children, otrcss, width }) => {

    const [formData, setFormData] = useState({});

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"; // disable scroll
      } else {
        document.body.style.overflow = "auto"; // enable scroll again
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpen]);
    
  if (!isOpen) return null;

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


  return (
    <div
      className="fixed inset-0 z-[5555] bg-black/50 backdrop-blur-sm overflow-y-auto p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className={`relative bg-white rounded-2xl shadow-lg w-full ${width ? width : 'max-w-[600px]'} mx-auto my-10 p-6  ${otrcss ? otrcss : 'lg:py-8 lg:px-12'}`}
       >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-7 text-gray-500 text-3xl hover:text-gray-700"
        >
          ✕
        </button>

        {children ? <>
          {/* Content */}
          {children}
        </> : <>

            <div className="py-4 mb-8 border-b border-gray-300 text-center">
              <h2 className="font-semibold text-3xl pb-2 font-outfit">Book Free Appointment</h2>
              <p>Expert Construction Solutions by Anusha at the Right Price.</p>
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

            <div className="pt-8 grid grid-cols-3 gap-5 justify-between">
                <div className="text-center">
                  <img src={getImageSvg("builder_3")}  className='size-20 justify-self-center' loading='lazy' alt={`building icon`} title={`icon of building`} />
                  <div className="">
                    <span className="font-semibold">100+</span>
                    <span> Built</span>
                  </div>
                </div>

                <div className="text-center">
                  <img src={getImageSvg("certified")}  className='size-20 justify-self-center' loading='lazy' alt={`certified icon`} title={`icon of certified`} />
                  <div className="">
                    <span className="font-semibold">Gov</span>
                    <span> Certified</span>
                  </div>
                </div>

                <div className="text-center">
                  <img src={getImageSvg("rupee-2")}  className='size-20 justify-self-center' loading='lazy' alt={`rupee icon`} title={`icon of rupee`} />
                  <div className="">
                    <span className="font-semibold">₹</span>
                    <span>  Safety</span>
                  </div>
                </div>
            </div>
        </>
        }

      </div>
    </div>
  );
};

export default Popup;
