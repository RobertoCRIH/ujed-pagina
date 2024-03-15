import { useState } from "react";
import CrudBody from "./crudBody";
import CrudNav from "./crudNav";
import "./style.scss";

const crudStates= [
    "Maestros",
    "Alumnos",
    "Carreras"
]


function Crud() {
    const [crudState,setCrudState] = useState(crudStates[0])
    return(
        <div className="crud">
            {/* Este es el nav de móbil */}
            <CrudNav changeFunction={setCrudState}/>
            
            
            <CrudBody state={crudState} stateList={crudStates}/>
        </div>
    )
}

export default Crud;