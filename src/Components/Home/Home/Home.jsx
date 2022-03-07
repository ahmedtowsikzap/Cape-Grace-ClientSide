import React from 'react';
import "./Home.css"
import Headers from '../../Shared/Navbar/Headers';
import Topbar from '../../Shared/Topbar/Topbar';
import Slider from '../Carousel/Slider';
import HomewithAbout from '../HomewithAbout/HomewithAbout';
import HomeWithMore from '../HomeWithMore/HomeWithMore';
import Interiors from '../Interiors/Interiors';
import TopNotch from '../TopNotch/TopNotch';
import Discount from '../Discount/Discount';
import CaptionCard from '../CaptionCard/CaptionCard';
import QuestiononHome from '../Question/Question';

const Home = () => {
    return (
        <div>
        <Headers/>
        <TopNotch/>
        <HomeWithMore/>
        <Slider/>
        <HomewithAbout/>
        <div className='dual-tone'>
        <Interiors/>
        </div>
        <Discount/>
        <div className='caption'>
        <CaptionCard/>
        </div>
        <QuestiononHome/>
  
       
        </div>
    );
};

export default Home;