import React from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import './Banner.css';
import slide1 from '../../../img/banner-bg.png'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={slide1}
                        alt="First slide"
                    />
                    <Row>
                        <Carousel.Caption className="">
                            <Col sm={5}>
                                <h5>Sweet and Spicy Peparoni</h5>
                                <div>
                                    <p>100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                                    <Button variant="warning">ADD TO CART</Button>
                                </div>
                            </Col>
                        </Carousel.Caption>
                        <Col sm={7}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={slide1}
                        alt="First slide"
                    />
                    <Row>
                        <Carousel.Caption className="">
                            <Col sm={5}>
                                <h5>Sweet and Spicy Peparoni</h5>
                                <div>
                                    <p>100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                                    <Button variant="warning">ADD TO CART</Button>
                                </div>
                            </Col>
                        </Carousel.Caption>
                        <Col sm={7}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={slide1}
                        alt="First slide"
                    />
                    <Row>
                        <Carousel.Caption className="">
                            <Col sm={5}>
                                <h5>Sweet and Spicy Peparoni</h5>
                                <div>
                                    <p>100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                                    <Button variant="warning">ADD TO CART</Button>
                                </div>
                            </Col>
                        </Carousel.Caption>
                        <Col sm={7}></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;