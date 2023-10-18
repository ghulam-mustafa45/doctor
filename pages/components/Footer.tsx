import React from 'react';

const Footer = () => {
  return (
    <>
     <div className='rounded-full text-gray-500 lg:w-[95%] w-[90%] m-auto border-1 lg:mt-2 lg:mb-4 mb-4'></div>

      <div className='pb-5 lg:flex justify-between m-auto'>        
        <div className=''>
          <div className='font-custom6 flex lg:w-full w-fit m-auto'>
            <div className="flex px-8 lg:!px-10 w-full items-center justify-between  text-gray-500">
              <ul className="flex flex-row list-none p-0">
                <li className="mr-4">About</li>
                <li className="mr-4">Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-400 ml-8 ">For a quote or support, call: (928) 206-6550</p>
          <p className="text-gray-400 ml-8">© 2023 Bernie Yazzie Consulting, LLC, All rights reserved.</p>
        </div>

        <div className='lg:mr-7 lg:pt-0 pt-3'>
          <img className='m-auto w-28' src="./images/footer-logo1.png" alt="error" />
        </div>
      </div>
    </>
  );
};

export default Footer;
