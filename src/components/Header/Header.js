import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div >
            {/* Navbar starts */}
            <nav className="navbar navbar-expand-lg header-container ">
                <div className="container text-light navbar-dark">
                    <a className="navbar-brand site-name" href="#"><i>RoutToCare</i></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Doctors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar ends */}
            <div className="bg-container text-center py-5 text-light">
                {/* Title part */}
                <div>
                    <h1 className='main-title'>Hire Doctors</h1>
                    <p className='lead'>we have colloection of best doctors from all over the world,get them now</p>
                </div>
                <div className=" d-flex justify-content-center align-items-center">
                    <form className="input-field my-2">
                        <i class="fas fa-search fa-2x me-5"></i>
                        <input class="form-control form-control-sm px-4" type="text" placeholder="Search doctors" aria-label=".form-control-sm example" />
                    </form>
                </div>
                <div className="budget text-center mt-5">
                    <h2>Total Budget: $23.5 Million </h2>
                </div>
            </div>
        </div>
    )
}

export default Header;
