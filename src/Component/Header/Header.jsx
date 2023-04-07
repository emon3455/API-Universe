import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
       <header className='bg-black text-white text-xl'>

             <nav className='container mx-auto md:flex justify-between p-2 '>

                <div className="md:w-1/3 flex">

                    <div onClick={()=> setOpen(!open)} className="text-2xl md:hidden mr-2">
                        <span className={`${open ? "block" : "hidden"} `}>
                            <i className="fa-solid fa-bars-staggered"></i>
                        </span>
                        <span className={`${!open ? "block" : "hidden"} `}>
                            <i class="fa-solid fa-xmark"></i>
                        </span>
                    </div>

                    <h2 className='text-3xl '>ApI Universe</h2>

                </div>

                <div className={`md:w-2/3 flex md:flex-row justify-around flex-col ${!open ? "block" :"hidden"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/restCountry">Rest Countrys</Link>
                    <Link to="mealDb">Meal DB</Link>
                    <Link to="sportsDb">Sports DB</Link>
                    <Link to="contact">Contact</Link>
                </div>

            </nav>
       </header>
    );
};

export default Header;