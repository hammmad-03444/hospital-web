// 'use client'
// import React from 'react'
// import Link from 'next/link';

// const Navbar = () => {
  
//   return (
//     < >
//     <div className='flex justify-center z-50 fixed top-0 w-full'> 
//         <div className=' w-[95%] fixed flex justify-between items-center rounded-b-lg px-5 ' style={{ backgroundColor: '#92BDF6' }}> 
//         <div className="flex space-x-4 text-white">
//           <Link href={'/'} className="hover:underline cursor-pointer text-xl">Home</Link>
//           <Link href={'/appointment'} className="hover:underline cursor-pointer text-xl ">Appointment</Link>
//           <Link href={'/service'} className="hover:underline cursor-pointer text-xl">Service</Link>
//         </div>
//         <div style={{ backgroundColor: '#252B61' }} className='pt-4 p-2 mb-4 rounded-b-md '>
//         <div className="text-white font-bold text-2xl " >MEDICARE</div>
//         </div>
//         <div className="flex space-x-4 text-white">
//           <Link href={'/doctors'} className="hover:underline cursor-pointer text-xl">Doctors</Link>
//           <Link href={'/news'} className="hover:underline cursor-pointer text-xl">News</Link>
//           <Link href={'/contact'} className="hover:underline cursor-pointer text-xl">Contact</Link>
//         </div>
//         </div>
//         </div>
        
//       </>
//   )
// }

// export default Navbar



'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className="flex justify-center z-50 fixed top-0 w-full">
        <div
          className="w-[95%] fixed flex justify-between items-center rounded-b-lg px-5"
          style={{ backgroundColor: '#92BDF6' }}
        >
          {/* Left Items (Links) */}
          <div className="hidden md:flex space-x-4 text-white">
            <Link href={'/'} className="hover:underline cursor-pointer text-xl">
              Home
            </Link>
            <Link
              href={'/appointment'}
              className="hover:underline cursor-pointer text-xl"
            >
              Appointment
            </Link>
            <Link
              href={'/service'}
              className="hover:underline cursor-pointer text-xl"
            >
              Service
            </Link>
          </div>

          {/* Center Logo */}
          <div
            style={{ backgroundColor: '#252B61' }}
            className="pt-4 p-2 mb-4 rounded-b-md"
          >
            <div className="text-white font-bold text-2xl">MEDICARE</div>
          </div>

          {/* Right Items (Links) */}
          <div className="hidden md:flex space-x-4 text-white">
            <Link
              href={'/doctors'}
              className="hover:underline cursor-pointer text-xl"
            >
              Doctors
            </Link>
            <Link
              href={'/news'}
              className="hover:underline cursor-pointer text-xl"
            >
              News
            </Link>
            <Link
              href={'/contact'}
              className="hover:underline cursor-pointer text-xl"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu (Small Devices) */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed top-16 left-0 w-full bg-blue-500 text-white flex flex-col items-center space-y-4 py-4 z-40"
          style={{ backgroundColor: '#92BDF6' }}
        >
          <Link
            href={'/'}
            className="hover:underline cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href={'/appointment'}
            className="hover:underline cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          >
            Appointment
          </Link>
          <Link
            href={'/service'}
            className="hover:underline cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          >
            Service
          </Link>
          <Link
            href={'/doctors'}
            className="hover:underline cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          >
            Doctors
          </Link>
          <Link
            href={'/news'}
            className="hover:underline cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link
            href={'/contact'}
            className="hover:underline cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
