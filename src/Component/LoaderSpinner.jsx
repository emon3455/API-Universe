import React from 'react';


const LoaderSpinner = () => {

    return (
        <div className='flex justify-center items-center h-screen'>
           <progress className="progress w-72"></progress>
        </div>
    );
};

export default LoaderSpinner;