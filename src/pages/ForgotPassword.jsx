import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [forgotPassword, setForgotPassword] = useState('');
  const history = useNavigate();

  const forgotPasswordChange = (e) => {
    setForgotPassword(e.target.value);
  };

  const forgotPasswordSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/auth/forget_password',
      {
        email: forgotPassword,
      }
    );

    const resData = res.data;
    console.log(resData);
    setForgotPassword('');
    history('/checkOTP', { replace: true });
  };

  return (
    <>
      <h1 className='mb-12 text-4xl font-bold text-center text-gray-100 lg:text-5xl font-rubik mt-28 md:mt-40 lg:mt-48 lg:mb-20'>
        Forgot Password
      </h1>
      <div className='container mb-10 font-rubik md:mb-28'>
        <div className='max-w-lg px-10 py-10 mx-auto shadow-lg bg-secondary rounded-xl'>
          <form onSubmit={forgotPasswordSubmitHandler}>
            <div className='mb-6 md:mb-9'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Email</label>
              </h6>
              <input
                type='email'
                required
                name='email'
                value={forgotPassword}
                onChange={forgotPasswordChange}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <button
              type='submit'
              className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            >
              Get OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
