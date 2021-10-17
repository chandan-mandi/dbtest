import { faCheckCircle, faGraduationCap, faRupeeSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Shop.css';
import React, { useContext } from 'react';
import { Card, Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { mealContext } from '../../App';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Shop = () => {
    const meals = useContext(mealContext);
    const { isLoading } = useAuth();

    return (
        <div>
            <Container className="mt-5 home-service-section">
                <h2>Most Popular <span>Course</span> <br /> 70% Student Choice</h2>
                <Row>
                    {
                        meals.map(meal =>
                            <Col className="mt-2 p-2" md={3} sm={12}>
                                <Card className="course-card">
                                    <div className="meal-card-img">
                                        {/* <h2>This is Registration Page.{user.email} {!isLoading ? '' : <Spinner animation="border" variant="danger" />}</h2> */}

                                        {!isLoading ?
                                            <Card.Img variant="top" src={meal.photo} />
                                            :
                                            <div className="text-center loading-spinner">
                                                <Spinner animation="grow" variant="danger" />
                                            </div>}
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{meal.name}</Card.Title>
                                        <Card.Text>
                                            <h5>{meal.description.slice(0, 50)}</h5>
                                            <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {meal.contentHours}+ Hr Video Content</div>
                                            <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {meal.practicalLesson}+ Practical Lesson</div>

                                        </Card.Text>
                                        <div className="d-flex mt-3 price-section">
                                            <h3> <span><FontAwesomeIcon icon={faRupeeSign} /></span> {meal.price}</h3>
                                            <Link to={`/singlefood/${meal.id}`}>
                                                <Button variant="warning"><span><FontAwesomeIcon icon={faShoppingCart} /></span> Add To Cart</Button>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Shop;