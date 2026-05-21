import Home from "../assets/Home.png"
import Phone from "../assets/phone.png"
import Task from "../assets/tasks.jpg"
import { CircleCheck } from "lucide-react"

function Success() {
  return (
    <div>
      <div className="px-4 sm:px-8 lg:p-16">

        <h1 className="font-bold pt-10 lg:pt-20 text-3xl sm:text-4xl lg:text-5xl text-center">
          Recent
          <span className="bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent"> Projects
          </span>
        </h1>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 pt-8">

      
          <div className="w-full sm:max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300">
             <a href=" https://radiant-nasturtium-e5e4ad.netlify.app/">
            <div className="relative h-56 sm:h-64">                
              <img src={Home} alt="home designs" className="w-full h-full object-cover" />
            </div>

            <div className="ml-4 mr-4 p-3">
              <h1 className="text-lg sm:text-xl lg:text-2xl pt-3 font-bold">
                Clay-Cast-houses
              </h1>

              <p className="pt-3 text-[#4b5869] text-sm sm:text-base">
                Provides the client with Architectural designs, interiors, 3dimension  views and construction of the project.
              </p>
            </div>
            </a>
          </div>

         
          <div className="w-full sm:max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <a href="https://spiral-web.netlify.app/">
            <img src={Phone} alt="phone" className="w-full h-56 sm:h-64 object-cover" />
            <div className="ml-4 mr-4 p-3">
              <h1 className="text-lg sm:text-xl lg:text-2xl pt-3 font-bold">
                Spiral App
              </h1>

              <p className="pt-3 text-[#4b5869] text-sm sm:text-base">
            Explore a world of spirituality, community, and enlightenment right
            at your fingertips. Elevate your daily devotion with Spiral, the
            mobile app designed to enrich your spiritual journey.              
            </p>
            </div>
            </a>
          </div>

         
          <div className="w-full sm:max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <a href="https://property-management-system-kohl.vercel.app/">
            <img src={Task} alt="tasks" className="w-full h-56 sm:h-64 object-cover" />

            <div className="ml-4 mr-4 p-3">
              <h1 className="text-lg sm:text-xl lg:text-2xl pt-3 font-bold">
                Property Management System
              </h1>

              <p className="pt-3 text-[#4b5869] text-sm sm:text-base">
            Full-stack property management platform built with React and Django REST API. 
            Features property listings, tenant management, and maintenance request tracking.              
            </p>
            </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Success