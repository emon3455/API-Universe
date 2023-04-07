import React from 'react';
import { Link } from 'react-router-dom';
import SingleCountry from './SingleCountry';

const Country = ({country}) => {

    const {name,population,region} = country

    const sendCountry=(country)=>{
        
    }

    return (
        <div className="card card-compact bg-base-100 shadow-2xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold">{name.common}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <button  className="p-1 rounded-lg bg-sky-500 text-lg text-white font-semibold"
                ><Link to={`/country/${name.common}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default Country;