import {
  CodeXml,
  Database,
  GitBranch,
  Zap,
  Wrench
} from "lucide-react"
import { FaPython } from "react-icons/fa"

function Tech() {
  return (
    <div>

      <div className="text-center px-6 py-16 lg:p-20">

        <h1 className="font-bold text-4xl lg:text-5xl">

          Technology

          <span className="bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent"> Stack
          </span>

        </h1>

        <p className="text-gray-600 mt-4 text-base lg:text-lg">
          3 Years of Experience in:
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="rounded-xl shadow-md hover:shadow-2xl duration-300 p-6">

            <div className="flex items-center gap-3 mb-5">

              <CodeXml className='text-white bg-[#796cff]
              rounded p-2 w-12 h-12' />

              <span className='font-bold text-xl'>
                Frontend Development
              </span>

            </div>

            <div className="flex flex-wrap gap-3">

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                React
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                TailwindCSS
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Angular
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                HTML5/CSS3
              </span>

            </div>
          </div>

          <div className="rounded-xl shadow-md hover:shadow-2xl duration-300 p-6">

            <div className="flex items-center gap-3 mb-5">

              <FaPython className='text-white bg-[#796cff]
              rounded p-2 w-12 h-12' />

              <span className='font-bold text-xl'>
               Backend Development
              </span>

            </div>

            <div className="flex flex-wrap gap-3">

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Python
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
               Django
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Node.js
              </span>

            </div>
          </div>

          <div className="rounded-xl shadow-md hover:shadow-2xl duration-300 p-6">

            <div className="flex items-center gap-3 mb-5">

              <Database className='text-white bg-[#796cff]
              rounded p-2 w-12 h-12' />

              <span className='font-bold text-xl'>
               Databases
              </span>

            </div>

            <div className="flex flex-wrap gap-3">

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                PostgreSQL
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                SQLite
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                MongoDB
              </span>
            </div>
          </div>

          <div className="rounded-xl shadow-md hover:shadow-2xl duration-300 p-6">

            <div className="flex items-center gap-3 mb-5">

              <Wrench className='text-white bg-[#796cff]
              rounded p-2 w-12 h-12' />

              <span className='font-bold text-xl'>
               Tools & Version Control
              </span>

            </div>

            <div className="flex flex-wrap gap-3">

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Git
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Github
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Webpack
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Redux
              </span>

            </div>
          </div>

          <div className="rounded-xl shadow-md hover:shadow-2xl duration-300 p-6">

            <div className="flex items-center gap-3 mb-5">

              <Zap className='text-white bg-[#796cff]
              rounded p-2 w-12 h-12' />

              <span className='font-bold text-xl'>
                Integration & Testing
              </span>

            </div>

            <div className="flex flex-wrap gap-3">

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                GraphQL
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                REST APIs
              </span>

              <span className="bg-[#f1f5ff] rounded-full px-4 py-2 text-xs font-semibold text-gray-700">
                Jest
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tech