import { useState } from "react";
import CrudBody from "./crudBody";
import CrudNav from "./crudNav";
import "./style.scss";

const crudStates= [
    "Maestros",
    "Alumnos"
]


function Crud() {
    const [crudState,setCrudState] = useState(crudStates[0])
    return(
        <div className="crud">
            <CrudNav changeFunction={setCrudState}/>
            <CrudBody state={crudState} stateList={crudStates}/>
        </div>
    )
}

export default Crud;