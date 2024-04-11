import { useState, useEffect } from "react";
import CrudBody from "./crudBody";
import CrudNav from "./crudNav";
import "./style.scss";

import {useNavigate} from 'react-router-dom';

import Axios from 'axios';

const crudStates= [
    "Maestros",
    "Alumnos",
    "Carreras",
    "Noticias",
    "Admins",
    "Plan de Estudios",
]


function Crud() {

    const navigation = useNavigate();

    const [valid,setValid] = useState(false);

    useEffect(()=>{
        Axios.get('http://localhost:3001/check')
        .then(response => {
            setValid(response.data.valid);
        })
    },[])
    const [crudState,setCrudState] = useState(crudStates[0])
    if(valid){
        return(
            <div className="crud">
                {/* Este es el nav de móbil */}
                <CrudNav changeFunction={setCrudState}/>
                
                
                <CrudBody state={crudState} stateList={crudStates}/>
            </div>
        )
    }else{
        return(
            <div style={{
                display:"flex",
                width: "100vw",
                height:"100vh",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <div>
                    <h3>Por favor inicia sesión</h3>
                    <p>Regresa a la pestaña de login para acceder a la página</p>
                    <button onClick={e=>{
                        navigation("/login")
                    }}
                    style={{
                        padding: "5px",
                        cursor: "pointer",
                        marginTop:"5px",
                        border: "2px solid black",
                        fontWeight: "bold"
                    }}
                    >Ir al login...</button>
                </div>
            </div>
        )
    }
}

export default Crud;