import { useState } from "react";
import logo from "../../assets/images/ujed-logo.png";
import "./style.scss";

import { IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";

function MainNav() {
    const [mobileVisible,SetMobileVisible] = useState(true)
    return(
        <div className="mainNav">
            
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="mobileButton">
                <button onClick={(e)=>SetMobileVisible(!mobileVisible)}> <IoIosArrowDown/> </button>
            </div>

            <div className={"content "+(mobileVisible ? "visible" : "hidden")}>
                <div className="content__one">
                    <Link className="options" to={{pathname:"/"}}>Noticias</Link>
                    <Link className="options" to={{pathname:"/"}}>Galeria</Link>
                    <a className="options" href="https://escolares.ujed.mx">Control Escolar</a>
                    <Link className="options" to={{pathname:"/"}}>Administrador</Link>
                    <Link className="options" to={{pathname:"/"}}>Registrarse</Link>
                </div>
                <div className="content__two">

                    <div className="dropDown">

                        <div className="activator">Oferta Educativa</div>
                        <div className="content">
                            <div className="col">
                                <div className="title">PROGRAMAS POR NIVEL EDUCATIVO</div>
                                <Link className="link">Media Superior</Link> <br /> 
                                <Link className="link" to={{pathname:"/oferta-educativa/licenciaturas"}}>Licenciaturas e Ingenierías</Link> <br /> 
                                <Link className="link">Posgrados</Link> <br /> 
                            </div>
                            <div className="col">
                                <div className="title">OFERTA POR UNIDAD ACEDEMICA</div>
                                <Link className="link">Escuelas y Facultades</Link> <br />
                                <Link className="link">Universidad Virtual</Link>
                            </div>
                            <div className="col">
                                <div className="title">IDIOMAS</div>
                                <Link className="link">Centro de Idiomas</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropDown">

                        <div className="activator">Investigación</div>
                        <div className="content">
                            <div className="col">
                                <div className="title">INSTITUTOS</div>
                                <Link className="link">Bellas Artes</Link> <br /> 
                                <Link className="link">Ciencias Sociales</Link> <br /> 
                                <Link className="link">Investigación Científica</Link> <br /> 
                                <Link className="link">Investigación Histórica</Link> <br /> 
                                <Link className="link">Investigación Jurídica</Link> <br /> 
                                <Link className="link">Silvicultura</Link> <br /> 
                            </div>
                            <div className="col">
                                <div className="title">INVESTIGACIÓN</div>
                                <Link className="link">Proyectos de Investigación</Link> <br />

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
                                <Link className="link">Movilidad</Link> <br /> 
                                <a href="http://extension.ujed.mx" className="link">Extensión Universitaria</a> <br />
                                <Link className="link">Dirección General de Bibliotecas</Link> <br /> 
                                <Link className="link">Coordinación de Capacitación Institucional</Link> <br /> 

                            </div>
                            <div className="col">
                                <div className="title">SERVICIOS A LA COMUNIDAD</div>
                                <Link className="link">Dirección de Vinculación Institucional</Link> <br />
                                <Link className="link">Centro de Negocios</Link>
                                <Link className="link">Servicios ofrecidos por cada unidad</Link> <br /> 
                            </div>
                            <div className="col">
                                <div className="title">CULTURA Y DEPORTE</div>
                                <Link className="link">Difusión Cultural</Link> <br />
                                <Link className="link">Centro del Desarrollo del Deporte</Link>
                            </div>
                            <div className="col">
                                <div className="title">COMUNICACIÓN</div>
                                <Link className="link">Comunicación Social</Link> <br />
                                <Link className="link">TV UJED</Link><br />
                                <Link className="link">Publicaciones</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropDown">

                        <div className="activator">Sobre la UJED</div>
                        <div className="content">
                            
                            <div className="col">
                                <div className="title">LA UNIVERSIDAD</div>
                                <Link className="link">Contacto</Link> <br />
                                <Link className="link">Rectoría</Link>
                                <Link className="link">Identidad Institucional</Link> <br /> 
                                <Link className="link">Historia</Link>

                            </div>
                            <div className="col">
                                <div className="title">INFORMACIÓN</div>
                                <Link className="link">Normativa y Documentos</Link> <br />
                                <a href="http://transparencia.ujed.mx" className="link">Portal de Transparencia</a>
                                
                                
                            </div>
                            <div className="col">
                                <div className="title">PROGRAMAS INSTITUCIONALES</div>
                                <Link className="link">Igualdad de Género en la UJED</Link> <br />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainNav;