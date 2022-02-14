import React from "react";
import Cards from "./Cards.js";
import dataframe from "./data.js";
import  "./Style.css";

export default function call_Cards() {
    const cards = dataframe.map(item => {
        return (<Cards
            key={item.id}{...item}
        />
        
        )
    }
    )
    return (

        <section className="cards-list">
            {cards}
           
        </section> 
   
    );
}