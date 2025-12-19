import React, {useState} from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { getImageSvg, getImagewebp } from '../utility/getImage';
import Button from '../components/ui/Button';
import { logout } from '../redux/authSlice';
import Api from '../utility';
import { toast } from 'sonner';

const AdminView = ({}) => {

  const dispatch = useDispatch();
  const {user,isAuthenticated } = useSelector((state)=>state.authReducer);
console.log(user,isAuthenticated);


  const adminBarContent = [
    {name : "Dashboard", link:"/admin/dashboard"},
    {name : "Add Project", link:"/admin/addproject"},
    // {name : "View Project", link:"/admin/viewprojects"},
    {name : "Add User", link:"/admin/adduser"}
  ];

  const [openAdminSidebar, setOpenAdminSidebar] = useState(false);
  const [openAdminMenu,setOpenAdminMenu] = useState(false);

  const handleLogout = async() => {
    if (!isAuthenticated) return;
    console.log("logout");
    
    try {
      await Api.get("/api/auth/logout", { withCredentials: true });
    } catch (error) {
      toast.error("Logout Failed");
    } finally {
      localStorage.removeItem("authToken");
      dispatch(logout());
    }
  };

  return (
    <>
    <div className=''>

      <div className='bg-white fixed top-0 left-0 right-0 w-full z-50'>
        <div className=' w-full px-10 py-3 flex justify-between bg-a-royalsafforn/25'>

        <div className='flex items-center gap-10'>

          <div className='p-2 cursor-pointer grid lg:hidden place-items-center border rounded-2xl' onClick={()=>setOpenAdminSidebar((prev)=>{
            // console.log(prev);
            return (!prev);
          })}>
              <img src={getImageSvg("menubar")} className="size-6 object-contain rotate-z-90" loading='lazy' alt={`menubar icon`} title={`menubar icon for side bar`}  />
          </div>

          <span className='text-2xl'>Admin Panel</span>
        </div>
          
          <div className='flex gap-8 justify-center items-center'>

            <div className=' relative'>

              <div className='p-2 rounded-xl bg-a-royalsafforn hover:bg-a-royalsafforn/75  duration-300' onClick={()=>setOpenAdminMenu((prev)=>(!prev))}>
                <img src={getImageSvg("user")}className='size-10 fill-white!' loading='lazy' alt={`user icon`} title={`icon of user`} />
              </div>
            
              {openAdminMenu && <div className='absolute w-[200px] bg-gray-300 border border-gray-600 p-5 -left-18 top-16 rounded-xl'>
                <div className='pb-2 flex justify-end'  onClick={()=>setOpenAdminMenu((prev)=>(!prev))}>
                  <img src={getImageSvg("cancel")}className='size-5' loading='lazy' alt={`cancel icon`} title={`icon of cancel`} />
                </div>
                  <div>Name : {user.userName}</div>
                  <div>Role : {user.role}</div>
                  <div className='pt-5 flex justify-center'>
                    <Button text='Logout' btnonclick={handleLogout} />
                  </div>
              </div>}
            </div>
            <div className='pl-4 border-l'>
              <img src={getImagewebp("logo")} loading='eager' alt="logo"  title="logo of anusha structures" id="logo" className='w-36 h-auto' />
            </div>
          </div>

        </div>
      </div>

      <div className='flex gap-10 pt-[81px]'>

        <div className={`h-[calc(100vh-81px)]
            fixed lg:static top-[80px] left-0  bg-white shadow-lg transform
                   transition-transform duration-300 flex flex-col lg:block z-50 lg:z-0 lg:translate-x-0 ${(openAdminSidebar) ? " translate-x-0 " :  " -translate-x-full "}
          `}>
          <div className='h-full w-[200px] border-r border-gray-500'>

            <div className='py-5 grid'>
              {adminBarContent.map((link)=>(
                <NavLink key={link.name} to={link.link} 
                  className={`capitalize px-10 py-3 border-b border-gray-500 self-center`}
                  onClick={()=>setOpenAdminSidebar(()=>false)}
                >
                  <button>{link.name}</button>
                </NavLink>
              ))}
            </div>

          </div>
        </div>

        <div className='flex-1 p-5'>
          <Outlet />
        </div>

      </div>


    </div>
    </>
  );
};

export default AdminView;