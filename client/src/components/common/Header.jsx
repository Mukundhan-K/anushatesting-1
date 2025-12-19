import React, {useState} from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

// utils
import { getImageSvg, getImagewebp } from "../../utility/getImage";
import Sidebar from './Sidebar';

const Header = () => {

  const navigate = useNavigate();

  const [openNavDrawer, setOpenNavDrawer] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkContent = [
    {name : "Home", link:"home"},
    {name : "About", link:"about"},
    {name : "Services", link:"services"},
    {name : "Projects", link:"projects"},
    // {name : "Floor Plans", link:"floorplans"},
    {name : "Cost Calculator", link:"estimator"},
  ];

  return (<>

   <div className="w-full bg-a-green text-white text-sm">
      <div className="container mx-auto flex items-center justify-between py-1 px-4">

        {/* LEFT SIDE — Phone & Email */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.21a1 1 0 011.01-.24 11.72 11.72 0 003.67.59 1 1 0 011 1v3.5a1 1 0 01-.92 1A18 18 0 013 5.92 1 1 0 014 5h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.67 1 1 0 01-.24 1.01l-2.23 2.11z"/>
            </svg>
            <a href="tel:+917695950724" className="hover:underline">+91 76959 50724</a>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v1l10 6 10-6V6a2 2 0 00-2-2zm0 5.33l-8.5 5.1a1 1 0 01-1 0L4 9.33V18a2 2 0 002 2h12a2 2 0 002-2V9.33z"/>
            </svg>
            <a href="mailto:anushastructures02@gmail.com" className="hover:underline">
              anushastructures02@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — Social Icons + Logo */}
        <div className="flex items-center gap-2">
          {/* Social Icons */}
          <a href="#" target='_blank' className="group" aria-label="facebook">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className='group-hover:fill-a-royalsafforn'>
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
            </svg>
            <span className='hidden'>facebook</span>
          </a>

          <a href="https://www.instagram.com/anushastructures/" target='_blank' className="group" aria-label="instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"  className='group-hover:fill-a-royalsafforn' fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className='hidden'>facebook</span>
          </a>

        </div>
      </div>
    </div>

    <section id='navbar' className='bg-white'>
      <div id="navbarContainer" className='sm:container mx-auto px-4 relative z-10'>
        <div className='py-2 rounded-full flex items-center justify-between gap-5'>

          <div className='f-c-5 w-fit'>
            <div id='logoContainer'>
              <Link to={"/"}>
                <img src={getImagewebp("logo")} loading='eager' alt="logo"  title="logo of anusha structures" id="logo" className='w-36 h-auto' />
              </Link>
            </div>

            {/* <nav className='hidden xl:flex space-x-4 2xl:space-x-8'>
              {navLinkContent.map((link)=>(
                <NavLink key={link.name} to={link.link} className={`capitalize navlinks font-normal! style-underline inline-block text-xl xl:text-base 2xl:text-xl px-3! py-3! 2xl:px-5!`}>
                  {link.name}
                </NavLink>
              ))}
            </nav> */}
          </div>

          <div className='f-c-5'>
                      
            <div className='hidden md:flex justify-center items-center gap-1 font-bold font-outfit'>
              <span>Call Us : </span>
              <a href="tel:+917695950724" className='text-gray-600'> +91 76959 50724</a>
            </div>

            <button type='button' onClick={()=>navigate("/contact")} className='btn-pill bg-a-royalsafforn text-white hidden sm:inline-block'>Get in Touch</button>
         
            {/* menubar */}
            <div className='p-4 cursor-pointer grid  place-items-center border rounded-3xl' onClick={()=>setOpenNavDrawer(()=>true)}>
              <button className='cursor-pointer'>
                <img src={getImageSvg("menubar")} className="size-6 object-contain rotate-z-90" loading='lazy' alt={`menubar icon`} title={`menubar icon for side bar`}  />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <Sidebar navLinkContent={navLinkContent} openNavDrawer={openNavDrawer} setOpenNavDrawer={setOpenNavDrawer} />

  </>);
};

export default Header;