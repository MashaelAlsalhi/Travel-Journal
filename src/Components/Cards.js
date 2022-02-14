import React from "react";
import { MdLocationPin } from "react-icons/md";
import "./Style.css";

export default function Cards(props) {
    return (
        <div>
        <div className="Card--format">
            <img className="card--img" src={`./imgs/${props.imageUrl}`} />
            <section className="card--info">
                <p><MdLocationPin style={{ color: "red" }} /><span className="card--location">{props.location}</span> <a href={props.googleMapsUrl} className="card--googleUrl">  View on Google Maps</a> </p>
                <p className="card--title">{props.title}</p>
                <p className="card--date">{props.startDate} - <span>{props.endDate}</span></p>
                <p className="card--description">{props.description}</p>
            </section>
        
        </div>
        <hr/>
        </div>

    )
}