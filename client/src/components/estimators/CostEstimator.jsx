import React, {useState} from 'react';
import CommonForm from '../common/CommonForm';

const CostEstimator = ({registeredFormControl, clsStyle, divCls}) => {


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
          formClass={`grid ${clsStyle ? clsStyle : "sm:grid-cols-2"} gap-8`}
          buttonText={"Estimate Construction Cost For Free"}
          btntype='submit'
        />
      </div>
    </div>
  </>);
};

export default CostEstimator;