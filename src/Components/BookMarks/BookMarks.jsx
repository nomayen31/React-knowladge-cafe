import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks}) => {
    
    return (
        <div className='md:w-1/3 ml-4 mt-2'>
            <h2 className='text-2xl text-center'>BookMarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <BookMark
                key={bookmark.id}
                bookmark={bookmark}
                ></BookMark>)
            }
        </div>
    );
};

export default BookMarks;