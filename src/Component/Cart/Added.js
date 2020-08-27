import React from 'react';
import './Added.css'

const Added = (props) => {
    return (
        <div className='added-courses'>
            <div className="added-courses-img">
            <img src={props.added.image} alt=""/>
            </div>
            <div className="added-courses-info">
            <h3>{props.added.name}</h3>
            <p>By : {props.added.instructor}</p>
            <p>$ {props.added.price}</p>
            </div>
        </div>
    );
};

export default Added;