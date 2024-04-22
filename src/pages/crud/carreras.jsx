import Searchbar from "../../components/searchbar/searchbar";
import { useState, useEffect } from "react";

import Axios from 'axios';

import CarrerasForm from "./carrerasForm";
import CarrerasItem from "./carrerasItem";


function Carreras() {

    //Filtro para busqueda

    const [filter,setFilter] = useState("");

    

    const [carreras,setCarreras] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/carreras/obtener').then((response)=>{
          setCarreras(response.data);
        })
      },[])

      
    return(
        <div className="carreras">

            

            <Searchbar changeState={setFilter}/>
            
            
            <div className="title">
                Carreras
            </div>


            <CarrerasForm/>
            <br />

            <h4>Lista de Carreras</h4>

            {carreras.map(i=>{
                if(i.nombre.toLowerCase().includes(filter.toLocaleLowerCase())){
                return(
                    <CarrerasItem object={i}/>
                )
                }
            })}


           

            

        </div>
    )
}

export default Carreras;