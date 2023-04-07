import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import LoaderSpinner from '../LoaderSpinner';

const Main = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            <main className='container mx-auto my-4'>
                {navigation.state === "loading" && <LoaderSpinner></LoaderSpinner>}
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Main;