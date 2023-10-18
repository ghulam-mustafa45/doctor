


import React from 'react';

const Docdiv = () => {
  return (
    <div className="relative lg:flex" >
    <div className="lg:w-full lg:pl-14 pl-6 lg:pt-36 pt-24 relative z-10 pb-10" id="left">
      <div > 
          <img
          src="./images/doc12.jpg"
          alt="doctor-pic"
          className="hidden sm:block w-full h-full object-cover absolute inset-0 "
          />
    </div>

  <div className="relative text-white lg:pb-28">
    <h3 className="text-[#2a8b8c] font-custom6 lg:text-[1.2em] text-base tracking-[4px] lg:w-[600px] w-80 font-sans">
      NATIVE-OWNED AND NATIVE-LED
    </h3>
    <h1 className="lg:text-[3.313em] text-[2.1em] text-[#000] font-custom7 pt-3 leading-[1.2] lg:w-[500px] w-72 ">
      Unlock your Tribal Healthcare Facility’s Full Potential
    </h1>
    <p className="text-[#4d595a] text-[1.25em] font-custom4 pt-3 leading-[1.5] lg:w-[660px] w-[330px]">
      We are here to help empower healthcare leaders to drive excellence, overcome challenges, and create thriving communities with our proprietary expert-driven consulting and SaaS solutions.
    </p>
    <button className="bg-[#2a8b8c] font-bold text-[1.1em] text-white px-4 py-2 rounded-md mt-3 shadow-md shadow-slate-300">
      Get Started
    </button>
  </div>
</div>
    
      <div id="doctor" className="lg:hidden sm:hidden">
      <img className="w-full h-[500px] object-cover mt-[-320px]" src="./images/hero-doctor.jpg" alt="doctor-pic" />
    </div>
       
  
  </div>  
  );
};

export default Docdiv;


