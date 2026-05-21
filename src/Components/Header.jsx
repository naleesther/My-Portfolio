import bulb from "../assets/bulb-pic.png";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const titles = [
    "Software Developer",
    "Frontend Developer",
    "Pega System Architect",
    "Cyber Security Enthusiast"
  ];
const [currentTitle, setCurrentTitle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) =>
        prev === titles.length - 1 ? 0 : prev + 1
      );

    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      <div className="bg-gradient-to-r from-[#222864] to-[#501b83] 
      flex flex-col lg:flex-row items-center justify-between
      px-6 py-14 lg:p-8">
        <div className='w-full lg:w-1/2 lg:ml-6 lg:p-20'>

          <div>
            <button className='border border-gray-400 rounded-full shadow 
            px-4 py-2 text-white bg-[#464285] flex items-center gap-2'>

              <span className='text-xs sm:text-sm'>
               Available for Full-Time & Internship Roles
              </span>

            </button>
          </div>

          <div>

            <h1 className='text-white font-bold mt-7
            text-4xl sm:text-5xl lg:text-7xl leading-tight'>ESTHER
             <span className='bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent'> NALENYI   
            </span></h1>
            <h2 className="bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-3xl p-3 font-bold">{titles[currentTitle]}</h2>

            <p className='text-white mt-4
            text-base sm:text-lg lg:text-xl leading-relaxed'>

              Front-end to back-end, bringing ideas to life with: React, Next.js, Angular, TypeScript, Node.js, Python (Django), HTML/CSS, TailwindCss
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-8 w-full'>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className='bg-gradient-to-r from-[#285bfc] to-[#941cfb]
              rounded flex items-center justify-center gap-2
              px-6 py-4'>
                <span className='text-white '>
                  View Resume
                </span>
              </button>
              </a>          

            </div>

          </div>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0'>

          <img
            src={bulb}
            alt='AI-bulb'
            className='w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]
            rounded-xl shadow-lg'
          />

        </div>

      </div>

    </div>
  )
}

export default Header