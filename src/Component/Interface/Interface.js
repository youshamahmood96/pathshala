import React, { useState } from 'react';
import Fakedata from '../../Component/Fakedata/Fakedata'
import { Row, Col } from 'react-bootstrap';
import './Interface.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Interface = () => {
    const[cart,setCart]=useState([]);
    const handleAddCourse = (course) =>{
        console.log('product added',course);
        const newCart =[...cart,course];
        setCart(newCart)
    }
    return (
        <div className='container'>
        <Row>
        <Col className='courses' md={8}>
        <h1>Courses</h1>
        {
            Fakedata.map(course=><Course  handleAddCourse={handleAddCourse} course={course}></Course>)
        }
        </Col>
        <Col className='cart' md={4}>
        <Cart cart={cart}></Cart>
        </Col>
        </Row>
        </div>
    );
};

export default Interface;