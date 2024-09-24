import React from 'react'
import form_bg from '../assets/form_bg.png'

function Form() {
  return (
     <div className="bg-white rounded-lg shadow-lg max-w-4xl  ">
            {/* <h2 className="text-2xl font-bold text-blue-700 mb-6">Start your Free Trial</h2> */}
            <div
        className="w-full py-4 bg-no-repeat rounded-t-lg  bg-cover bg-center flex flex-col items-center justify-center md:px-4 p-2"
      >
        <h1 className="text-3xl font-semibold text-center font-Poppins">Get in Touch for a Free Consultation or Quote for office shifting</h1>
      </div>

      <div className='p-8 '>
            <form>
              <div className="mb-8 ">
                <input
                  type="text"
                  id="username"
                  placeholder="Name"
                  className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="mb-8 ">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="mb-8 ">
                <input
                  type="tel"
                  id="phone"
                  placeholder='Phone number'
                  className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>

              <div className="mb-8 ">
                <input
                  type="tel"
                  id="company name"
                  placeholder='Company name'
                  className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0181DD] text-white font-bold py-2 px-4 rounded-md "
              >
                Register
              </button>
            </form>
            </div>
          </div>
  )
}

export default Form