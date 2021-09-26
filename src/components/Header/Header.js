import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div >

            <nav className="navbar navbar-expand-lg header-container ">
                <div className="container text-light navbar-dark">
                    <a className="navbar-brand" href="#">RoutToCare</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 ms-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Doctors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div className="bg-container text-center py-5 text-light">
                <div>
                    <h1>Find A Doctor</h1>
                    <p className='lead'>we provide the best doctors from all over the world,book them now</p>
                </div>
                <div className=" d-flex justify-content-center align-items-center">
                    <form className="input-field d-flex">

                        <input class="form-control form-control-sm px-4" type="text" placeholder="Search doctors" aria-label=".form-control-sm example" />
                        <button type='submit' className='search-btn'><i className="fas fa-search "></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;
