import React, {useState} from 'react';
import CommonForm from '../common/CommonForm';

const LoanEstimator = ({clsStyle, divCls}) => {

  const registeredFormControl = [
    {
      name : "name",
      label : "Name",
      placeholder : "Ex - Arunya",
      componentType : "input",
      type : "text",
      icon : "user"
    },
    {
      name : "phone",
      label : "Phone",
      placeholder : "Ex - +91 76959 50724",
      componentType : "input",
      type : "tel",
      icon : "call"
    },
    {
      name : "email",
      label : "Email",
      placeholder : "Ex - anushastructures02@gmail.com",
      componentType : "input",
      type : "text",
      icon : "email"
    },
    {
      name : "amonunt",
      label : "Loan Amount (₹)*",
      placeholder : "Ex - ₹5,00,000",
      componentType : "input",
      type : "number",
      icon : "rupee"
    },
    {
      name : "interest",
      label : "Annual Interest Rate (%)*",
      placeholder : "Ex - 9.5%",
      componentType : "input",
      type : "number",
      icon : "loan"
    },
    {
      name : "tenure",
      label : "Loan Tenure (in years)*",
      placeholder : "Ex - 5 Years",
      componentType : "input",
      type : "number",
      icon : "calender"
    },
  ];


  const [formData, setFormData] = useState({});

  return (<>
    <div className={divCls}>
      <div>
        <CommonForm
          formControls={registeredFormControl}
          formData={formData}
          setFormData={setFormData}
          defaultOnSubmit={true}
          btnclass={"pt-12 justify-center"}
          formClass={`grid ${clsStyle ? clsStyle : "grid-cols-2"} gap-8`}
          buttonText={"Estimate EMI For Free"}
          btntype='submit'
        />
      </div>
    </div>
  </>);
};

export default LoanEstimator;