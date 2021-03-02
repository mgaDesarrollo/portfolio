import React from "react";
import logo from "../logo.png";
//fontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <a className="navbar-brand" href="home"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"red"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <a className="nav-link" href="home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutMe">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="services">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="howWork">How Work</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contacts">Contacts</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
