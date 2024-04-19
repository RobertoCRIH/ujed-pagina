import { useState } from "react";
import logo from "../../assets/images/ujed-logo.png";
import "./style.scss";

import { IoIosArrowDown } from "react-icons/io";


import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function MainNav() {
    const navigation = useNavigate();

    const [mobileVisible,SetMobileVisible] = useState(true)
    return(
        <div className="mainNav">
            
            <div className="logo">
                <img src={logo} alt="" style={{cursor:"pointer"}}  onClick={e=>{
                    navigation("/")
                }}/>
            </div>

            <div className="mobileButton">
                <button onClick={(e)=>SetMobileVisible(!mobileVisible)}> <IoIosArrowDown/> </button>
            </div>

            <div className={"content "+(mobileVisible ? "visible" : "hidden")}>
                {/* <div className="content__one">
                    <Link className="options" to={{pathname:"/"}}>Noticias</Link>
                    <Link className="options" to={{pathname:"/"}}>Galeria</Link>
                    <a className="options" href="https://escolares.ujed.mx">Control Escolar</a>
                    <Link className="options" to={{pathname:"/login"}}>Administrador</Link>
                    
                </div> */}
                <div className="content__two">

                    <div className="dropDown">

                        <div className="activator">Oferta Educativa</div>
                        <div className="content">
                            <div className="col">
                                <div className="title">PROGRAMAS POR NIVEL EDUCATIVO</div>
                                <Link className="link" to={{pathname:"/oferta-educativa/mediasuperior"}}>Media Superior</Link> <br /> 
                                <Link className="link" to={{pathname:"/oferta-educativa/licenciaturas"}}>Licenciaturas e Ingenierías</Link> <br /> 
                                <Link className="link" to={{pathname:"/oferta-educativa/especialidades"}}>Especialidades</Link> <br /> 
                                <Link className="link" to={{pathname:"/oferta-educativa/maestrias"}}>Maestrías</Link> <br /> 
                                <Link className="link" to={{pathname:"/oferta-educativa/doctorados"}}>Doctorados</Link> <br /> 
                            </div>
                            <div className="col">
                                <div className="title">OFERTA POR UNIDAD ACEDEMICA</div>
                                <Link className="link">Escuelas y Facultades</Link> <br />
                                <Link className="link" to={{pathname:"/universidad-virtual"}}>Universidad Virtual</Link>
                            </div>
                            <div className="col">
                                <div className="title">IDIOMAS</div>
                                <Link className="link" to={{pathname:"/oferta-educativa/centro-idiomas"}}>Centro de Idiomas</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropDown">

                        <div className="activator">Investigación</div>
                        <div className="content">
                            <div className="col">
                                <div className="title">INSTITUTOS</div>
                                <Link className="link" to={{pathname:"/bellas-artes"}}>Bellas Artes</Link> <br /> 
                                <Link className="link" to={{pathname:"/ciencias-sociales"}}>Ciencias Sociales</Link> <br /> 
                                <Link className="link" to={{pathname:"/investigacion-cientifica"}}>Investigación Científica</Link> <br /> 
                                <Link className="link" to={{pathname:"/investigacion-historica"}}>Investigación Histórica</Link> <br /> 
                                <Link className="link" to={{pathname:"/investigacion-juridica"}}>Investigación Jurídica</Link> <br /> 
                                <Link className="link" to={{pathname:"/silvicultura"}}>Silvicultura</Link> <br /> 
                            </div>
                            <div className="col">
                                <div className="title">INVESTIGACIÓN</div>
                                <Link className="link">Tesis Micaf</Link> <br />

                            </div>
                        </div>
                    </div>

                    <div className="dropDown">

                        <div className="activator">Servicios</div>
                        <div className="content">
                            <div className="col">
                                <div className="title">SERVICIOS ACEDÉMICOS</div>
                                <a href="http://ssga.ujed.mx" className="link">Subsecretaría General Académica</a> <br />
                                <a href="https://escolares.ujed.mx" className="link">Servicios Escolares</a> <br />
                                <a href="http://extension.ujed.mx" className="link">Extensión Universitaria</a> <br />
                                <Link className="link" to={{pathname:"/direccion-general-de-bibliotecas"}}>Dirección General de Bibliotecas</Link> <br /> 
                                <Link className="link" to={{pathname:"/recursos-humanos"}}>Dirección de Desarrollo y Gestión de Recursos Humanos</Link> <br /> 
                                <Link className="link" to={{pathname:"/coordinacion-de-capacitacion-institucional"}}>Coordinación de Capacitación Institucional</Link> <br /> 
                                <Link className="link" to={{pathname:"/correo-institucional"}}>Correo Institucional</Link> <br /> 
                                <Link className="link" to={{pathname:"/aspirantes"}}>Aspirantes</Link> <br /> 

                            </div>
                            <div className="col">
                                <div className="title">SERVICIOS A LA COMUNIDAD</div>
                                <Link className="link" to={{pathname:"/centro-de-negocios"}}>Centro de Negocios</Link> <br />
                                <Link className="link" to={{pathname:"/vinculacion-institucional"}}>Dirección de Vinculación Institucional</Link> <br /> 
                            </div>
                            <div className="col">
                                <div className="title">CULTURA Y DEPORTE</div>
                                <Link className="link" to={{pathname:"/difusion-cultural"}}>Difusión Cultural</Link> <br />
                                <Link className="link" to={{pathname:"/desarrollo-del-deporte"}}>Centro del Desarrollo del Deporte</Link>
                            </div>
                            <div className="col">
                                <div className="title">COMUNICACIÓN</div>
                                <Link className="link" to={{pathname:"/comunicacion-social"}}>Comunicación Social</Link> <br />
                                <a className="link" href="https://radio.ujed.mx/">Radio UJED</a><br />
                                <a className="link" href="http://tv.ujed.mx/">TV UJED</a><br />
                                {/* <Link className="link">Publicaciones</Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="dropDown">

                        <div className="activator">Sobre la UJED</div>
                        <div className="content">
                            
                            <div className="col">
                                <div className="title">LA UNIVERSIDAD</div>
                                <Link className="link" to={{pathname:"/sobre-la-universidad"}}>Sobre Nosotros</Link> <br />
                                <Link className="link">Noticias</Link> <br />
                                <Link className="link">Galeria</Link> <br /> 
                                {/* <Link className="link">Historia</Link> */}

                            </div>
                            <div className="col">
                                <div className="title">INFORMACIÓN</div>
                                <Link className="link">Normativa y Documentos (FALTA)</Link> <br />
                                <a href="http://transparencia.ujed.mx" className="link">Portal de Transparencia</a> <br />
                                <a href="http://transparencia.ujed.mx/directorio" className="link">Directorio Institucional</a> <br />
                                <a href="https://contraloria.ujed.mx/" className="link">Contraloría Social</a> <br />
                                <Link className="link" to={{pathname: "/sistema-integral-de-gestión-de-calidad"}}>Sistema Integral de Gestión de Calidad</Link> <br />
                                
                            </div>
                            <div className="col">
                                <div className="title">PROGRAMAS INSTITUCIONALES</div>
                                <Link className="link" to={{pathname: "/igualdad-de-genero"}}>Igualdad de Género en la UJED</Link> <br />
                            </div>
                        </div>
                    </div>


                    <div className="dropDown">

                        <div className="activator">
                            <Link to={{pathname: "/login"} } style={{
                                textDecoration: "none"
                            }}>Administración</Link> 
                        </div>

                    </div>

                    <div className="dropDown">

                        <div className="activator">
                            <a href="https://escolares.ujed.mx/" style={{
                                textDecoration: "none"
                            }}>Control Escolar 
                            </a> 
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainNav;