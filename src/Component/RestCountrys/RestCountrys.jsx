import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const RestCountrys = () => {

    const countries = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            {
                countries.map(country=> <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default RestCountrys;