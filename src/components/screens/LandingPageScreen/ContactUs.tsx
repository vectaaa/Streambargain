import React from 'react';

const ContactUs = () => {
  return (
    <><div className='flex flex-col justify-center items-center text-center mx-auto min-h-screen '>
          <h1 className='text-5xl font-semibold mb-4'>Contact Us</h1>
          <h2 className='text-3xl mb-8'>Our friendly team would love to hear from you.</h2>
          <form className="w-full max-w-[630px] p-3">
              <div className="grid items-center border-b border-purple-800 py-2">
                  <input
                      className="appearance-none bg-transparent border-purple-800 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Full Name"
                      aria-label="Full name" /> </div>
              <div className="grid items-center border-b border-purple-800 py-2">
                  <input
                      className="appearance-none bg-transparent border-purple-800 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Email"
                      aria-label="Full name" />
              </div>
              <div className="grid items-center border-b border-purple-800 py-2">
                  <input
                      className="appearance-none bg-transparent border-purple-800 w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Phone Number"
                      aria-label="Full name" />
              </div>
              <div className="grid items-center border-b border-purple-800 py-2 h-[100px] bg-purple-100 mt-4">
                  <input
                      className="appearance-none bg-transparent border-purple-800 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Message"
                      aria-label="Full name" />
              </div><br />
              <div>
                  <label>
                      <input type='checkbox' className="mr-2 border-purple-600" />
                      <span className='text-purple-400'>You agree to our friendly privacy policy.</span>.
                  </label>
              </div><br />
              <button
                  className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
              >
                  Send Message
              </button>

          </form>

      </div>



</>
  );
}


export default ContactUs;
