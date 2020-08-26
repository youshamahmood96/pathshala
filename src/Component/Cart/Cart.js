import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,pd)=>total+pd.price,0);
    let VAT =0;
    if(total>300){
        VAT = 0;
    }
    else if(total>200){
        VAT =4.99;
    }
    else if(total>0){
        VAT =12.99;
    }
    const tax = (total/10);
    const grandTotal = (total+VAT+Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }    
    return (
        <div id='cart' className='cart'>
            <h1>Order Summary</h1>
            <p>Courses bought : {cart.length}</p>
            <p>Tax+VAT : {formatNumber(tax+VAT)}</p>
            <p>Course Price : {total}</p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;