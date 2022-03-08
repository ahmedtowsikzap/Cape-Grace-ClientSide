import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { FaElementor, FaPhoneSquareAlt, FaMobile, FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import logo from "../../../images/logo-main.png"

const Footer = () => {
    return (
        <div className="footer">
        <Container className='footer-con p-4'>
            <Row>
               <Col lg={3} md={6} sm={12}>
                   <img src={logo} alt="loggo" height="50px"/>
                   <h3 className="footer-heading"> <span style={{color: '#20B2AA'}}>Cape</span> Grace</h3>
                   <p className="footer-textp">Experiance Trip like never before</p>
                   
                  
               </Col>
               <Col lg={3} md={6} sm={12}>
                   <h3 className="footer-heading">Latest Update</h3>
                   <div className="footer-texth">
                       <h6><FaElementor /> Cape Grace in pictures</h6>  
                   </div>
                   <div className="footer-texth mt-3">
                       <h6><FaElementor /> 10 Things You Should Know</h6>
                   </div>
                   <div className="footer-texth mt-3">
                       <h6><FaElementor /> Terms & Conditions</h6>
                   </div>
                   <div className="footer-texth mt-3">
                       <h6><FaElementor /> Legals</h6>
                   </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
                   <h3 className="footer-heading">Contact</h3>
                   <div className="footer-text">
                       <h6><FaPhoneSquareAlt /> Telephone: +202-775-3266</h6>
                       <h6>contact@capegrace.com</h6>
                       <h6><FaMobile /> Hotline: +202-555-0102</h6>
                   </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
               <h4 className="footer-heading">Social</h4>
                   <small><FaFacebook style={{fontSize: '25px'}}/></small>
                   <small><FaInstagramSquare style={{fontSize: '25px', marginLeft: '15px'}}/></small>
                   <small><FaTwitterSquare style={{fontSize: '25px', marginLeft: '15px'}}/></small>
                   <small> <FaLinkedin style={{fontSize: '25px', marginLeft: '15px'}}/></small>
               </Col>
            </Row>
            <Row>
                <h6 className="footer-content">© Copyright 2022 - Cape Grace. All Rights Reserved  </h6>
            </Row>
        </Container>
    </div>
    );
};

export default Footer;