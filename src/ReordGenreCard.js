import React from "react";

export default function RecordGenreCard(props){
    return(
        <>
            <div className="genre-card">
                <div className="prod_card">
                                <div className="overlay">
                                    <div className="text">
                                       View Records 
                                    </div>
                                </div>
                                
                </div>
                <h3>{props.item.genre}</h3>
            </div>
        </>
    )
}