import React from 'react';
import { getImagewebp } from "../../utility/getImage";

const PagenotFound = () => {
  return (
    <>
        <section className="flex flex-col items-center justify-center sm:grid grid-cols-2 min-h-screen place-items-center bg-sky-100 container mx-auto">
            <div className='px-5 h-[300px] sm:h-full'>
                <img src={getImagewebp("404error")} className="object-contain h-full w-full" />
            </div>
            <div className="text-center">
                <h1 className="mt-4 text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-tight text-balance text-black">Page not found</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Go back home</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default PagenotFound;