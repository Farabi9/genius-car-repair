import React from 'react';
import Baneer from '../Banner/Baneer';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Baneer></Baneer>
           <Services></Services>
           <Experts></Experts>
        </>
    );
};

export default Home;