
import React from "react";
import { Link } from "@reach/router";

const ActivitiesList = () => (
    <div>
    <Link to="/Actividad1">
    <h1>Actividad 1</h1>
    </Link>
    
     <Link to="/Actividad2">
      <h1>Actividad 2</h1>
    </Link>
    
     <Link to="/Actividad3">
      <h1>Actividad 3</h1>
    </Link>
    </div>
);

export default ActivitiesList;