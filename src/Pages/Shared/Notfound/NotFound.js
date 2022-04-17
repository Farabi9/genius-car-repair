import React from 'react';
import sleeping from '../../../images/sleepy.jpg'
const NotFound = () => {
    return (
        <div className='bg-dark'>
            <h2 className='text-danger text-center bg-dark'>You don't should be here</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;