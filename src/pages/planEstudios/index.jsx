import { useState,useEffect } from "react";
import GenericBanner from "../../components/genericBanner";
import Axios from 'axios';
import {useParams} from 'react-router-dom'
import ListaPlanEstudio from "./listasPlanEstudio";

import "./style.scss"
function PlanEstudios() {

    let {id} = useParams()

    const [carrera,setCarrera] = useState()
    const [isLoading,setIsLoading] = useState(true)


    useEffect(()=>{
        Axios.post('http://localhost:3001/carreras/obtener',{
            idc: id
        }).then((response)=>{
          setCarrera(response.data);
            setIsLoading(false);
          
        })
      },[])

    if(isLoading){
        return(
            <p>loading...</p>
        )
    }

    return(
        <>

            <GenericBanner 
            img={"https://www.comunidadbaratz.com/wp-content/uploads/La-biblioteca-es-inclusion-social-e-igualdad-de-oportunidades.jpg"}
            >
                Plan de Estudios de {carrera[0].nombre} 
            </GenericBanner>


                <ListaPlanEstudio listaDB={carrera} />

                <div className="listaPlanes__semestre">
                    
                </div>
        
        </>
    )
}

export default PlanEstudios;