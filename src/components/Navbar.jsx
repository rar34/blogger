"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname();
    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "All Blogs",
            path: "/allblogs"
        },
    ]

    return (
        <div className='bg-gray-200 py-4'>
            <div className='container mx-auto my-4'>
                <div className='flex justify-between h items-center'>
                    <Link href={"/"}><h2 className='text-5xl font-bold'>BlogAura</h2></Link>
                    <div>
                        {
                            navItems.map(item => 
                                <Link key={item.path} href={item.path} className={`font-semibold text-xl mr-4 hover:shadow-[-7px_7px_0_#000] duration-300 ${pathName === item.path && 'text-orange-600 border-black border-b-2'}`}>{item.title}</Link>
                            )
                        }
                    </div>
                    <button className='px-3 py-2 border font-medium text-xl border-solid border-black shadow-[-7px_7px_0_#000]'>Get started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;