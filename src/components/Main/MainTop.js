import React from 'react';
import Blogs from './Blogs';

const MainTop = () => {
    return (
        <div className='grid grid-cols-4 gap-3 p-3 border-red-400 border-2'>
        <Blogs></Blogs>
        <Blogs></Blogs>
        <Blogs></Blogs>
        <Blogs></Blogs>

        </div>
    );
};

export default MainTop;