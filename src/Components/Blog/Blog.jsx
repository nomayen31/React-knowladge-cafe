import PropTypes from 'prop-types'
import React from 'react';
import {  FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover,reading_time,author_img,posted_date,author, hashtags, id } = blog;
    // console.log(blog);

    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl mb-2'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div className='flex gap-4'>
                    <span>{reading_time} min read</span>
                    <span onClick={()=>handleAddToBookmark(blog)} className='mt-1'><FaBookmark></FaBookmark></span>
                </div>
            </div>
            <h2 className='text-4xl mt-4 mb-4 leading-relaxed tracking-widest'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""># {hash} .  </a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time, id)} className='text-purple-600 font-bold underline mt-2'>Mark As read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
} 

export default Blog;