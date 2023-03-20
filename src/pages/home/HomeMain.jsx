import React from "react";
import { useNavigate } from "react-router-dom";

const HomeMain = () => {
        const navigate = useNavigate() 

        return(
            <div className="home-mid">
                <div className="left-column">
                    <div className="home-big-para">
                        <h4 className="home-lil-headers">Welcome to our</h4>
                        <h1 className="title">RECORD STORE</h1>
                    </div>
                    <div className="home-lil-para">
                        <h4 className="home-lil-headers">Explore the vast world of music</h4>
                        <p>we are providing records of almost every music genre,
                           so that anybody would find something to their taste</p>
                    </div>
                    <div className="home-lil-para">
                        <h4 className="home-lil-headers">
                            Learn about music history
                            while shopping for your favourite albums
                        </h4>
                        <p>Learn the history behind writing your favourite
                           tunes</p>
                    </div>
                    <div className="btns">
                        <button className="btn red-btn" onClick={()=> navigate('/sign-in')}>Sign Up</button>
                        <button className="btn-browse btn" onClick={()=>navigate('/catalogue')}>Browse Catalogue</button>
                    </div>
                </div>
                <div className="right-column">
                    <img className="home-record" src="./assets/images/home-record2.jpg" alt="a record on a record player"/>
                </div>
            </div>
        )
    }


export default HomeMain