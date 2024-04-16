import MainNav from "../../components/mainNav/index.jsx"
import CarreraHero from "./carreraHero.jsx";
import CarreraSecciones from "./carreraSecciones.jsx";
import TransitionSlide from "../../components/transitionSlide"
import Footer from "../../components/footer/index.jsx";

import "./style.scss"

import { useState, useEffect } from "react";
import CampoLaboral from "./campoLaboral.jsx";
import { useParams } from "react-router-dom";

import Axios from "axios"
import LoadingScreen from "../../components/loadingScreen/index.jsx";

// Iconos para el slider 

import { LuTrees } from "react-icons/lu"; //Ciencias Agropecuarias y Forestales
import { GiMaterialsScience } from "react-icons/gi"; //Ciencias Básicas
import { FaMoneyBillTrendUp } from "react-icons/fa6"; //Ciencias Económico-Administrativas
import { SlChemistry } from "react-icons/sl"; //Ciencias Químico-Biológicas
import { MdOutlinePsychology } from "react-icons/md"; //Ciencias Sociales y Humanidades
import { SiWorldhealthorganization } from "react-icons/si"; //Ciencias de la Salud
import { GiPencilBrush } from "react-icons/gi"; //Difusión, Extensión, Cultura e Identidad
import { MdArchitecture } from "react-icons/md"; //Ingenierías y Arquitecturas
import { FaDog } from "react-icons/fa6"; //Medicina, Veterinaria y Zootecnia
import { FaSchool } from "react-icons/fa";


//Imagenes para el banner

import forestal from "./../../assets/images/ing-agropecuario.jpg";
import cienciasBasicas from "./../../assets/images/cienciasbasicas.jpg";
import cienciasEnomico from "./../../assets/images/economico administrativo.jpg";
import quimicoBiologo from "./../../assets/images/quimico.jpg";
import cienciasSociales from "./../../assets/images/ciencias sociales.jpg";
import salud from "../../assets/images/salud.jpg";
import arte from "../../assets/images/artista.jpg";
import arqui from "./../../assets/images/arquitecto.jpg";
import veterinario from "../../assets/images/veterinario.jpg";
import predeterminado from "./../../assets/images/ujed banner.jpg"
import Duracion from "./duracion.jsx";
import Inscripciones from "./inscripciones.jsx";
import PlanEstudios from "./planEstudios.jsx";
import GenericBanner from "../../components/genericBanner/index.jsx";





function PaginaCarrera() {

    let {id} = useParams() 

    const [carrera,setCarrera] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    

    useEffect(()=>{
        Axios.post('http://localhost:3001/carreras/obtener1',{
            idcarrera: id
        }).then((response)=>{
            setCarrera(response.data);
            setIsLoading(false);
          
        })
      },[])

    function setIcon(area) {
        switch (area) {
            case "Ciencias Agropecuarias y Forestales":
                    return(
                        <LuTrees/>
                    )
                break;
            
            case "Ciencias Básicas":
                return(
                    <GiMaterialsScience/>
                )
            break;

            case "Ciencias Económico-Administrativas":
                return(
                    <FaMoneyBillTrendUp/>
                )
            break;

            case "Ciencias Químico-Biológicas":
                return(
                    <SlChemistry/>
                )
            break;

            case "Ciencias Sociales y Humanidades":
                return(
                    <MdOutlinePsychology/>
                )
            break;

            case "Ciencias de la Salud":
                return(
                    <SiWorldhealthorganization/>
                )
            break;

            case "Difusión, Extensión, Cultura e Identidad":
                return(
                    <GiPencilBrush/>
                )
            break;

            case "Ingenierías y Arquitecturas":
                return(
                    <MdArchitecture/>
                )
            break;

            case "Medicina, Veterinaria y Zootecnia":
                return(
                    <FaDog/>
                )
            break;

            default:
                return(
                    <FaSchool/>
                )
                break;
        }
    }

    function setBanner(area) {
        switch (area) {
            case "Ciencias Agropecuarias y Forestales":
                    return(
                        forestal
                    )
                break;
            
            case "Ciencias Básicas":
                return(
                    cienciasBasicas
                )
            break;

            case "Ciencias Económico-Administrativas":
                return(
                    cienciasEnomico
                )
            break;

            case "Ciencias Químico-Biológicas":
                return(
                    quimicoBiologo
                )
            break;

            case "Ciencias Sociales y Humanidades":
                return(
                    cienciasSociales
                )
            break;

            case "Ciencias de la Salud":
                return(
                    salud
                )
            break;

            case "Difusión, Extensión, Cultura e Identidad":
                return(
                    arte
                )
            break;

            case "Ingenierías y Arquitecturas":
                return(
                    arqui
                )
            break;

            case "Medicina, Veterinaria y Zootecnia":
                return(
                    veterinario
                )
            break;

            default:
                return(
                    predeterminado
                )
                break;
        }
    }

    
    //Esto es para que no renderice la pagina en caso de que no esté cargada
    if(isLoading){
        return(
            <LoadingScreen/>
        )
    }
    
    return(
        <>

            <MainNav/>
            
            

            

            <GenericBanner img={setBanner(carrera[0].area)}> 
                {carrera[0].nombre}
            </GenericBanner>

            
            
            <div className="carreraBody">
                
                <CarreraSecciones title={"Acerca del " + carrera[0].nombre}>
                    {carrera[0].descripcion}
                </CarreraSecciones>

                <CampoLaboral img={"https://img.freepik.com/foto-gratis/mujer-llenando-formulario_53876-146753.jpg?size=626&ext=jpg&ga=GA1.1.539837299.1712102400&semt=ais"}>
                    {carrera[0].empleosasp}
                </CampoLaboral>

                <CarreraSecciones title={"Objetivos"}>
                    {carrera[0].objetivos}
                </CarreraSecciones>

                <CarreraSecciones title={"Perfil del Egresado"}>
                    {carrera[0].metas}
                </CarreraSecciones>


                <PlanEstudios semestres={carrera[0].duracion} idcarrera={carrera[0].idcarrera}/>

                <Inscripciones/>    
                

            </div>

            <Footer/>

            <TransitionSlide 
            nombreCarrera={carrera[0].nombre}
            area={carrera[0].area}
            icon={setIcon(carrera[0].area)}
            />  
        
        </>
    )
    
}

export default PaginaCarrera;