import React from 'react';
import Headers from '../../Shared/Navbar/Headers';
import Topbar from '../../Shared/Topbar/Topbar';
import HomeWithMore from '../HomeWithMore/HomeWithMore';
import TopNotch from '../TopNotch/TopNotch';

const Home = () => {
    return (
        <div>
        <Headers/>
        <TopNotch/>
        <HomeWithMore/>
        </div>
    );
};

export default Home;