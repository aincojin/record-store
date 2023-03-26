import React from "react";

import Nnavbar from "../../components/Nnavbar";
import CatalogueGenreData from "./CatalogueGenreData";
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
                    <img className="Larrow" src="./assets/images/arrowL.svg" alt="arrow-left"/>
                    <div className="catalogScroll">
                        {genreCards}
                    </div>
                    <img className="Rarrow" src="./assets/images/arrowR.svg" alt="arrow-right"/>
                </div>
            </>


        )
   
}

