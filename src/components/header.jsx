import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

function Header() {
 return (
        <nav className="main-nav">
            <Link to="/" className="logo-box">
                <img src={Logo} alt='Logo' className='main-nav-logo'></img>
                 <h1 className="title-logo">Wealth Health</h1>
            </Link>
            <div className='logged-container'>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon"/>
                        <p className='main-nav-item'>Sign out</p> 
                    </div>
        </nav>
  );
}



export default  Header