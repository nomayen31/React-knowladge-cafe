import React from 'react';

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-purple-300 p-4 m-4 rounded-xl'>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};

export default BookMark;