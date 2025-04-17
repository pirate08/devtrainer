import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaWpforms } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';

const NavItems = [
  { id: 1, icon: <FaHome />, name: 'Home', link: '/' },
  { id: 2, icon: <IoMdLogIn />, name: 'Login', link: '/login' },
  { id: 3, icon: <FaWpforms />, name: 'Register', link: '/register' },
];

const Navbar = () => {
  return (
    <div className='bg-black text-white fixed top-0 left-0 h-18 w-full flex justify-between items-center pr-10 pl-2 shadow-md z-50'>
      {/* --Logo-- */}
      <div>
        <Image
          src='/DevTrainerLogo2.png'
          width={220}
          height={50}
          alt='Logo..'
        />
      </div>
      {/* --Menu-- */}
      <div className='flex gap-4'>
        {NavItems.map((item) => (
          <div
            key={item.id}
            className='flex items-center gap-2 hover:text-gray-400'>
            <span>{item.icon}</span>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
