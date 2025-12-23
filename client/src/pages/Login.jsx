import React, {useCallback, useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'sonner';

import { getImagewebp } from '../utility/getImage';
import { loginFormControl, registeredFormControl } from "../data/formData.js";
import CommonForm from '../components/common/CommonForm.jsx';

import { addUser, loginUser } from '../redux/authSlice.js';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  async function createUser(e) {
    dispatch(addUser(formData))
    .then((data)=>{
      console.log("log data : ", data);
      if (data?.payload?.success) {
        toast.success("success", {
          description: `User added : ${data?.payload.data?.userName}`,
        })
      }else{
        console.log(data.payload);
        toast.error('Failed', {
          description: `${(data?.payload?.message) ? (data?.payload?.message) : (data.error?.message)}`,
        });
      };
    })
    .catch((error)=>{
      console.error(error);
    })
  };

  async function logUser() {
    try {
      console.log("login called");

      const data = await dispatch(loginUser(formData)).unwrap();
      console.log(data);
      
      if (data?.success) {
        toast.success("Success", {
          description: `Welcome  : ${data?.user?.userName}`,
        });

        localStorage.setItem("authToken", JSON.stringify(data.token));
        navigate("/admin", { replace: true });
        return { success: true };
      };

      toast.error("Failed", {
        description: data?.message || "Something went wrong",
      });
      return { success: false };

    }catch (error) {
      console.error(error);
      toast.error("Failed", {
        description: error?.message || "Network error",
      });
      return { success: false };
    }
      // console.log("login called");

    //     dispatch(loginUser(formData))
    // .then((data)=>{
    //   console.log("log data : ", data);
    //   if (data?.payload?.success) {
    //     toast.success("success", {
    //       description: `welcome : ${data?.payload.user?.userName}`,
    //     })
    //   }else{
    //     console.log(data.payload);
    //     toast.error('Failed', {
    //       description: `${(data?.payload?.message) ? (data?.payload?.message) : (data.error?.message)}`,
    //     });
    //   };
    // })
    // .catch((error)=>{
    //   console.error(error);
    // })

}

function loginStateChanger() {
    // setisLoginForm((prev)=>(!prev));
    setFormData({});
};

  const sendtoreset = useCallback(() => {  
    return navigate("/changemypass", { replace: true });
  }, []);

  return (<>

    <section className='min-h-screen w-full bg-bg-gray'>
      <div className='container mx-auto px-5 py-10 h-full flex flex-col justify-center items-center'>

        <div className='pb-5 flex justify-center'>
          <img src={getImagewebp("logo")} className='w-[100px]' alt="" />
        </div>

        <div className='bg-white shadow border border-gray-300 p-10 rounded-xl flex flex-col gap-4 justify-center'>
          <h1 className='text-center text-xl pb-3 border-b border-gray-400'>
            Login in to Anusha
          </h1>

          <div>
              <CommonForm
                formControls={loginFormControl}
                buttonText={"Log in"}
                formData={formData}
                setFormData={setFormData}
                formClass={"w-[300px] grid gap-3"}
                btnonclick={logUser}
                // onsubmit={logUser}
                // btntype='submit'
                btntype='button'
                btniconclass={'stroke-white'}
                btnclass="mt-5 flex justify-center"
              />
          </div>

            <p className='text-center'>
              <span className='font-medium select-none'>Forget Password ? </span>
              <span className='cursor-pointer text-a-royalsafforn text-primary font-medium select-none' onClick={sendtoreset}>Click here</span>
            </p>

        </div>

      </div>
    </section>
  </>);
};

export default Login;