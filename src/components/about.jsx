import React from 'react';

const About = () => {
  return (
    <div className='flex items-center justify-center h-screen relative'>
      <div className='parent bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-3xl p-9 lg:flex md:w-3/4 absolute top-1/2 transform -translate-y-1/2'>
        <div className='child1 '>
          <p className='font-plus-jakarta text-base font-normal leading-5 text-center'>
            About Workgallery
          </p>
          <h1 className='font-plus-jakarta text-4xl font-bold leading-tight text-left'>
            YOU’RE IN THE RIGHT PLACE
          </h1>
        </div>
        <div>
          <p className='font-satoshi text-base font-medium leading-6 text-left'>
            Work Gallery is a dynamic social media platform designed for professionals worldwide, aiming to elevate your work by connecting you with like-minded individuals. Our platform allows you to seamlessly integrate existing data and upload new content, creating a streamlined profile that showcases your portfolio in a simple yet effective manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
