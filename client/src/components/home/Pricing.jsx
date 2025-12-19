import React, {useState} from 'react';
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import ToggleBtn from '../ui/ToggleBtn';
import { Link } from 'react-router-dom';
import ButtonArrow from '../ui/ButtonArrow';

const Pricing = ({setOpenPop}) => {

  const [tab, setTab] = useState(false); 
  
  const premiumContent = [
    {name : "Basic", price: "₹ 2000 / sqft", img:"pricecard-1", discription: "A budget package with no compromise on quality that includes all construction essentials", points:
        ["Trusted brand steel & cement",
         "Standard floor tiles upto ₹50/sqft",
         "Standard flush doors and window finish",
         "Tractor Emulsion finish",
         "Essential kitchen & bathroom fittings"
        ]
    },
    {name : "Premium", price: "₹ 3500 / sqft", img:"pricecard-2", discription: "A budget package with no compromise on quality that includes all construction essentials", points:
        ["Trusted brand steel & cement",
         "Standard floor tiles upto ₹50/sqft",
         "Standard flush doors and window finish",
         "Tractor Emulsion finish",
         "Essential kitchen & bathroom fittings"
        ]
    },
    {name : "Luxury", price: "₹ 5000 / sqft", img:"pricecard-3", discription: "A budget package with no compromise on quality that includes all construction essentials", points:
        ["Trusted brand steel & cement",
         "Standard floor tiles upto ₹50/sqft",
         "Standard flush doors and window finish",
         "Tractor Emulsion finish",
         "Essential kitchen & bathroom fittings"
        ]
    },
  ];
//   const luxuryContent = [
//     {name : "Product Type 1", price: "₹ 100 / sqft", img:"pricecard-1", discription: "A budget package with no compromise on quality that includes all construction essentials", points:
//         ["Trusted brand steel & cement",
//          "Standard floor tiles upto ₹50/sqft",
//          "Standard flush doors and window finish",
//          "Tractor Emulsion finish",
//          "Essential kitchen & bathroom fittings"
//         ]
//     },
//     {name : "Product Type 2", price: "₹ 200 / sqft", img:"pricecard-2",discription: "A budget package with no compromise on quality that includes all construction essentials", points:
//         ["Trusted brand steel & cement",
//          "Standard floor tiles upto ₹50/sqft",
//          "Standard flush doors and window finish",
//          "Tractor Emulsion finish",
//          "Essential kitchen & bathroom fittings"
//         ]
//     },
//     {name : "Product Type 3", price: "₹ 300 / sqft", img:"pricecard-3", discription: "A budget package with no compromise on quality that includes all construction essentials", points:
//         ["Trusted brand steel & cement",
//          "Standard floor tiles upto ₹50/sqft",
//          "Standard flush doors and window finish",
//          "Tractor Emulsion finish",
//          "Essential kitchen & bathroom fittings"
//         ]
//     },
//   ];
  const content = premiumContent;
//   const content = tab ? luxuryContent : premiumContent;

  return (<>
    <section className='py-16 bg-bg-brown' id='pricing'>
    
      <div className='sm:container mx-auto px-4'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <Marquee quotes={"our pricing"} color='' />
            <div className='pt-8'></div>
            <Heading text={"Choose Your Ideal Package"} classes={""} />
            <p className="max-w-2xl pb-8 text-center text-lg leading-8">Choose the Package that works best You</p>
        </div>

        {/* <div className='my-10 flex justify-between sm:justify-center items-center gap-5 xs:gap-10'>
            <div className='text-xl xs:text-3xl w-[100px] text-wrap font-semibold text-white' onClick={()=>setTab(()=>false)}>Premium Packages</div>
            <ToggleBtn parentState={tab} setparentState={setTab} icon1="gold" icon2="diamond" />
            <div className='text-xl xs:text-3xl w-[100px] text-wrap font-semibold text-white' onClick={()=>setTab(()=>true)}>Luxury Packages</div>
        </div> */}
      </div>

      <div className='sm:container mx-auto pt-8 px-4'>
        <div className='grid xl:grid-cols-3 gap-8'>
            { 
            content.map(({name, discription, points, price, img}, i)=>(
                <div key={price} aria-label={`${tab} ${name}`}
                    className={`rounded-3xl w-full grid grid-cols-2 gap-5 justify-between xl:block bg-white p-8 xl:p-10 border-2 ${i==1 ? "border-a-royalsafforn shadow-none!" : "border-gray-300"} hover:border-a-green duration-300`}
                    // style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}    
                >
                    <div className=''>
                        <div className="flex items-center justify-between gap-x-4">
                            <h2 id="product1" className="text-xl font-semibold leading-8 bg-a-royalsafforn rounded-full px-5 py-2">{name}</h2>
                        </div>
                        <p className="mt-6 xl:mt-10 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight ">{price}</span>
                        </p>
                        <p className="mt-4 xl:mb text-sm leading-6 ">{discription}</p>
                        <Link to="/contact" aria-describedby="product1"
                            className="border border-gray-300 mt-6 block rounded-xl py-2 px-3 text-center text-sm font-semibold leading-6 text-a-royalsafforn hover:bg-gray-50">
                            Contact Now
                        </Link>
                    </div>
                    
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6  xl:mt-10">
                    {points.map((point, i)=>(
                        <li key={i} className="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                            </svg>
                            {point}
                        </li>
                    ))}
                    </ul>
                </div>
              )
            )
            }
        </div>

        <div className='pt-10 lg:pt-16 text-center'>
           <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
        </div>

      </div>

    </section>
  </>)
}

export default Pricing