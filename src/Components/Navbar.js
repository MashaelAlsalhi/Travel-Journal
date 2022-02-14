import React from "react";
import "./Style.css";
import {FaGlobeAmericas} from "react-icons/fa";
export default function Navbar(){
  return(
<nav>
 <h2 className="nav--title"><FaGlobeAmericas style={{fontSize:"20px",marginBottom:"-3px"}}/> My Travel Journal</h2>

</nav>


  )

}