import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Course.css'

const Course = (props) => {
    return (
        <div>
        <Card className='card'>
        <Card.Img className="img-fluid" variant="top" src={props.course.image} />
        <Card.Body>
          <Card.Title><h1>{props.course.name}</h1></Card.Title>
          <Card.Text>
            <h2>Instructor : </h2><p>{props.course.instructor}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>$ {props.course.price}</p>
          <Button onClick={() => props.handleAddCourse(props.course)}> <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</Button>
        </Card.Footer>
      </Card>
        </div>
    );
};

export default Course;