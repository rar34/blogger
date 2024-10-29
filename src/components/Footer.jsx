import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='text-white container mx-auto flex flex-col md:flex-row py-6 items-center justify-between'>
                <h1 className='text-2xl font-bold md:text-3xl lg:text-5xl'>Blogger</h1>
                <p className='text-xl text-gray-200 my-4'>Copyright: all right reserves of Blogger</p>
                <div className='flex gap-4 text-3xl'>
                    <FaFacebookSquare className='cursor-pointer' />
                    <FaTwitterSquare className='cursor-pointer' />
                    <FaInstagramSquare className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Footer;