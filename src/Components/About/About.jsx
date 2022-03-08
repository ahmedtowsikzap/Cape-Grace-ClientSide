import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../Home/Carousel/Slider';
import Footer from '../Shared/Footer/Footer';
import Headers from '../Shared/Navbar/Headers';

const About = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='contact-container'>
                <h2 style={{ color: '#323232', var: '--poppins-font' }}>About Us</h2>
                <a className='link-btn' to="/home">Home</a>/
                <a className='link-btn' to="/about">AboutUs</a>
            </div>
            <Slider></Slider>
            <Container className='p-5'>
                <Row>
                    <h2 style={{color: '#60607a', textAlign: 'center', marginBottom: '50px'}}>Teams</h2>
                    <Col sm={12} lg={3} className='team-member-container'>
                        <div>
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmFnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>jermy Ryan</h2>
                            <p>Director of sales and marketing</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={3}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>Zoe</h2>
                            <p>Director of sales and marketing</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={3}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmFnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>Sarah Jane</h2>
                            <p>Director of purchasing</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={3}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1539025828301-b314ca222fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG1hbmFnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='img-fluid team-img' alt='Responsive image' />
                        </div>
                        <div className='team-member-text'>
                            <h2>Madison Alex</h2>
                            <p>Hotel manager</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;