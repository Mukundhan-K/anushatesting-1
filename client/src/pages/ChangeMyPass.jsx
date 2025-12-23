import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'sonner';

import { getImagewebp } from '../utility/getImage.jsx';
import { resetFormControl } from "../data/formData.js";
import CommonForm from '../components/common/CommonForm.jsx';

import { addUser, loginUser } from '../redux/authSlice.js';
import Api from '../utility/index.js';

function ChangeMyPass() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

async function submitForgot() {
  try {
    const res = await Api.post("/api/auth/forgotPassword", formData);

    if (res.data.success) {
      toast.success(res.data.message);
    }
  } catch (err) {
    toast.error(err.response?.data?.message || "Failed");
  }
}

  return (<>

    <section className='min-h-screen w-full bg-bg-gray'>
      <div className='container mx-auto px-5 py-10 h-full flex flex-col justify-center items-center'>

        <div className='pb-5 flex justify-center'>
          <img src={getImagewebp("logo")} className='w-[100px]' alt="" />
        </div>

        <div className='bg-white shadow border border-gray-300 p-10 rounded-xl flex flex-col gap-4 justify-center'>
          <h1 className='text-center text-xl pb-3 border-b border-gray-400'>
            Reset Pasword
          </h1>

          <div>
              <CommonForm
                formControls={resetFormControl}
                buttonText={"Reset"}
                formData={formData}
                setFormData={setFormData}
                formClass={"w-[300px] grid gap-3"}
                btnonclick={submitForgot}
                // onsubmit={logUser}
                // btntype='submit'
                btntype='button'
                btniconclass={'stroke-white'}
                btnclass="mt-5 flex justify-center"
              />
          </div>

            <p className='text-center'>
              <span className='font-medium select-none'>Redirect to Login</span>
              <span className='cursor-pointer text-a-royalsafforn text-primary font-medium select-none' onClick={()=>navigate("/login", { replace: true })}>Click here</span>
            </p>

        </div>

      </div>
    </section>
  </>);
};

export default ChangeMyPass;