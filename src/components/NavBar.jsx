import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
        <div className="container-xl">
        <a className="navbar-brand" href="#">Pastes</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#" to="/paste">Create Paste</Link>
            </li>
            
            </ul>
            {/* <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form> */}
        </div>
        </div>
    </nav>
  )
}

export default NavBar