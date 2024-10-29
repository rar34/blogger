import { blog_data } from '@/assets/assets';
import React from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
    return (
        <div className='container mx-auto my-24'>
            <div className='flex justify-center my-10 gap-6'>
                <button className='bg-black px-4 py-1 rounded-sm text-white'>All</button>
                <button>Technology</button>
                <button>Startup</button>
                <button>Lifestyle</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    blog_data.map(item =>{
                        return <BlogItem key={item.id} image={item.image} title={item.title} description={item.description} />
                    })
                }
            </div>
        </div>
    );
};

export default BlogList;