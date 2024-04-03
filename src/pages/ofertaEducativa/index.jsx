import { useParams } from "react-router-dom";
import MainNav from "../../components/mainNav";
import ListaOfertas from "./listaOfertas.jsx";

import Footer from "../../components/footer"
import "./style.scss"

import Axios from 'axios';
import { useEffect, useState } from "react";




function OfertaEducativa() {

    let {page} = useParams();

    //Datos del Backend
    const [carreras,setCarreras] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/carreras/obtenertodos').then((response)=>{
          setCarreras(response.data);
        })
      },[])

    function StateMachine(page) {
        switch (page) {
            case "licenciaturas":
                    return(
                        <>
                            <div className="ofertasTitle">
                                <h1>Carreras y Licenciaturas</h1>
                            </div>
                            <ListaOfertas  area={"Ciencias Agropecuarias y Forestales"} lista={carreras}/>
                            
                            <ListaOfertas area={"Ciencias Básicas"} lista={carreras}/>

                            <ListaOfertas area={"Ciencias Económico-Administrativas"} lista={carreras}/>

                            <ListaOfertas area={"Ciencias Químico-Biológicas"} lista={carreras}/>

                            <ListaOfertas area={"Ciencias Sociales y Humanidades"} lista={carreras}/>

                            <ListaOfertas area={"Ciencias de la Salud"} lista={carreras}/>

                            <ListaOfertas area={"Difusión, Extensión, Cultura e Identidad"} lista={carreras}/>

                            <ListaOfertas area={"Ingenierías y Arquitecturas"} lista={carreras}/>

                            <ListaOfertas area={"Medicina, Veterinaria y Zootecnia"} lista={carreras}/>
                            <Footer/>
                            
                        </>
                    )
                break;
        
            default:
                break;
        }
    }

    

    return(
        <>
            <MainNav/>
            
            {StateMachine(page)}

        </>
    )
}

export default OfertaEducativa;