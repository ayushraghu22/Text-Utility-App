import React from 'react'
import PropTypes from 'prop-types' //impt
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {

    let location = useLocation();

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.nav === 'none' ? props.mode : props.nav} bg-${props.nav === 'none' ? props.mode : props.nav} shadow`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`} to="/About">{props.about}</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <div className="bg-primary rounded border mx-1" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-success rounded border mx-1" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-danger rounded border mx-1" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-warning rounded border mx-1" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-secondary rounded border mx-1" onClick={() => { props.toggleMode('secondary') }} style={{ height: '30px', width: '30px' }}></div>
                    </div>

                    <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={() => { props.toggleMode('none') }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string
}

Navbar.defaultProps = {
    title: "Title",
    About: "Enter-about"
}
