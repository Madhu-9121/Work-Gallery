import React from 'react';
import form from '../assests/FORM_09.svg';
import R1 from '../assests/Rectangle 3463401.svg';
import R2 from '../assests/Rectangle 3463405.svg';

const Body = () => {
  return (
    <div>
      <style>
        {`
          @keyframes tilt-up {
            0% {
              transform: translateY(-10px) ;
            }
            50% {
              transform: translateY(10px) ;
            }
            100% {
              transform: translateY(-10px) ;
            }
          }

          @keyframes tilt-down {
            0% {
              transform: translateY(10px) ;
            }
            50% {
              transform: translateY(-10px) ;
            }
            100% {
              transform: translateY(10px) ;
            }
          }

          .animate-tilt-up {
            animation: tilt-up 4s infinite;
          }

          .animate-tilt-down {
            animation: tilt-down 4s infinite;
          }
          .max-w-off {
            max-width: 100%;
          }
        `}
      </style>
      <div className='md:w-50 lg:flex lg:flex-row-reverse lg:justify-evenly  mt-52'>
        <div className='parent  relative'> 
          <img src={form} alt="foam"/> 
          <div className='innerimg'>
            <img className='w-auto max-w-off h-auto absolute sm:w-auto sm:h-auto z-10 bottom-10 left-4 animate-tilt-up animate-ping' src={R1} alt="" />
            <img className='w-auto max-w-off h-auto absolute sm:w-auto sm:h-auto top-1 right-9 animate-tilt-down animate-ping' src={R2} alt="" />   
          </div>
        </div>
        <div>
        <h1 className='font-sans text-5xl sm:text-7xl font-bold leading-tight'>Elevate Your</h1>
<h1 className='font-sans text-5xl sm:text-7xl font-bold gradient-text text-blue-900 leading-tight'>Professional</h1>
<h1 className='font-sans text-5xl lg:text-7xl font-bold leading-tight'>Journey</h1>
<p className='font-Satoshi text-lg font-normal leading-normal mt-5 mb-9'>Making Your Work Visible to a Community<br/> That Cares and Connects.</p>
<button className='w-72 h-14 bg-blue-500 text-white rounded-full font-Satoshi text-20 font-medium leading-27 tracking-normal text-center'>Get Invitation Code</button>
</div>
      </div>
    </div>
  );
};

export default Body;
