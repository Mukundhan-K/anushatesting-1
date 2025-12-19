import React from 'react'
import { getImagewebp } from '../../utility/getImage'
import { NavLink } from 'react-router-dom'
import Heading from './Heading'
import ButtonArrow from '../ui/ButtonArrow'

const FooterComponent = () => {

  const handleButtonClick = (link) => {
    window.location.href = link; // Redirect to an external URL
  };

  return (<>
    <div className='px-8 py-12 bg-white rounded-4xl'>
        <div className='grid grid-cols-12'>

            <div className='col-span-12 xl:col-span-3 w-full xl:pr-4 pb-4 mb-4 md:pb-8 md:mb-8 xl:pb-0 xl:mb-0 border-b border-b-gray-300 xl:border-b-0 xl:border-r xl:border-r-gray-300  flex flex-col justify-between gap-5'>
                <div className='w-50 xl:w-4/5'>
                    <img src={getImagewebp("logo")} className='' loading='lazy' alt={`anusha structures logo`} title={`logo of anusha structures`} />
                </div>

                <p className='text-xl text-gray-500 leading-8'>Every brick we lay is a promise of trust, quality, and a future built to last. Because Your vision is our blueprint. Your trust is our foundation</p>
                {/* <ButtonArrow text='Be our next Client' /> */}

            </div>

            <div className='col-span-12 lg:col-span-7 xl:col-span-5 lg:pr-5 xl:px-8 lg:border-r lg:border-r-gray-300 flex flex-col sm:flex-row gap-5 justify-between'>
                <div className='flex flex-col justify-between gap-5'>
                    <h4 className='text-2xl'>Links</h4>
                    <NavLink to={"/"} className={"text-xl font font-outfit"}>Home</NavLink>
                    <NavLink to={"/about"} className={"text-xl font font-outfit"}>About Us</NavLink>
                    <NavLink to={"/projects"} className={"text-xl font font-outfit"}>Projects</NavLink>
                    <NavLink to={"/services"} className={"text-xl font font-outfit"}>Services</NavLink>
                    <NavLink to={"/contact"} className={"text-xl font font-outfit"}>Contact</NavLink>
                    <NavLink to={"/blogs"} className={"text-xl font font-outfit"}>Blogs</NavLink>
                </div>

                <div className=''>
                    <h5 className='text-2xl'>Business Hours</h5>
                    <div className='flex gap-3 font-medium text-xl pt-5'>
                        <div>Mon to Fri :</div> <div>09 Am - 06 Pm</div>
                    </div>
                    <div className='flex gap-3 font-medium text-xl pt-2'>
                        <div>Saturday :</div> <div>09 Am - 06 Pm</div>
                    </div>
                    <div className='flex gap-3 font-medium text-xl pt-2'>
                        <div>Sunday :</div> <div> By Appointment</div>
                    </div>
                </div>
            </div>

            <div className='col-span-12 lg:col-span-5 xl:col-span-4 pt-8 mt-8 lg:pt-0 lg:mt-0 border-t border-t-gray-300 lg:border-0 flex flex-col justify-between items-center lg:items-start gap-5 lg:pl-8'>
                <div className='flex flex-col items-center lg:block'>
                    <h3 className='w-fit text-4xl border-b border-gray-400 pb-1'>+91 76959 50724</h3>
                    <h3 className='w-fit text-2xl border-b border-gray-400 pt-4 pb-1 flex flex-col sm:flex-row'><span>anushastructures02</span><span>@gmail.com</span></h3>
                </div>

                <div>
                    <svg width="0" height="0" className='absolute'>
                    <defs>
                        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
                        </clipPath>
                    </defs>
                    </svg>

                    <div className="relative">
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
                    ></div>

                    <div className="relative flex items-end gap-x-2 p-2">

                        <div className="relative" onClick={()=>handleButtonClick("https://api.whatsapp.com/send?phone=7695950724&text=Hi!%20Can%20I%20get%20more%20information%20on%20Construction?%20%23JYNQ0X")}>
                            <div
                                    style={{clipPath: 'url(#squircleClip)'}}
                                className="w-14 h-14 bg-gradient-to-br from-[#11f66d] to-[#00d757] rounded-xl flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#ffffff"
                                    className="h-8 w-8 text-white"

                                >
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.4145 14.3822C17.1173 14.2334 15.6564 13.5147 15.384 13.4153C15.1117 13.3162 14.9136 13.2667 14.7154 13.5641C14.5173 13.8615 13.9478 14.5309 13.7745 14.7293C13.6012 14.9275 13.4278 14.9524 13.1307 14.8036C12.8335 14.6549 11.876 14.3411 10.7411 13.3287C9.85769 12.5407 9.26129 11.5677 9.08799 11.2702C8.91461 10.9727 9.06943 10.8119 9.21822 10.6637C9.35195 10.5306 9.51546 10.3166 9.66399 10.1431C9.81257 9.96961 9.86209 9.84558 9.96114 9.6474C10.0602 9.44899 10.0107 9.27553 9.93634 9.12682C9.86209 8.97808 9.26779 7.51537 9.02016 6.92034C8.77895 6.34096 8.53397 6.41944 8.35157 6.41024C8.17844 6.40165 7.98013 6.39981 7.78207 6.39981C7.58397 6.39981 7.26201 6.47418 6.98958 6.77159C6.71727 7.06908 5.94959 7.78806 5.94959 9.25059C5.94959 10.7133 7.01434 12.1263 7.16296 12.3246C7.31158 12.523 9.25829 15.5244 12.2393 16.8116C12.9482 17.1178 13.5017 17.3006 13.9333 17.4375C14.6451 17.6637 15.2929 17.6318 15.805 17.5552C16.3759 17.47 17.5631 16.8364 17.8107 16.1424C18.0583 15.4481 18.0583 14.8532 17.984 14.7293C17.9097 14.6053 17.7116 14.5309 17.4145 14.3822ZM11.9925 21.7853H11.9886C10.2148 21.7846 8.47517 21.3081 6.9575 20.4075L6.59654 20.1932L2.85541 21.1746L3.85395 17.527L3.61899 17.153C2.62951 15.5792 2.10688 13.7603 2.10765 11.8925C2.10983 6.44257 6.54415 2.0086 11.9965 2.0086C14.6367 2.00954 17.1185 3.03905 18.9849 4.9075C20.8511 6.77582 21.8782 9.25932 21.8772 11.9005C21.875 17.3509 17.4408 21.7853 11.9925 21.7853ZM20.4052 3.48773C18.1599 1.2398 15.1739 0.00128304 11.9925 0C5.43736 0 0.102301 5.33471 0.0996495 11.8918C0.0987941 13.9879 0.646396 16.0337 1.68711 17.8373L0 24L6.30443 22.3462C8.04154 23.2937 9.99728 23.7931 11.9877 23.7937H11.9926C18.547 23.7937 23.8825 18.4585 23.8852 11.9013C23.8864 8.72361 22.6505 5.73566 20.4052 3.48777"
                                    fill="#ffffff"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="relative" onClick={()=>window.location.href = 'https://www.instagram.com/anushastructures/'}>
                            <div
                                // style={{clipPath: url(#squircleClip)}}
                                className="w-14 h-14 bg-gradient-to-br from-[#f58529] via-[#dd2c7c] to-[#8034b7] rounded-xl flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="#ffffff"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.46494 1.066C8.63828 1.01222 9.01228 1 12 1C14.9883 1 15.3617 1.01283 16.5344 1.066C17.7059 1.11917 18.5059 1.30556 19.2056 1.5775C19.9395 1.85381 20.6043 2.28674 21.1538 2.84617C21.7133 3.3956 22.1463 4.06046 22.4225 4.79439C22.6944 5.49411 22.8802 6.29406 22.934 7.46494C22.9878 8.63828 23 9.01228 23 12C23 14.9877 22.9872 15.3617 22.934 16.5351C22.8808 17.7059 22.6944 18.5059 22.4225 19.2056C22.1414 19.9286 21.7649 20.5427 21.1538 21.1538C20.6044 21.7133 19.9395 22.1463 19.2056 22.4225C18.5059 22.6944 17.7059 22.8802 16.5351 22.934C15.3617 22.9878 14.9877 23 12 23C9.01228 23 8.63828 22.9872 7.46494 22.934C6.29406 22.8808 5.49411 22.6944 4.79439 22.4225C4.07144 22.1414 3.45728 21.7649 2.84617 21.1538C2.28664 20.6044 1.85368 19.9395 1.5775 19.2056C1.30556 18.5059 1.11978 17.7059 1.066 16.5351C1.01222 15.3617 1 14.9883 1 12C1 9.01167 1.01283 8.63828 1.066 7.46556C1.11917 6.29406 1.30556 5.49411 1.5775 4.79439C1.85381 4.06051 2.28674 3.39568 2.84617 2.84617C3.39559 2.28664 4.06045 1.85368 4.79439 1.5775C5.49411 1.30556 6.29406 1.11978 7.46494 1.066ZM16.4452 3.046C15.2853 2.99344 14.937 2.98183 12 2.98183C9.063 2.98183 8.71467 2.99344 7.55478 3.046C6.48228 3.09489 5.89989 3.27394 5.51244 3.42489C4.99911 3.62411 4.63244 3.86244 4.24744 4.24744C3.86306 4.63244 3.62411 4.99911 3.42489 5.51244C3.27394 5.89989 3.09489 6.48228 3.046 7.55478C2.99344 8.71467 2.98183 9.063 2.98183 12C2.98183 14.937 2.99344 15.2853 3.046 16.4452C3.09489 17.5177 3.27394 18.1001 3.42489 18.4876C3.60111 18.9654 3.88219 19.3976 4.24744 19.7526C4.60234 20.1178 5.03461 20.3989 5.51244 20.5751C5.89989 20.7261 6.48228 20.9051 7.55478 20.954C8.71467 21.0066 9.06239 21.0182 12 21.0182C14.9376 21.0182 15.2853 21.0066 16.4452 20.954C17.5177 20.9051 18.1001 20.7261 18.4876 20.5751C19.0009 20.3759 19.3676 20.1376 19.7526 19.7526C20.1178 19.3977 20.3989 18.9654 20.5751 18.4876C20.7261 18.1001 20.9051 17.5177 20.954 16.4452C21.0066 15.2853 21.0182 14.937 21.0182 12C21.0182 9.063 21.0066 8.71467 20.954 7.55478C20.9051 6.48228 20.7261 5.89989 20.5751 5.51244C20.3759 4.99911 20.1376 4.63244 19.7526 4.24744C19.3676 3.86306 19.0009 3.62411 18.4876 3.42489C18.1001 3.27394 17.5177 3.09489 16.4452 3.046ZM10.5955 15.3909C11.0408 15.5754 11.518 15.6703 12 15.6703C12.9735 15.6703 13.907 15.2836 14.5953 14.5953C15.2837 13.907 15.6704 12.9734 15.6704 12C15.6704 11.0266 15.2837 10.093 14.5953 9.40468C13.907 8.71636 12.9735 8.32966 12 8.32966C11.518 8.32966 11.0408 8.4246 10.5955 8.60905C10.1501 8.7935 9.74553 9.06385 9.40471 9.40468C9.06389 9.7455 8.79353 10.1501 8.60908 10.5954C8.42463 11.0407 8.3297 11.518 8.3297 12C8.3297 12.482 8.42463 12.9593 8.60908 13.4046C8.79353 13.8499 9.06389 14.2545 9.40471 14.5953C9.74553 14.9361 10.1501 15.2065 10.5955 15.3909ZM8.00205 8.00201C9.06238 6.94168 10.5005 6.34599 12 6.34599C13.4996 6.34599 14.9377 6.94168 15.998 8.00201C17.0583 9.06234 17.654 10.5005 17.654 12C17.654 13.4995 17.0583 14.9376 15.998 15.998C14.9377 17.0583 13.4996 17.654 12 17.654C10.5005 17.654 9.06238 17.0583 8.00205 15.998C6.94172 14.9376 6.34603 13.4995 6.34603 12C6.34603 10.5005 6.94172 9.06234 8.00205 8.00201ZM18.9077 7.18838C19.1583 6.93773 19.2991 6.59779 19.2991 6.24333C19.2991 5.88886 19.1583 5.54892 18.9077 5.29828C18.657 5.04764 18.3171 4.90683 17.9626 4.90683C17.6082 4.90683 17.2682 5.04764 17.0176 5.29828C16.7669 5.54892 16.6261 5.88886 16.6261 6.24333C16.6261 6.59779 16.7669 6.93773 17.0176 7.18838C17.2682 7.43902 17.6082 7.57983 17.9626 7.57983C18.3171 7.57983 18.657 7.43902 18.9077 7.18838Z"
                                    />
                                </svg>                       
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                // style="clip-path: url(#squircleClip)"
                                className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                ></path>
                                </svg>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                // style="clip-path: url(#squircleClip)"
                                style={{clipPath: 'url(#squircleClip)'}}
                                className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>

        <div className='pt-5 lg:pt-12 mt-5 lg:mt-14 border-t border-gray-300 text-xl font-semibold text-center'>
            © 2025 <span className='font-medium text-2xl text-a-green'>Anusha Structures</span> . All Rights Reserved
        </div>
    </div>
  </>)
}

export default FooterComponent