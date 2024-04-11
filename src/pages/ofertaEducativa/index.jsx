import { useParams } from "react-router-dom";
import MainNav from "../../components/mainNav";
import ListaOfertas from "./listaOfertas.jsx";

import Footer from "../../components/footer"
import "./style.scss"

import Axios from 'axios';
import { useEffect, useState } from "react";
import ListaOfertasItem from "./listaOfertasItem.jsx";




function OfertaEducativa() {

    let {page} = useParams();

    //Datos del Backend
    const [carreras,setCarreras] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/carreras/obtener').then((response)=>{
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
                            
                            
                        </>
                    )
                break;

            case "mediasuperior":
                return(
                    <>
                        <div className="ofertasTitle">
                            <h1>Ofertas de Escuelas Media Superior</h1>
                        </div>
                        <ListaOfertas  area={"Media Superior"} lista={carreras}/>
                    
                    </>
                )
            break;
            
            case "especialidades":
                return(
                    <>
                    
                        <div className="ofertasTitle">
                            <h1>Especialidades</h1>
                        </div>

                        <ListaOfertas area={"(ESPECIALIDAD) Ciencias de la Salud"} lista={carreras} />
                        <ListaOfertas area={"(ESPECIALIDAD) Ciencias Económico-Administrativas"} lista={carreras}/>
                        <ListaOfertas area={"(ESPECIALIDAD) Ciencias Sociales y Humanidades"} lista={carreras} />
                        <ListaOfertas area={"(ESPECIALIDAD) Ciencias de la Salud"} lista={carreras} />  
                    </>
                )
            break;

            case "centro-idiomas":
                return(
                    <>

                        <div className="ofertasTitle">
                            <h1>Especialidades</h1>
                        </div>

                        <ListaOfertas area={"Centro de Idiomas Durango"} lista={carreras} />
                        <ListaOfertas area={"Centro de Idiomas Gómez Palacio"} lista={carreras} />
                    
                    </>
                )
            break;

            case "maestrias":
                return(
                    <>
                    
                        <div className="ofertasTitle">
                            <h1>Maestrías</h1>
                        </div> 

                        <ListaOfertas area={"(MAESTRIA) Ciencias Agropecuarias y Forestales"} lista={carreras} />
                        <ListaOfertas area={"(MAESTRIA) Ciencias Básicas"} lista={carreras} />
                        <ListaOfertas area={"(MAESTRIA) Ciencias de la Salud"} lista={carreras} />
                        <ListaOfertas area={"(MAESTRIA) Ciencias Económico-Administrativas"} lista={carreras} />
                        <ListaOfertas area={"(MAESTRIA) Ciencias Químico Biológicas"} lista={carreras} />
                        <ListaOfertas area={"(MAESTRIA) Ciencias Sociales y Humanidades"} lista={carreras} />
                    </>
                )
            break;

            case "doctorados":
                return(
                    <>
                    
                        <div className="ofertasTitle">
                            <h1>Doctorados</h1>
                        </div>

                        <ListaOfertas area={"(DOCTORADO) Ciencias Agropecuarias y Forestales"} lista={carreras} />
                        <ListaOfertas area={"(DOCTORADO) Ciencias Básicas"} lista={carreras} />
                        <ListaOfertas area={"(DOCTORADO) Ciencias de la Salud"} lista={carreras} />
                        <ListaOfertas area={"(DOCTORADO) Ciencias Económico-Administrativas"} lista={carreras} />
                        <ListaOfertas area={"(DOCTORADO) Ciencias Químico Biológicas"} lista={carreras} />
                        <ListaOfertas area={"(DOCTORADO) Ciencias Sociales y Humanidades"} lista={carreras} />DOCTORADO
                    </>
                )
            break;
            
            case "virtual":
                return(
                    <>
                    
                        <div className="ofertasTitle">
                            <h1>Universidad Virtual</h1>
                        </div>

                        <ListaOfertas area={"Carrera Virtual"} lista={carreras}/>  
                    
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

            <Footer/>

        </>
    )
}

export default OfertaEducativa;