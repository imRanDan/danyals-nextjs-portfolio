import React from 'react';
import userData from '@/constants/data';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full lg:w-1/2 mx-auto text-center lg:text-left lg:p-20">
        <h1 className="text-4xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Developer.
        </h1>
        <h1 className="text-4xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Creator.
        </h1>
        <h1 className="text-4xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Designer.
        </h1>
      </div>
      {/* Image container */}
      <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
        <div className="w-3/4 mx-auto lg:mx-0">
          <img src={userData.profileUrl} alt="avatar" className="shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me, Danyal!</p>
            </div>
            <div className='flex flex-row'>
        <p>Contact me today!</p>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
