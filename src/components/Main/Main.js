import React from 'react';
import MainTop from './MainTop';
import MainSection from './MainSection';

const Main = () => {
    return (
        <div className=' bg-red-100 px-8 mt-4'>
            {/* grid grid-rows-4 grid-flow-col gap-4 */}
           <div>
                <MainTop></MainTop>
                <MainSection></MainSection>
            </div>
        </div>
    );
};

export default Main;