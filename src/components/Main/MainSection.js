import React from 'react';
import Left from './Left';
import Aside from './Aside';


const MainSection = (props) => {
    const text = {
        t : 'hi'
    }
    console.log(props)  
    return (
        <div className='grid grid-cols-2'>
            <Left></Left>
            
            <Aside></Aside>
        </div>
    );
};

export default MainSection;


