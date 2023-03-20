import React from "react";
// import { ReactDOM } from "react-dom";
import { useNavigate } from "react-router-dom";
import RecordCard from "../../RecordCard";
import recordCatalogueData from "../../recordCatalogueData"
export default function Catalogue(){
        const navigate = useNavigate()

        const recordCards = recordCatalogueData.map(item => {
            return(
                <RecordCard
                    key={item.id}
                    item={item}

                />
            )
        })


        return(
            <>
                <div className="ccatalogue">
                   
                        <img className='logo'  src="./assets/images/logo.png" alt="record logo" onClick={()=>navigate('/')}/>
                        <h1>CATALOGUE</h1>
                   
                    <h3 className="cat_sign_log">Sign in/<span>Login</span></h3>
                    <img className="shopping-cart" src="./assets/images/cart3.svg"/>
                </div>
                <div className="cat_main">
                    {/* <div className="cat_nav"></div> */}
                    <div className="cat_products">
                        {recordCards}
                    </div>
                </div>
            </>
        )
   
}

