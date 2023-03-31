import React from "react";
import { useNavigate } from 'react-router-dom';
 
const Nnavbar = () => {

    const navigate = useNavigate()   

        return(
            <nav className="nnavigate">
                <div className="Lnav">
                    <img className="menuicon navicon" src="./assets/images/dropdownmenu.svg" alt="menu"/>
                    <img onClick={()=>navigate('/')} className='logonav' 
                        src="./assets/images/logo.png" alt="record logo"/>
                </div>
                <div className="Rnav">
                    <img className="navicon" src="./assets/images/searchicon.svg" alt="search"/>
                    <img className="navicon" onClick={()=>navigate('/log-in')} src="./assets/images/usericon.svg" alt="user"/>
                    <img className="navicon"src="./assets/images/carticon.svg" alt="cart"/>
                </div>
            </nav>
        )
    }


export default Nnavbar