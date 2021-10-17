import React from 'react';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import Breakfast from './OurMenu/Breakfast/Breakfast';
import OurMenu from './OurMenu/OurMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <FreeDelivery></FreeDelivery> */}
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;