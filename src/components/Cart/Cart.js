import React from 'react';
import SelectedDoctorl from '../Selected-Doctor/SelectedDoctor';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props || {};
    //  get total salary
    const handleSalary = (previous, current) => previous + current.salary;
    const totalSalary = cart?.reduce(handleSalary, 0)

    return (
        <>
            <div className='list-cart'>
                <h4>Doctors Added: <span className="ms-2">{cart.length}</span></h4>
                <h5>Total Cost:<span className="ms-2"> ${totalSalary}</span></h5>
            </div>
            <div className="hired-doctors">

                <h3 className='text-center my-2'>Hired Doctors</h3>
                {
                    cart.map(doctor => <SelectedDoctorl
                        key={doctor.key}
                        doctor={doctor}
                    ></SelectedDoctorl>)
                }
            </div>
            <div className=" d-flex justify-content-center align-items-center my-3 ">
                <button className='book-btn'>Book Now</button>
            </div>
        </>

    )
}

export default Cart;
