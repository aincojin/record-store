import React from "react";

export default function RecordCard(props){
    return(
        <>
            <div className="genre-card">
                <div className="prod_card">
                                <div className="overlay">
                                    <div className="text">
                                        {/* {props.name === 'Record1' &&<h3>{props.name}</h3>} */}
                                        <h3>{props.item.name}</h3>
                                        <h4>{props.item.album}</h4>
                                        <h5>{props.item.artist}</h5>
                                    </div>
                                </div>
                                
                </div>
                <h3>{props.item.genre}</h3>
            </div>
        </>
    )
}