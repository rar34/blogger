import { blog_data } from '@/assets/assets';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {

    const [menu, setMenu] = useState("All");

    return (
        <div className='container mx-auto my-24'>
            <div className='flex justify-center my-10 gap-6'>
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black px-4 py-1 rounded-sm text-white' : ""}>All</button>
                <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-black px-4 py-1 rounded-sm text-white' : ""}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black px-4 py-1 rounded-sm text-white' : ""}>Startup</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black px-4 py-1 rounded-sm text-white' : ""}>Lifestyle</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    blog_data.filter((item) => menu === "All" ? true : item.category === menu).map(item => {
                        return <BlogItem key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                    })
                }
            </div>
        </div>
    );
};

export default BlogList;