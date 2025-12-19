import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CommonForm from '../common/CommonForm';
import { getImagewebp } from '../../utility/getImage';

const OpeningPopup = () => {

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

  return (
    <div className='h-full w-full flex flex-col md:flex-row gap-5'>
      <div className='min-h-full! w-full rounded-2xl bg-center bg-cover bg-no-repeat' style={{backgroundImage : `url(${getImagewebp(`our-journey-1`)})`}}>
        <div className='min-h-[200px]'></div>
      </div>

      <div className='h-full w-full'>
        <div className="py-4 mb-8 border-b border-gray-300 text-center">
            <h2 className="font-semibold text-xl font-outfit text-left">Expert Construction Solutions at the Right Price.</h2>
        </div>

        <CommonForm
            formControls={registeredFormControl}
            formData={formData}
            setFormData={setFormData}
            defaultOnSubmit={true}
            btnclass={"pt-5 justify-center"}
            formClass={`grid grid-cols-1 gap-3`}
            buttonText={"Book Free Consultation"}
            btntype='submit'
        />

        <p className="py-3 text-xs text-gray-500">
            * By submitting this form, I confirm that I have read and agreed to accept Anusha's 
            <Link to={"/privacy-policy"} className="text-a-royalsafforn">&nbsp; &nbsp; Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default OpeningPopup;