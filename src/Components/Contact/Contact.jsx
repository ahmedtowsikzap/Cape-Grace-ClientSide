import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link as a, Link } from 'react-router-dom';
import Headers from '../Shared/Navbar/Headers';
import './Contact.css';
import clo from '../../images/contact.jpg';
import { FaLinkedin } from 'react-icons/fa';
import Footer from '../Shared/Footer/Footer';
import { Alert } from 'bootstrap';

const Contact = () => {
    const [fromData, setFromData] = useState({});

    const handleOnSubmit = e =>{
        alert('Our operator will contact yiu shortly')
        e.preventDefault();
    }
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...fromData };
        newLoginData[field] = value;
        setFromData(newLoginData);
    }
    return (
        <>
            <Headers></Headers>
            <div className='contact-container'>
                <h2 style={{ color: '#323232', var: '--poppins-font' }}>Contact</h2>
                <Link to="/home"><a className='btn btn-outline-warning btn-rounded my-2 px-3'>← Go Back</a> </Link>
                
            </div>
            <Container className='p-5'>
                <Row>
                    <Col lg={7} sm={12}>
                        <Form onSubmit={handleOnSubmit} className='contact-from'>
                            <Row>
                                <Col>
                                    <Form.Control type="text" required onBlur={handleOnBlur} placeholder="Your Name" />
                                </Col>
                                <Col>
                                    <Form.Control type="number" required onBlur={handleOnBlur} placeholder="Your Number" />
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col>
                                    <Form.Control type="email" required onBlur={handleOnBlur} placeholder="Enter Email" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" required onBlur={handleOnBlur} placeholder="Subject" />
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col>
                                    <Form.Control as="textarea" required onBlur={handleOnBlur} placeholder='Your Massage' rows={8} />
                                </Col>
                            </Row>
                            <Form.Check className='mt-4' label="Accept Terms and Conditions" />
                            <Row className='p-5'>
                                <Col>
                                    <button style={{ padding: '15px', borderRadius: '10px', fontSize: '16px' }} className="btn btn-outline-danger btn-rounded my-3 px-5" type="submit">Send Your Massege Now</button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={5} sm={12}>
                        <img src={clo} className='img-fluid' alt='Responsive image' />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Contact;