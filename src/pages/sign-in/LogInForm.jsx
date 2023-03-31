import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function  LogInForm(){
    const navigate = useNavigate()
        return(
            <>
                <div className="back_btn">
                    <button className="back_button" onClick={()=> navigate(-1)} style={{color:'#c4c2b8', textDecoration: 'none'}}>Go Back</button>
                </div>
                <div className="container">
                    <div className="box">
                        <h2>Log in</h2>
                        <form action="#">

                            <div className="input_box">
                                <input type="text" className="username" required/>
                                <label>Username</label>
                            </div>

                            <div className="input_box">
                                <input type="text" className="password" required/>
                                <label>Password</label>
                                <div className="password_checkbox"><input type="checkbox"/>
                                    <p>Show Password</p>
                                </div>
                                {/* <div className="forgotPassword"></div> */}
                            </div>

                            <button className="login_button" type="submit" style={{color:'#c4c2b8', textDecoration:'none'}}>Log In</button>
                            <div className="signup_link" ><Link to='/sign-in' style={{color:'#c4c2b8'}}>Don't have an Account?</Link></div>
                        </form>
                    </div>
                </div>
            </>
        )
   
    
}
