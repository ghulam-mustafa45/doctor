import React from 'react'

const Change = () => {
  return (
    <>
<div className='lg:pt-28 pb-28 w-full bg-gray-100' id='main'>
    <div className='lg:flex lg:w-[90%] m-auto' id='for%'>

    <div className=' lg:ml-28 relative lg:hidden w-[88%] m-auto pt-4 sm:hidden' id='image-collage-mbl'>
                        <div className='lg:w-[350px] w-36'>
                            <img className='' src="./images/p1.png" alt="pic1-error" />
                        </div>
                        <div className='lg:w-[450px] w-40 absolute lg:left-60 lg:top-32 top-24 left-20'>
                            <img className='' src="./images/p2.png" alt="pic1-error" />
                        </div>
                        <div className='lg:w-60 w-32 lg:left-28 left-48 lg:top-[430px] top- absolute'>
                            <img className='' src="./images/p3.png" alt="pic1-error" />
                        </div>
                       
                </div>

                <div className=' lg:ml-28 relative lg:hidden w-[88%] m-auto pt-4 hidden sm:block pb-[10rem]' id='image-collage-tab'>
                    <div className='w-fit m-auto'>
                                <div className='w-52 top-[6rem] left-[6rem] absolute'>
                                    <img className='' src="./images/p1.png" alt="pic1-error" />
                                </div>
                                <div className='w-60 absolute top-4 left-[15rem] '>
                                    <img className='' src="./images/p2.png" alt="pic1-error" />
                                </div>
                                <div className='lg:w-52 w-52 top-[6rem] left-[27rem] absolute'>
                                    <img className='' src="./images/p3.png" alt="pic1-error" />
                                </div>
                    </div>
                </div>

                <div className='lg:w-[36%]  lg:pt-0 pt-[10rem] text-center lg:text-left '>
                        <h2 className="text-[#2a8b8c] font-custom6 lg:text-[1.25em] text-lg tracking-[4px] leading-[1.5] lg:w-fit    w-fit lg:text-left m-auto">
                            THE CHANGE YOU’VE BEEN LOOKING FOR
                        </h2>
                        <h1 className="lg:text-[2.25em] text-[2.0em] pt-3 text-[#000]  font-bold leading-[1.335] lg:w-[98%] w-[85%] m-auto lg:text-left ">
                        Create Thriving Facilities and <br /> Healthy Communities
                        </h1>
                        <p className="text-[#4d595a] lg:text-[1.25em] text-[1.1em] font-custom4 pt-4 leading-[1.5] lg:text-left lg:w-auto w-[85%]  m-auto">
                            In your journey towards success, we believe in empowering healthcare leaders like you. Through our expertise and guidance, we help create empowered leadership, identify weaknesses and threats, fix broken processes, reduce turnover, improve communication, and access effective training.  <br />
                            Together, we'll unlock the full potential of your facility and create a thriving environment that fosters excellence and serves your community with quality healthcare.
                        </p>
                            <div className='lg:text-left '>
                            <button className="bg-[#2a8b8c] text-[1.1em] text-white  px-4 py-3 rounded-md mt-3 shadow-md shadow-gray-400 font-bold ">Unlock My Full Potential</button>
                            </div>
                            <img className='lg:hidden m-auto pt-[2.2em] absolute left-[20%] justify-center' src="./images/sign1.svg" alt="error" />
                        </div>
                        


                <div className=' lg:ml-28 relative hidden lg:block sm:hidden' id='image-collage'>
                        <div className='lg:w-[350px] w-36'>
                            <img className='' src="./images/p1.png" alt="pic1-error" />
                        </div>
                        <div className='lg:w-[450px] w-40 absolute lg:left-60 lg:top-32 top-16 left-20'>
                            <img className='' src="./images/p2.png" alt="pic1-error" />
                        </div>
                        <div className='lg:w-60 w-32 lg:left-28 left-48 lg:top-[430px] top- absolute'>
                            <img className='' src="./images/p3.png" alt="pic1-error" />
                        </div>
                        <img className=' m-auto lg:top-[720px]  absolute right-52' src="./images/sign1.svg" alt="error" />
                </div>
           
     </div>
    
 </div>
    </>
  )
}

export default Change
