import React from 'react';
import './SelectedDoctor.css';

const SelectedDoctor = (props) => {

    const { name, profession, img } = props.doctor;
    return (
        <div className='selected-doctor p-1 d-flex justify-content-center align-items-center'>
            <img src={img} className='doctor-img' alt="" />
            <div className="doctor-info">
                <h5 >{name}</h5>
                <p className='text-primary'>{profession}</p>
            </div>
        </div>
    )
}

export default SelectedDoctor;
