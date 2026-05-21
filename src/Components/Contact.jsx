import { Mail, MapPin, Phone, Send } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

function Contact() {
  return (
    <div className="bg-[#f0f6fe] pt-10 px-4 sm:px-8 lg:px-16">

      <div className="text-center">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
          Get
          <span className="bg-gradient-to-r from-[#5ca0ff] to-[#ad86ff] bg-clip-text text-transparent"> In Touch
          </span>
        </h1>

        <p className="text-base sm:text-lg p-4 text-gray-600">
Want to discuss potential opportunities or collaboration? Feel free to reach out through my WhatsApp or Email        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
        <div className="p-4 sm:p-8">

          <h1 className="text-xl sm:text-2xl font-bold p-4">
            Contact Information
          </h1>

          <div className="w-full sm:w-[430px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl duration-300 bg-white mb-6">
            <div className="flex p-4 items-center">
              <Mail className="text-white bg-[#796cff] rounded p-2 w-10 h-10 sm:w-12 sm:h-12 ml-0 sm:ml-5" />

              <div className="ml-4">
                <h2 className="text-sm sm:text-md font-medium text-[#3f3f3f]">Email</h2>
                <a href="esthernalenyi@gmail.com" className="text-blue-600 text-sm sm:text-md">
                  esthernalenyi@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[430px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl duration-300 bg-white mb-6">
            <div className="flex p-4 items-center">
              <Phone className="text-white bg-[#796cff] rounded p-2 w-10 h-10 sm:w-12 sm:h-12 ml-0 sm:ml-5" />

              <div className="ml-4">
                <h2 className="text-sm sm:text-md font-medium text-[#3f3f3f]">
                  Let's Talk
                </h2>
                <a className="text-[#3f3f3f] text-sm sm:text-md">
                  +254740421847
                </a>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[430px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl duration-300 bg-white mb-6">
            <div className="flex p-4 items-center">
              <MapPin className="text-white bg-[#796cff] rounded p-2 w-10 h-10 sm:w-12 sm:h-12 ml-0 sm:ml-5" />

              <div className="ml-4">
                <h2 className="text-sm sm:text-md font-medium text-[#3f3f3f]">
                  Location
                </h2>
                <a className="text-[#3f3f3f] text-sm sm:text-md">
                  Nairobi,Kenya
                </a>
              </div>
            </div>
          </div>

           <div className="w-full sm:w-[430px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl duration-300 bg-white mb-6">
            <div className="flex p-4 items-center">
              <FaLinkedin className="text-white bg-[#796cff] rounded p-2 w-10 h-10 sm:w-12 sm:h-12 ml-0 sm:ml-5" />
             
              <div className="ml-4">
                <h2 className="text-sm sm:text-md font-medium text-[#3f3f3f]">
                  Esther Nalenyi
                </h2>                
              </div>
            </div>
        </div>
        </div>

        
        <div className="w-full flex justify-center p-4 sm:p-6">

          <div className="bg-white rounded-[30px] p-6 sm:p-10 w-full max-w-[520px]">

            <h1 className="text-xl sm:text-2xl font-bold p-4">
              Send me a message
            </h1>

            <form className="space-y-5">
              <div>
                <label className="block text-sm sm:text-md font-medium text-[#3f3f3f]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

             
              <div>
                <label className="block text-sm sm:text-md font-medium text-[#3f3f3f]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

             
              <div>
                <label className="block text-sm sm:text-md font-medium text-[#3f3f3f]">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full border border-gray-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

             
              <div>
                <label className="block text-sm sm:text-md font-medium text-[#3f3f3f]">
                  Message
                </label>

                <textarea
                  rows="3"
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none resize-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg sm:text-2xl font-semibold py-3 sm:py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.01] transition"
              >
                Send Message
                <Send size={20} />
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact