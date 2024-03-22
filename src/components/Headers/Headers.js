import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import SearchBox from './SearchBox';

const Headers = () => {
    return (
        <div className=' my-3 bg-slate-100 text-slate-900 flex justify-between items-center container mx-auto border-2 p-1'>

            
            <Logo></Logo>
            <Nav></Nav>
            <SearchBox></SearchBox>
        </div>
    );
};

export default Headers;