"use client"
import { blog_data } from '@/assets/assets';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



const Blog = ({ params }) => {
    const unwrappedParams = React.use(params);
    const newId = unwrappedParams.id;
    const singleBlog = blog_data.find(item => item.id == newId);

    const { title, image, description, date, author, author_img } = singleBlog || {};

    return (
        <div>
            <Navbar />
            <div className='container mx-auto my-14'>
                <div className='flex space-y-6 items-center flex-col'>
                    <h2 className='text-5xl font-semibold'>{title}</h2>
                    <Image src={author_img} height={150} width={150} alt='' className='w-[150px] rounded-full' />
                    <p className='text-xl'>By: {author}</p>
                    <Image src={image} height={450} width={600} alt='' />
                </div>
                <p>{description}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nihil quas quaerat distinctio, tempora facilis necessitatibus voluptates ducimus harum modi perferendis eos incidunt iusto quam quia reiciendis enim optio id!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ex alias fugiat accusantium, sed omnis explicabo ducimus veritatis culpa, dicta consequuntur atque odit facere possimus ut rerum laudantium animi in officiis deleniti provident fugit ipsum itaque? Ducimus quisquam reiciendis dolores ipsa aut rem, atque dolor in debitis facere voluptatum ipsum labore, provident possimus porro enim beatae repudiandae cumque fugiat? Laudantium atque necessitatibus rerum velit ratione nesciunt tempora numquam eum, quibusdam labore unde ipsam fuga libero expedita itaque, voluptas molestiae laboriosam suscipit mollitia placeat ex! Placeat fuga totam amet illo itaque expedita id voluptas asperiores reprehenderit eius blanditiis, in, a quo vitae laborum, eaque nihil ipsum cumque magni. Assumenda consectetur expedita qui, laborum laboriosam quibusdam labore distinctio vitae harum aut! Soluta, nisi sapiente sint aperiam officia sit exercitationem, assumenda doloremque consequuntur excepturi error eos nihil ipsa accusantium, laboriosam ullam? Quos explicabo architecto ipsum officiis, repellat, voluptate quae fugit, sed delectus quo porro excepturi fugiat voluptates sequi velit nihil nisi labore. Illum necessitatibus magni dolores et, tempore voluptate temporibus odio debitis hic eveniet corporis quis, dignissimos facere nisi laudantium quos commodi labore veritatis obcaecati! Optio quis quisquam aliquid tempore necessitatibus maiores, non, exercitationem alias quos laboriosam nam soluta ipsum commodi. Obcaecati, libero?</p>

                <div className='my-24'>
                    <h2 className='font-semibold my-4'>Share this article with </h2>
                    <div className='flex gap-4 text-xl'>
                        <FaFacebook className='cursor-pointer' />
                        <FaTwitter className='cursor-pointer' />
                        <FaInstagram className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;