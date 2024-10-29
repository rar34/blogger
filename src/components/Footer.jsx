import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-black text-white flex flex-col md:flex-row space-y-4 py-6 items-center justify-around'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl'>Blogger</h1>
            <p>Copyright: all right reserves of Blogger</p>
            <div className='flex gap-2 text-2xl'>
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaInstagramSquare />
            </div>
        </div>
    );
};

export default Footer;