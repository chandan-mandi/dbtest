import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './FreeDelivery.css';
import stayhome from '../../../img/stay_home.png';
import homeDelivery from '../../../img/home_01_delivery.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faShippingFast, faUtensils } from '@fortawesome/free-solid-svg-icons';

const FreeDelivery = () => {
    return (
        
            <div className="delivery-section">
                
                
                <div className="py-5 ">
                <Row>
                    <Col md={6}>
                    <img className="img-fluid" src={homeDelivery} alt="" />
                    </Col>
                    <Col md={6} className="px-3">
                    <img src={stayhome} alt="" />
                        <h2>Free delivery 7 days a week</h2>
                        <div className="delivery-small-flex d-flex">
                            <div className="del-icon">
                            <FontAwesomeIcon icon={faHamburger} />
                            </div>
                            <div className="del-icon-text">
                                <h5>Choose Food</h5>
                                <p>Sesame snaps tootsie roll dessert candy canes apple pie marzipan topping toffee croissant.</p>
                            </div>
                        </div>
                        <div className="del-inline"></div>
                        <div className="delivery-small-flex d-flex">
                            <div className="del-icon">
                            <FontAwesomeIcon icon={faShippingFast} />
                            </div>
                            <div className="del-icon-text">
                                <h5>Delivery or Takeaway</h5>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                            </div>
                        </div>
                        <div className="del-inline"></div>
                        <div className="delivery-small-flex d-flex">
                            <div className="del-icon">
                            <FontAwesomeIcon icon={faUtensils} />
                            </div>
                            <div className="del-icon-text">
                                <h5>Enjoy Food</h5>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </div>
        
    );
};

export default FreeDelivery;