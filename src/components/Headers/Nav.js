import React from 'react';

const Nav = () => {
    return (
        <div className='flex font-medium justify-center items-center gap-3 underline'>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    );
};

export default Nav;