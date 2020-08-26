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
            <p>By: {props.course.instructor}</p>
            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laborum, veritatis nam voluptates enim sunt numquam, fuga modi quidem cumque, odit delectus iure quaerat nisi rerum neque qui asperiores eius!</span><span>Accusantium maiores hic voluptates? Corrupti veniam eos dolorem magnam quos molestiae explicabo deleniti vitae sed excepturi, reprehenderit facilis, fugit nemo illum est ea non in earum, hic quidem omnis et?</span></p>
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