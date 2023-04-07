import React from 'react';
import Lottie from "lottie-react";
import homeAnimation from "../../assets/homeAnime.json";

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='text-4xl font-semibold'>Select Your API And Explore!!!</h2>
            <Lottie className=" h-2/3" animationData={homeAnimation} loop={true} />;
        </div>
    );
};

export default Home;