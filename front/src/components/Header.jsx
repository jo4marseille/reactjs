import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex flex-row">
                    <a className="navbar-brand flex-grow-1" href="#"><img src="favicon.ico" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className='navbar-nav mr-auto mt-2 mt-lg-0 ms-auto'>
                            <li className='nav-item active'>
                                <a className="nav-link px-2" href='/'>Home</a>
                            </li>
                            <li className='nav-item active'>
                                <a className="nav-link px-2" href='/'>Clubs</a>
                            </li>
                            <li className='nav-item active'>
                                <a className="nav-link px-2" href='/'>Hotels</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;