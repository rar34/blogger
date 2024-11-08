import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (

        <footer className="bg-gray-800 text-white relative pt-12">
      {/* Curve at the top of the footer */}
      <div className="absolute inset-x-0 top-0 overflow-hidden leading-none">
        <svg
          className="relative w-full h-32"  // Adjust the height as needed
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1F2937"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,144C672,149,768,203,864,197.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              This is a sample footer with a beautiful curve effect at the top,
              created using Tailwind CSS and Next.js.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">Links</h3>
            <ul className="text-gray-400 space-y-1">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-6">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>


        // <div className='bg-black'>
        //     <div className='text-white container mx-auto flex flex-col md:flex-row py-6 items-center justify-between'>
        //         <h1 className='text-2xl font-bold md:text-3xl lg:text-5xl'>Blogger</h1>
        //         <p className='text-xl text-gray-200 my-4'>Copyright: all right reserves of Blogger</p>
        //         <div className='flex gap-4 text-3xl'>
        //             <FaFacebookSquare className='cursor-pointer' />
        //             <FaTwitterSquare className='cursor-pointer' />
        //             <FaInstagramSquare className='cursor-pointer' />
        //         </div>
        //     </div>
        // </div>
    );
};

export default Footer;