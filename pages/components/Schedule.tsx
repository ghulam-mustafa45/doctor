import React from 'react'

const Schedule = () => {
  return (
    <>
<div className='  bg-gray-100 '>
       <div className='bg-[#165050] lg:flex lg:w-[95%] m-auto lg:rounded-3xl'>

            <div className='relative'>
                    <div className=' lg:w-[47%] lg:ml-7 lg:pt-24 pt-5' id='pic'>
                        <img className=' w-[80%] lg:w-[80%] sm:w-[45%] lg:pb-1 sm:pb-1 m-auto rounded-3xl h-auto ' src="./images/rounded.png" alt="error" />
                    </div>

                    <div className=' mt-[-580px] hidden lg:block sm:hidden' id='chart '>
                        <img className='' src="./images/bg2.svg" alt="error" />
                    </div>
            </div>

        <div className='lg:w-[550px] lg:pt-28  lg:absolute sm:relative lg:ml-[46%] lg:text-left text-center'>
                    <h3 className="text-gray-300 font-custom6 lg:text-[1.25em] text-[1em] tracking-[4px] lg:w-[400px] w-full lg:text-left lg:pt-0 pt-5 sm:pt-9">
                    DISCOVER WHAT IS POSSIBLE
                        </h3>
                        <h1 className="lg:text-[2.25em] text-[1.9em] text-[#fff] font-custom7 pt-1 leading-[1.335] lg:w-[400px] w-full lg:text-left  ">
                        Schedule Your DataDx
                        </h1>
                        <p className="text-gray-300 lg:text-[1.25em] font-custom4 pt-2 leading-[1.5] lg:w-[590px]  lg:text-left w-[90%] m-auto">
                        It all starts with a discovery session called a DataDx where we can provide conservative financial and data projections that offer a realistic understanding of what can be achieved when our plan is followed. Our objective is to provide you with a solid foundation for decision-making that delivers tangible results in patient care, operational efficiency, and financial stability.
                        </p>
                            <div className='lg:text-left'>
                                <button className="bg-[#2a8b8c] font-bold text-[1.1em] text-white px-4 py-2 rounded-md lg:mt-3 mt-4 lg:mb-1 shadow-md shadow-gray-800 ">Schedule My DataDx</button>
                            </div>
                        </div>
             <div className='lg:hidden  h-12' id='chart-mbl'>
                 <img className='w-full h-full object-cover inset-0' src="./images/bg2.svg" alt="error" />
            </div>
    </div>
           
</div>
    </>
  )
}

export default Schedule
