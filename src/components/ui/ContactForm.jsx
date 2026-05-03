import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const ContactForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className='FormContainer w-[500px] mx-auto my-10 p-5 border-2 border-gray-300 rounded-md shadow-md'>
        <form>
          <h1 className='text-4xl flex justify-center text-gray-600 mb-4'>
            Contact Form
          </h1>

          <input
            type="text"
            placeholder='Name'
            className='border-2 border-gray-300 rounded-md p-2 w-full mb-4'
          />

          <input
            type="email"
            placeholder='Email'
            className='border-2 border-gray-300 rounded-md p-2 w-full mb-4'
          />

          {/* Password Field with Eye Icon */}
          <div className='relative mb-4'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              className='border-2 border-gray-300 rounded-md p-2 w-full pr-10'
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-3 cursor-pointer text-gray-500'
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <textarea
            placeholder='Message'
            className='border-2 border-gray-300 rounded-md p-2 w-full mb-4'
          ></textarea>

          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;