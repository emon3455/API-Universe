import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCountry = ({country}) => {
    const sCountry= useLoaderData();
    const {name,area, capital,flags, independent, population, region} = sCountry[0]
    return (
       
            <div className='mx-auto card shadow-2xl bg-slate-100 text-center p-4 space-y-3 w-full sm:w-3/4 md:w-2/3  lg:w-1/3'>
                <h2 className='text-3xl font-bold'>{name.common}</h2>
                <div className="w-full mx-auto">
                    <img className='w-full' src={flags.png ? flags.png : flags.svg} alt="" />
                </div>
                <div className="text-xl text-left">
                    <p><span className='font-medium'>Independent:</span> {independent ? "Yes" : "NO"}</p>
                    <p><span className='font-medium'>Area:</span> {area}</p>
                    <p><span className='font-medium'>Capital:</span> {capital ? capital[0]: "None"}</p>
                    <p><span className='font-medium'>Population:</span> {population}</p>
                    <p><span className='font-medium'>Region:</span> {region}</p>
                </div>
            </div>
    );
};

export default SingleCountry;