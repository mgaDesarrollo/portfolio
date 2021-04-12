import React from 'react';
import Typed from 'react-typed';
import logo from "../logo.png";


const Header = () => {
    return (
        <div className="header-wraper">
                        <a name='home'></a>


            <div className="main-info">
                <h1>Web development front end</h1>
                <div id="loading"></div>
                <Typed 
                className="typed-text" 
                strings={["web design","developed","available","trust","front end","creative","proactive"]}
                typeSpeed={50}
                backSpeed={80}
                loop
                />
                <img className="logoHeader" src={logo} alt="logo..." />
            </div>
        </div>
    )
}

export default Header
