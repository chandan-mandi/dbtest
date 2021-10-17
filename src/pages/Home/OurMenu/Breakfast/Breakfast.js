import { faCheckCircle, faRupeeSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { mealContext } from '../../../../App';

const Breakfast = () => {
    const meals = useContext(mealContext);
    const breakfast = meals.filter(meal => meal.category.includes('breakfast'))
    console.log(breakfast);
    return (
        <Container id="breakfast" className="mt-5 home-service-section">
                    <h2>Most Popular <span>Meal</span> <br /> 70% Student Choice</h2>
                    <Row>
                        {
                            breakfast.map(meal =>
                                <Col className="mt-2 p-2" md={3} sm={12}>
                                    <Card className="course-card">
                                        <div className="meal-card-img">
                                        <Card.Img variant="top" src={meal.photo} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{meal.name}</Card.Title>
                                            <Card.Text>
                                                <h5>{meal.description.slice(0,50)}</h5>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {meal.contentHours}+ Hr Video Content</div>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {meal.practicalLesson}+ Practical Lesson</div>
                                                
                                            </Card.Text>
                                            <div className="d-flex mt-3 price-section">
                                                <h3> <span><FontAwesomeIcon icon={faRupeeSign} /></span> {meal.price}</h3>
                                                <Button variant="warning"><span><FontAwesomeIcon icon={faShoppingCart} /></span> Add To Cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
    );
};

export default Breakfast;