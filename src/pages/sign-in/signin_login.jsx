import React from "react";
import SignInForm from "./SignInForm";
import ReactCardFlip from "react-card-flip";
import LogInForm from "./LogInForm"
class SignIn_Login extends React.Component{
    render(){
        return(
            <>
                <div className="container">
                    <SignInForm/>
                </div>
            </>

        )
    }
}
export default SignIn_Login