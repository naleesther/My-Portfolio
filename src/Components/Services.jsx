// import {
//   Cloud,
//   Brain,
//   Rocket,
//   Shield,
//   Workflow,
//   Code
// } from "lucide-react"

// function Services() {
//   return (
//     <div>
//       <div className='text-center px-6 py-16 lg:p-20'>

//         <h1 className="font-semibold text-4xl lg:text-5xl">

//           Our

//           <span className='bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent'>
//             Services
//           </span>

//         </h1>

//         <p className='text-gray-600 mt-4 text-base lg:text-lg'>

//           Comprehensive digital engineering solutions designed
//           to accelerate your transformation journey

//         </p>

//       </div>
//       <div className='max-w-7xl mx-auto px-6 pb-20'>

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//           <div className="rounded-xl shadow-md hover:shadow-[#009df1]
//           duration-300 p-6">

//             <Cloud className='text-white bg-[#009df1]
//             rounded p-2 w-16 h-16' />

//             <div className="py-4">

//               <h2 className="font-bold text-xl mb-3">
//                 Cloud Engineering
//               </h2>

//               <p className="text-gray-700">
//                 Build scalable, resilient cloud infrastructure with AWS,
//                 Azure, and GCP.
//               </p>

//             </div>
//           </div>
//           <div className="rounded-xl shadow-md hover:shadow-[#c54ae3]
//           duration-300 p-6">

//             <Brain className='text-white bg-[#c54ae3]
//             rounded p-2 w-16 h-16' />

//             <div className="py-4">

//               <h2 className="font-bold text-xl mb-3">
//                 AI Solutions
//               </h2>

//               <p className="text-gray-700">
//                 Harness machine learning and intelligent automation.
//               </p>

//             </div>
//           </div>

//           <div className="rounded-xl shadow-md hover:shadow-[#5669ff]
//           duration-300 p-6">

//             <Workflow className='text-white bg-[#5669ff]
//             rounded p-2 w-16 h-16' />

//             <div className="py-4">

//               <h2 className="font-bold text-xl mb-3">
//                 Process Automation
//               </h2>

//               <p className="text-gray-700">
//                 Streamline operations and improve efficiency.
//               </p>

//             </div>
//           </div>

//           <div className="rounded-xl shadow-md hover:shadow-[#984eff]
//           duration-300 p-6">

//             <Rocket className='text-white bg-[#984eff]
//             rounded p-2 w-16 h-16' />

//             <div className="py-4">

//               <h2 className="font-bold text-xl mb-3">
//                 Product Development
//               </h2>

//               <p className="text-gray-700">
//                 Build innovative products from concept to launch.
//               </p>

//             </div>
//           </div>

//           <div className="rounded-xl shadow-md hover:shadow-[#2659fb]
//           duration-300 p-6">

//             <Shield className='text-white bg-[#2659fb]
//             rounded p-2 w-16 h-16' />

//             <div className="py-4">

//               <h2 className="font-bold text-xl mb-3">
//                 Security & Compliance
//               </h2>

//               <p className="text-gray-700">
//                 Protect your systems with enterprise-grade security.
//               </p>

//             </div>
//           </div>

//           <div className="rounded-xl shadow-md hover:shadow-[#00aee0]
//           duration-300 p-6">

//             <Code className='text-white bg-[#00aee0]
//             rounded p-2 w-16 h-16' />

//             <div className="py-4">

//               <h2 className="font-bold text-xl mb-3">
//                 Modern Software Engineering
//               </h2>

//               <p className="text-gray-700">
//                 Full-stack development with modern technologies.
//               </p>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services
import {
  FaReact,
  FaAngular,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
} from "react-icons/si";

function Services() {
  return(
     <div>
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      <div className="relative z-10 max-w-2xl bg-gradient-to-r from-[#222864] to-[#501b83] border border-white/20 rounded-3xl p-10 text-center shadow-2xl">

        <h1 className="font-bold text-white text-4xl lg:text-5xl"> About 
         <span className="bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent"> Me
          </span>
          </h1>
        <h1 className="font-bold text-white text-xl p-2 lg:text-3xl">
        <span className="bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent">Software Developer
          </span>
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          I’m a highly motivated and ambitious Software Developer with a strong passion for building high-quality, user-friendly digital experiences. I have hands-on experience working with technologies such as JavaScript (with React and Node.js frameworks), HTML/CSS, Python (with Django framework) and Angular. I’ve used these tools to develop responsive web applications and I’m constantly sharpening my skills through real-world projects and continuous learning. I’m driven by curiosity, creativity, and a desire to solve problems through technology. Whether it’s crafting intuitive front-end interfaces or building scalable back-end solutions, I’m eager to grow, embrace new challenges and contribute meaningfully to any team I join.
        </p>

      </div>

      <div className="absolute top-40 left-44 animate-bounce">
        <FaReact className="text-cyan-400 text-6xl" />
      </div>

      <div className="absolute top-40 right-44 animate-pulse">
        <FaJs className="text-yellow-400 text-6xl" />
      </div>

      <div className="absolute bottom-32 left-44 animate-spin-slow">
        <FaAngular className="text-red-500 text-6xl" />
      </div>

      <div className="absolute bottom-20 right-44 animate-bounce">
        <FaPython className="text-blue-400 text-6xl" />
      </div>

      <div className="absolute top-1/2 left-16 animate-pulse">
        <SiTailwindcss className="text-cyan-300 text-6xl" />
      </div>

      <div className="absolute top-1/2 right-20 animate-bounce">
        <SiDjango className="text-green-400 text-6xl" />
      </div>

      <div className="absolute top-10 left-1/2 animate-pulse">
        <FaHtml5 className="text-orange-500 text-6xl" />
      </div>

      <div className="absolute bottom-10 left-1/2 animate-bounce">
        <FaCss3Alt className="text-blue-500 text-6xl" />
      </div>
      </div>
      </div>
  )
}

export default Services
   
