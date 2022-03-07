import React from 'react';
import Headers from '../../Shared/Navbar/Headers';
import Topbar from '../../Shared/Topbar/Topbar';
import Slider from '../Carousel/Slider';
import HomeWithMore from '../HomeWithMore/HomeWithMore';
import TopNotch from '../TopNotch/TopNotch';

const Home = () => {
    return (
        <div>
        <Headers/>
        <TopNotch/>
        <HomeWithMore/>
        <Slider/>
        </div>
    );
};

export default Home;