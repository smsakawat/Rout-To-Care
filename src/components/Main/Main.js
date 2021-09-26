import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Main.css';

const Main = () => {
    const [doctors, setDocotors] = useState([]);

    // state declaration for cart
    const [cart, setCart] = useState([]);

    const handleCart = (doctor) => {

        if (!doctor.quntity) {
            doctor.quntity = 1
        } else {
            doctor.quntity = doctor.quntity + 1
        }
        if (doctor.quntity === 1) {
            const newCart = [...cart, doctor];
            setCart(newCart)
        }

    }

    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDocotors(data))
    }, [])
    return (
        <>

            <div className="budget text-center mt-5">
                <h2 className='fw-bold'>Total <span className='primary-color'>Doctors</span>: 2,975 </h2>
            </div>

            <div className='main-container text-center row'>

                <div className=" row col-md-9 g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.key}
                            handleCart={handleCart}
                            doctor={doctor}
                        ></Doctor>)
                    }

                </div>
                <div className="cart col-md-3">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>



            </div>
        </>
    )
}

export default Main;
