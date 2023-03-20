import React from "react";
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {

        return(
            <nav className="navigation">
                <img className='logo' src="./assets/images/logo.png" alt="record logo"/>
                <ul className="navmenu">
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li>CATALOGUE</li>
                    <li><NavLink to ='/about'>ABOUT</NavLink></li>
                </ul>
            </nav>
        )
    }


export default Navigation