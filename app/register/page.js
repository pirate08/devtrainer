'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  // --Logic for the password to show and hide--
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  // --Logic for the form to handle the input--
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));

    // Clear error while user types confirmPassword
    if (name === 'confirmPassword') {
      setError('');
    }
  };

  // --Logic for the form to handle the submit--
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.confirmPassword) {
      setError('');
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    // Send form data first (e.g. to API or log)
    console.log('Form submitted:', data);

    // Show toast
    toast.success('Form submitted successfully!');

    // Reset form after handling submission
    setData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='container flex justify-center mt-10'>
      {/* --Image-- */}
      <Image
        src='/coding.jpg'
        alt='Authentication Image'
        width={500}
        height={500}
        className='w-1/4 h-full rounded-l-lg'
      />
      {/* --Form Section-- */}
      <div className='flex flex-col justify-center items-center w-1/3 bg-white rounded-r-lg shadow-lg py-3'>
        <h6 className='text-sm text-black font-body mb-1'>
          Join <span className='text-blue-400'>For Free</span>
        </h6>
        <h1 className='text-3xl font-bold text-black font-body mb-4'>
          Create <span className='text-green-600'>New Account</span>
        </h1>
        <form
          className='w-full px-6 font-body text-gray-700'
          onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className='mb-4'>
            <label
              className='block text-black font-bold mb-2 cursor-pointer'
              htmlFor='username'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={data.username}
              onChange={handleChange}
              name='username'
              className='w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 cursor-pointer'
              placeholder='Enter your username'
              required
            />
          </div>
          {/* Email Field */}
          <div className='mb-4'>
            <label
              className='block text-black font-bold mb-2 cursor-pointer'
              htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={data.email}
              onChange={handleChange}
              name='email'
              className='w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 cursor-pointer'
              placeholder='Enter your email'
              required
            />
          </div>
          {/* Password Field */}
          <div className='mb-4'>
            <label
              className='block text-black font-bold mb-2 cursor-pointer'
              htmlFor='password'>
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={data.password}
                onChange={handleChange}
                name='password'
                className='w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 cursor-pointer'
                placeholder='Enter your password'
                required
              />
              <span
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}>
                {/* --Logic for the password to show and hide-- */}
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
          {/* Confirm Password Field */}
          <div className='mb-4'>
            <label
              className='block text-black font-bold mb-2 cursor-pointer'
              htmlFor='confirmpassword'>
              Confirm Password
            </label>
            <div className='relative'>
              <input
                type={confirmShowPassword ? 'text' : 'password'}
                id='confirmpassword'
                value={data.confirmPassword}
                onChange={handleChange}
                name='confirmPassword'
                className='w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 cursor-pointer'
                placeholder='Enter your confirm password'
                required
              />
              <span
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer'
                onClick={() => setConfirmShowPassword(!confirmShowPassword)}>
                {/* --Logic for the password to show and hide-- */}
                {confirmShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            {/* --Error Message-- */}
            {error && data.confirmPassword && (
              <p className='text-red-500 text-sm mt-1'>{error}</p>
            )}
          </div>
          {/* Submit Button */}
          <div className='mt-6'>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-700 transition duration-300 cursor-pointer'>
              Create Account
            </button>
          </div>
          {/* --Redirect to Login Page-- */}
          <div className='text-right mt-2 text-xs'>
            Already a member?{' '}
            <Link href='/login' className='text-green-600 underline'>
              Login
            </Link>
          </div>
        </form>
      </div>
      {/* Toast Container */}
      <div className='absolute top-0 right-0 mt-4 mr-4'>
        {/* --Toastify Container-- */}
        {/* This is where the toast notifications will be displayed */}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default RegisterPage;
