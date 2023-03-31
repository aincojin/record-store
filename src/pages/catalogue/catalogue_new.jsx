import React from "react";

import Nnavbar from "../../components/Nnavbar";
import CatalogueGenreData from "./CatalogueGenreData.json";
import CatalogueGenreCard from "./CatalogueGenreCard";

export default function CatalogueNew(){

   
  
    const genreCards = CatalogueGenreData.map(item => {
        return(
            <CatalogueGenreCard
                key={item.id}
                item={item}

            />
        )
    })

        return(
            <>
                <Nnavbar />

                <div className="catalogName">CATALOGUE</div>

                <div className="divScroll">
                     <img className="Larrow" 
                        onClick ={ () => {
                                document.getElementById("container").scrollLeft -= 245;
                                }}
                        style={{height:"225px", width:"70px"}}
                        src="./assets/images/icons/arrowL.svg" alt="arrow-left"/> 

                    <div id="container" className="catalogScroll">
                        {genreCards}
                    </div>

                    <img className="Rarrow" 
                        onClick ={ () => {
                            document.getElementById("container").scrollLeft += 245;
                        }}
                        style={{height:"225px", width:"70px"}}
                        src="./assets/images/icons/arrowR.svg" alt="arrow-right"/>

                </div>
                
            </>


        )
   
}

