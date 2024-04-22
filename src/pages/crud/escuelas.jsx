import Searchbar from "../../components/searchbar/searchbar";
import Axios from 'axios';
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import EscuelasForm from "./escuelasForm";
import EscuelasItem from "./escuelasItem";


function Escuelas() {

    //Recuperar las escuelas del back
    const [listaEscuelas,setListaEscuelas] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/escuelas/obtener")
        .then(res => {
            console.log(res.data);
            setListaEscuelas(res.data);
        })
    },[])





    return(
        <>
        
            <div className="escuelas">
                
                <Searchbar/>
                
                <div className="title">
                    Escuelas
                </div>      

                <EscuelasForm/>

                <br />

                <h4>
                    Lista de Escuelas Registradas
                </h4>

                {listaEscuelas.map((e,index)=>{
                    return(


                        <EscuelasItem object={e}/>

                    )
                })}

                

            </div>
        
        </>
    )
}

export default Escuelas;