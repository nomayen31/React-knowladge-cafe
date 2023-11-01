/* eslint-disable react/prop-types */
import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks,readingTime}) => {
    
    return (
        <div className='md:w-1/3 ml-4 mt-2'>
            <div className='bg-pink-500 p-4 text-center text-white'>
                <h3 className='text-4xl'> Reading time: {readingTime} </h3>
            </div>
            <h2 className='text-2xl text-center'>BookMarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, idx) => <BookMark
                key={idx}
                bookmark={bookmark}
                ></BookMark>)
            }
        </div>
    );
};

export default BookMarks;