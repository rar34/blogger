import { blog_data } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const BlogItem = ({title, description, category, image}) => {
    return (
        <div className='container mx-auto'>
            <div className='min-h-[470px] border border-black hover:shadow-[-7px_7px_0px_#000]'>
                <Image src={image} width={300} alt='' height={200} className='w-full' />
                <p className='text-sm bg-black text-white ml-5 mt-5 px-1 inline-block'>{category}</p>
                <div className='p-5'>
                    <h2 className='text-lg font-medium text-gray-900 tracking-tight'>{title}</h2>
                    <p className='text-ms text-gray-700 tracking-tight'>{description}</p>
                    <div className=''>
                        <button className='font-semibold mt-3 inline-flex items-center justify-center gap-2 text-lg'>Read more <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;