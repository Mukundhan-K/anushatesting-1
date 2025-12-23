import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Api from "../utility/index"; // axios
import { getImagewebp } from "../utility/getImage";
import CommonForm from "../components/common/CommonForm";
import { resetPasswordControl } from "../data/formData";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState({
    main: "",
    confirm : ""
  });

  async function resetPass(e) {
    e.preventDefault();
    if (password.main != password.confirm) {
      return toast.error("Password and Confirm Password are not Matched");
    };

    if (!password || password.length < 5) {
      return toast.error("Password must be at least 5 characters");
    };

    try {

      const res = await Api.put(
        `/api/auth/resetPassword/${token}`,
        { password }
      );

      if (res.data.success) {
        toast.success("Password reset successful");
        navigate("/login");
      }

    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid or expired link");
    }
  }

  function handlePasswordChange(e) {
    const {name, value}= e.target;
    console.log(name, value);
    setPassword((prev)=> ({...prev, [name]: value})); 
  };

  return (

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
                formControls={resetPasswordControl}
                buttonText={"Reset"}
                formData={password}
                setFormData={setPassword}
                formClass={"w-[300px] grid gap-3"}
                btnonclick={resetPass}
                // onsubmit={logUser}
                // btntype='submit'
                btntype='button'
                btniconclass={'stroke-white'}
                btnclass="mt-5 flex justify-center"
              />
          </div>

            <p className='text-center'>
              <span className='font-medium select-none'>Redirect to Login </span>
              <span className='cursor-pointer text-a-royalsafforn text-primary font-medium select-none' onClick={()=>navigate("/login", { replace: true })}>Click here</span>
            </p>

        </div>

      </div>
    </section>

    // <section className="min-h-screen flex items-center justify-center">
    //   <form
    //     onSubmit={}
    //     className="bg-white p-8 rounded-xl shadow w-[320px]"
    //   >
    //     <h2 className="text-xl font-semibold mb-4">
    //       Reset Password
    //     </h2>

    //     <input
    //       type="password"
    //       placeholder="Enter new password"
    //       value={password.main}
    //       name="main"
    //       onChange={handlePasswordChange}
    //       className="w-full border px-4 py-2 rounded mb-4"
    //       required
    //     />

    //     <input
    //       type="password"
    //       placeholder="Enter Confirm password"
    //       value={password.confirm}
    //       name="confirm"
    //       onChange={handlePasswordChange}
    //       className="w-full border px-4 py-2 rounded mb-4"
    //       required
    //     />

    //     <button
    //       type="submit"
    //       disabled={loading}
    //       className="w-full bg-a-royalsafforn text-white py-2 rounded"
    //     >
    //       {loading ? "Updating..." : "Reset Password"}
    //     </button>
    //   </form>
    // </section>
  );
};

export default ResetPassword;
