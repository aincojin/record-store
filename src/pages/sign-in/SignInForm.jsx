import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function SignInForm(){
    const navigate = useNavigate()
        return(
            <>
            <div className="back_btn">
                    <button className="back_button" onClick={()=> navigate(-1)} style={{color:'#c4c2b8', textDecoration: 'none'}}>Go Back</button>
                </div>
            <div className="container">
                
                <div className="box">
                    <h2>Sign up</h2>
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
                        </div>

                        <div className="input_box">
                            <input type="text" className="email" required/>
                            <label>Email</label>
                        </div>

                        <button className="signup_button" type="submit" style={{color:'#c4c2b8', textDecoration:'none'}}>Create an Account</button>
                        <div className="login_link"><Link to='/log-in' style={{color:'#c4c2b8'}}>Already have an Account?</Link></div>
                    </form>
                </div>
            </div>
            </>
        )
    
}
