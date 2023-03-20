import React from "react";

class About extends React.Component{
    render(){
        return(
            <div className="home-about">
                <div className="rec-logo"></div>
                <div className="about-us">
                    <h2>ABOUT US</h2>
                    <p>Music impacts people, influences culture and simply makes 
                       everything better!At The Record, we've made our goal to 
                       fully embrace diffrenent genres of music and dive deep into 
                       the world of  vinyl records.
                    </p>
                </div>
                <div className="socials">
                    <img src="./assets/images/socials/twitter.svg" alt="twitter-logo"/>
                    <img src="./assets/images/socials/facebook.svg" alt="facebook-logo"/>
                    <img src="./assets/images/socials/inst.svg" alt="instagra-logo"/>
                </div>
            </div>
        )
    }
}
export default About