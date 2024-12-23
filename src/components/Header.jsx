import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto my-4'>
                <div className='my-8 text-center'>
                    <h1 className='text-5xl font-semibold'>Latest Blogs</h1>
                    <p className='max-w-3xl mx-auto font-medium mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nulla explicabo obcaecati? Voluptate, dicta ad, sunt similique soluta hic facilis fuga consectetur tenetur ex quidem?</p>

                    <form className='flex justify-between max-w-[500px] border border-black shadow-[-7px_7px_0_#000] mx-auto mt-10'>
                        <input type="email" placeholder='Your email' className='pl-4 w-full outline-none' />
                        <button className='border-black border-l p-4 active:bg-gray-600 active:text-white'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;