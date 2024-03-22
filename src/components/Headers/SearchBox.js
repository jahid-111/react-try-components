import React from 'react';
import Button from './Button';

const SearchBox = () => {
    return (
        <div className='flex gap-2'>
            <input className=' w-auto p-2 rounded-md' type="text" name="" id="" placeholder='Search...' />
            <Button></Button>
        </div>
    );
};

export default SearchBox;