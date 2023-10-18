import React from 'react'

const Expertguide = () => {
  return (
    <>
      <div className='bg-[#165050] lg:flex '>

             <div className='lg:relative'>
                    <div className='lg:w-[47%] w-fit sm:m-auto lg:ml-10 hidden sm:block ' id='pic'>
                        <img className=' lg:w-[85%] relative  rounded-3xl lg:h-[650px] w-48 lg:mt-[-2rem] z-10' src="./images/empathy-lg.28d414d4.jpg" alt="error" />
                    </div>

                    <div className='w-[95%] m-auto lg:hidden pt-9 sm:hidden block' id='pic-mbl'>
                      <img className='rounded-3xl m-auto' style={{ height: '260px', width:'75%' }} src="./images/empathy-lg.28d414d4.jpg" alt="error" />
                    </div>
                   
           <div className=' mt-[-380px] hidden sm:block ' id='chart '>
             <img src="./images/chart.svg" alt="error" />
           </div>
            </div>

            <div className='lg:w-[500px] pt-5 lg:absolute lg:ml-[50%] text-center lg:text-left'>
                    <h3 className="text-gray-300 font-custom6 lg:text-[1.25em] text-[1em] tracking-[4px] lg:w-[500px] w-[90%] m-auto lg:pt-10 lg:text-left">
                      WE ARE YOUR EXPERT GUIDE
                        </h3>
                        <h1 className="lg:text-[2.25em] text-[2em] text-[#fff] font-custom7 lg:pt-1 pt-3 leading-[1.335] lg:w-[500px] w-[90%] lg:text-left m-auto font-sans">
                        Get Compassionate Guidance From Our Experienced Team
                        </h1>
                        <p className="text-gray-300 lg:text-[1.25em] text-[1.1em] font-custom4 lg:pt-2 pt-3 leading-[1.5] lg:w-[550px] w-[85%] m-auto lg:text-left ">
                        At Bernie Yazzie Consulting, we understand that you may feel distant from your goals and aspirations, but rest assured, we are here to bridge that gap. <br /> <br />
                        Our Native-owned and Native-led team has supported numerous Tribal healthcare facilities through similar struggles, and we bring a judgment-free mindset, aiming only to assist, uplift, and empower you along the way.
                        </p>
                        
            </div>
            <div className='lg:hidden' id='chart '>
                      <img src="./images/chart.svg" alt="error" />
                       </div>
          

      </div>
    </>
  )
}

export default Expertguide
