import React from 'react'

const Howsolution = () => {
  return (
    <>
      <div className='pt-20 bg-gray-100 pb-24 '>
            <div className='w-full text-center m-auto'>
                        <h2 className="text-[#2a8b8c] font-custom6 lg:text-[1.25em] text-lg tracking-[4px] leading-[1.5] ">
                            HOW OUR SOLUTION WORKS
                        </h2>
                        <h1 className="text-[2.25em] pt-3 text-[#000] font-custom7  leading-[1.335] lg:w-[45%] w-[90%] m-auto ">
                            Act Confidently With Data-Driven Expertise and Tangible Results
                        </h1>
                        <p className="text-[#4d595a] text-[1.25em] font-custom4 pt-4 leading-[1.5] lg:w-[65%] w-[90%] m-auto ">
                        At Bernie Yazzie Consulting, we understand the uncertainties and anxieties that come with implementing new solutions. That's why our approach is grounded in the power of data.
                        </p>
                </div>

        <div className='m-auto pt-14 lg:flex  lg:w-[93%] w-fit' id='divs'>

            <div className='text-center bg-white lg:w-1/3 w-[18rem] sm:m-auto rounded-xl py-4 shadow-md mb-6'>
                <img className='w-36 pb-2 m-auto' src="./images/dive.png" alt="error" />
                <h1 className='text-[2em] font-custom6 text-[#000] pt-2 m-auto'>Dive</h1>
                <p className='text-[#4d595a] text-[1.25em] leading-[1.5] font-custom4 w-48 pt-2 m-auto'>in to <b> demystify </b>and analyze the data</p>
            </div>

            <div className='text-center bg-white lg:w-1/3 w-[18rem] sm:m-auto rounded-xl py-4 lg:ml-8 shadow-md mb-6'>
                <img className='w-36 pb-2 m-auto' src="./images/discover.png" alt="error" />
                <h1 className='text-[2em] font-custom6 text-[#000] pt-2 m-auto'>Discover</h1>
                <p className='text-[#4d595a] text-[1.25em] leading-[1.5] font-custom4 w-52 pt-2 m-auto'>and <b> quantify </b> any potential vulnerabilities</p>
            </div>

            <div className='text-center bg-white lg:w-1/3 w-[18rem] sm:m-auto rounded-xl py-4 lg:ml-8 shadow-md'>
                <img className='w-36 pb-2 m-auto' src="./images/develop.png" alt="error" />
                <h1 className='text-[2em] font-custom6 text-[#000] pt-2 m-auto'>Develop</h1>
                <p className='text-[#4d595a] text-[1.25em] leading-[1.5] font-custom4 w-48 pt-2 m-auto'>a plan of <b> action </b> that empowers leadership</p>
            </div>

            
        </div>
        
      </div>
    </>
  )
}

export default Howsolution
