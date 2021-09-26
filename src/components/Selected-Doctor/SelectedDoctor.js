import React from 'react';
import './SelectedDoctor.css';


const SelectedDoctor = (props) => {

    const { name, profession, img } = props.doctor;

    return (
        <div className='selected-doctor p-1 d-flex justify-content-center align-items-center'>
            <img src={img} className='doctor-img' alt="" />
            <div className="doctor-info">
                <h6 >{name}<span className='text-success'><i class="fas fa-check-circle ms-2"></i></span></h6>
                <p className='text-primary'>{profession}</p>
            </div>
        </div>
    )
}

export default SelectedDoctor;
