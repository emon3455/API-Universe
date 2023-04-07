import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <main className='container mx-auto my-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Main;