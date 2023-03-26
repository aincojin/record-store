import React from "react";

export default function CatalogueGenreCard(props){
    return(
        <>
            <div className="Card">
                <div className="genreCard" style={{backgroundImage: `url(${props.item.name})`, backgroundSize: "cover"}}> 
                    {/* {props.name === 'Record1' &&<h3>{props.name}</h3>} */}
                </div>
                <h3>{props.item.genre}</h3>
            </div>
        </>
    )
}