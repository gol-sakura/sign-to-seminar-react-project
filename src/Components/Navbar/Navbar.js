import React from "react";

import "./Navbar.css";

export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom text-nav">
        <a className="navbar-brand text-nav" href="/">
          SignToSeminar
        </a> 

        <div className="nav-item dropdown text-nav ">
        <a className="nav-link dropdown-toggle admin text-nav" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       

        <a className=" dropdown-item nav-link  mr-auto " href="/listofseminars">
              Seminars List
              </a>
              <div className="dropdown-divider"></div>
        <a className="dropdown-item nav-link dropdown-item mr-auto  " href="/add">
              Add Seminar
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item nav-link dropdown-item mr-auto  " href="/addbooking">
              Add Booking
              </a>
              <div className="dropdown-divider"></div>
        <a className="dropdown-item nav-link dropdown-item mr-auto  " href="/listofbookings">
              Bookings List
              </a>
        </div>
      </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-nav" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto text-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/seminars">
                Seminars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
