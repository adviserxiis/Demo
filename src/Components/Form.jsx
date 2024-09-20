import React from 'react'
import form_bg from '../assets/form_bg.png'

function Form() {
  return (
     <div className="bg-white rounded-lg shadow-lg max-w-lg ">
            {/* <h2 className="text-2xl font-bold text-blue-700 mb-6">Start your Free Trial</h2> */}
            <div
        className="w-full h-48 bg-no-repeat rounded-t-lg  bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${form_bg})`,
        clipPath: 'ellipse(120% 100% at 50% 0)' }}
      >
        <h1 className="text-3xl font-bold text-center font-PlayFair">Start Your Free Trial</h1>
        <p className="text-md mt-2 text-center">Start Your Free Trial Today – No Commitment Required.</p>
        <div className="border-t-2 border-white w-12 mt-4"></div>
      </div>

      <div className='p-8 mt-8'>
            <form>
              <div className="mb-8 md:mb-12">
                <input
                  type="text"
                  id="username"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="mb-8 md:mb-12">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="mb-8 md:mb-12">
                <input
                  type="tel"
                  id="phone"
                  placeholder='Phone number'
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>

              <div className="mb-8 md:mb-12">
                <input
                  type="tel"
                  id="company name"
                  placeholder='Company name'
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-950 text-white font-bold py-2 px-4 rounded-md "
              >
                Register
              </button>
            </form>
            </div>
          </div>
  )
}

export default Form