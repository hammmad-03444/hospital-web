// Footer.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">MEDICARE</h2>
          <p>Leading the Way in Medical Excellence, Trusted Care.</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2">
            <li><a href="#Appointment" className="hover:text-blue-300">Appointment</a></li>
            <li><a href="#Doctors" className="hover:text-blue-300">Doctors</a></li>
            <li><a href="#Services" className="hover:text-blue-300">Services</a></li>
            <li><a href="#News" className="hover:text-blue-300">News</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>Call: (237) 681-812-255</li>
            <li>Email: fildineeso@gmail.com</li>
            <li>Address: 0123 Some place, Some country</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <div className="flex items-center border-b border-gray-300 pb-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent w-full focus:outline-none text-sm placeholder-gray-300"
            />
            <FontAwesomeIcon icon={faPaperPlane} className="text-blue-400 ml-2 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-400 mt-8"></div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:text-lg mt-4 space-y-4 lg:space-y-0">
        <p>© 2021 Hospital&apos;s name All Rights Reserved by PNTEC-LTD</p>
        <div className="flex space-x-4 lg:text-2xl">
          <a href="#" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
