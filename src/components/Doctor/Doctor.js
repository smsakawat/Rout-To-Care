import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Doctor.css';
const Doctor = (props) => {
    const { name, age, country, profession, salary, img, rating } = props.doctor || {};

    const cartIcon = <FontAwesomeIcon
        icon={faList}
    ></FontAwesomeIcon>
    return (
        <div className='col-md-4 doctor-cart'>
            <div className="img-container overflow-hidden p-2">
                <img src={img} alt="" />
            </div>
            <div className="body text-center p-4 ">
                <h6 className='fw-bold'>{name} </h6>
                <h6 className='text-primary'> {profession}</h6>
                <h6>Age: {age}</h6>
                <h6 >Nationality: <span className='text-primary'>{country}</span></h6>
                <h6>Salary: <span className='text-success fw-bold'>${salary}</span></h6>
                <div className="rating text-warning ">
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fa fa-star"
                        readonly
                    ></Rating><span className='text-dark'>({rating})</span>
                </div>
            </div>

            <button
                onClick={() => props.handleCart(props.doctor)}
                className='button'>{cartIcon}<span className='ms-2 mt-0 '>Add To List</span></button>

        </div >
    )
}

export default Doctor;
