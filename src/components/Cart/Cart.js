import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props || {};

    const handleSalary = (previous, current) => previous + current.fee;
    const totalFee = cart?.reduce(handleSalary, 0)

    return (
        <div className='list-cart'>
            <h4>Doctors Added: <span className="ms-2">{cart.length}</span></h4>
            <h5>Total Fee:<span className="ms-2"> ${totalFee}</span></h5>
            <div className="hired-doctors">
                {
                    cart.map(doctor => <li>{doctor.name}</li>)
                }
            </div>
            <div className=" d-flex justify-content-center align-items-center my-3 ">
                <button className='btn btn-secondary book-btn'>Book Now</button>
            </div>
        </div>
    )
}

export default Cart;
