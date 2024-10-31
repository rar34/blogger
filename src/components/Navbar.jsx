import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-gray-200 py-4'>
            <div className='container mx-auto my-4'>
                <div className='flex justify-between h items-center'>
                    <Link href={"/"}><h2 className='text-5xl font-bold'>BlogAura</h2></Link>
                    <button className='px-3 py-2 border font-medium text-xl border-solid border-black shadow-[-7px_7px_0_#000]'>Get started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;