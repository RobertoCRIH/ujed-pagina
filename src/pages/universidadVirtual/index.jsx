import GenericBanner from "../../components/genericBanner";
import bannerImg from '../../assets/images/universidad virtual.jpg'
import MainNav from "../../components/mainNav";
import GenericSection from "../../components/genericSection";
import Footer from "../../components/footer";

import {useNavigate} from 'react-router-dom'

function UniversidadVirtual() {
    const navigation = useNavigate()
    return(
        <>  

            <MainNav/>

            <GenericBanner img={bannerImg}> 
                Sistema de Universidad Virtual
            </GenericBanner>

            <GenericSection title={""}>
                <p>
                El Sistema Universidad Virtual es el conjunto de Unidades Académicas, 
                direcciones y departamentos de la Administración Central de la Universidad 
                Juárez del Estado de Durango (UJED) que participan de manera directa o indirecta 
                en el diseño, creación e implementación de planes y programas de estudio formales 
                o de formación continua, en modalidades no convencionales, desde el nivel medio 
                superior, superior y posgrado.
                </p>
                <br />
                <p>
                La jefatura del SUV es una dependencia de la Subsecretaría General Académica de la 
                UJED, la cual es responsable de articular acciones colaborativas y educativas, proveer 
                asesoría e implementación de las tecnologías aplicadas a la educación, así como 
                software y hardware para el incremento de la cobertura con equidad y calidad en la UJED.
                </p>
            </GenericSection>

            <GenericSection title={"Oferta Educativa"}>
                <p>
                    Ve las carreras que tenemos disponibles para ti.
                </p>

                <button onClick={e=>{
                    navigation("/oferta-educativa/virtual")
                }}>Ver las carreras virtuales</button>
            </GenericSection>

            <GenericSection title={"Servicios"}>
                <div className="subtitle">
                Soporte técnico y accesibilidad a plataformas educativas en comunidades municipales
                </div>
                <p>
                La Universidad Juárez del Estado de Durango, preocupada por proveer accesibilidad 
                a la educación superior, aquellos que tienen dificultades geográficas, de tiempo o 
                económicas, a través de la jefatura del Sistema Universidad Virtual, genera acciones 
                de vinculación instalando doce Centros de Educación a Distancia con apoyo de los 
                siguientes municipios:
                </p>

                <br />

                <ul>
                    <li>Canatlán</li>
                    <li>
                    Nuevo Ideal
                    </li>
                    <li>
                    Santiago Papasquiaro
                    </li>
                    <li>
                    Panuco de Coronado
                    </li>
                    <li>
                    San Juan del Río
                    </li>
                    <li>
                    Vicente Guerrero
                    </li>
                    <li>
                    Guadalupe Victoria
                    </li>
                    <li>
                    Santa María del Oro
                    </li>
                    <li>
                    El Salto, Pueblo Nuevo
                    </li>
                    <li>
                    Rodeo
                    </li>
                    <li>
                    Nazas
                    </li>
                    <li>
                    Tepehuanes
                    </li>
                </ul>

                <br />

                <p>
                Los servicios que brindan los Centros de Educación a Distancia Municipales son los siguientes:
                </p>

                <br />

                <ul>
                    <li>
                    Equipo de cómputo.
                    </li>
                    <li>
                    Servicio de Escaneo.
                    </li>
                    <li>
                    Actividades enfocadas a una formación integral.
                    </li>
                    <li>
                    Acceso ilimitado a las bases de datos de la Biblioteca Central de la UJED.
                    </li>
                    <li>
                    Acceso a software educativo.
                    </li>
                </ul>

                <br />

                <div className="subtitle">
                    Asesorías
                </div>

                <p>
                El Sistema Universidad Virtual ofrece asesoría y acompañamiento en la adecuación 
                de planes y programas de estudio en modalidades no convencionales, así como en la 
                innovación pedagógica para las materias y programas de estudio presenciales.
                </p>

                <div className="subtitle">
                    Capacitación
                </div>

                <p>
                Para asegurar una optimización de las tecnologías aplicadas a la educación, se 
                ofrecen servicios de capacitación dirigidos a:
                <br />
                Docentes: 
                <br />
                <ul>
                    <li>
                        Diseño y aulas virtuales.
                    </li>

                    <li>
                        Uso y manejo de Moodle.
                    </li>

                    <li>
                        Uso de videoconferencia
                    </li>
                </ul>
                <br />
                Estudiantes 

                <ul>
                    <li>
                        Uso y manejo de Moodle y aulas virtuales.
                    </li>
                    <li>
                        Uso de videoconferencias.
                    </li>
                </ul>
                </p>

                <div className="subtitle">
                    Diseño y creación de aulas virtuales.
                </div>

                <p>
                Se ofrece apoyo para los docentes en el diseño y creación de
                 aulas virtuales para la modalidad presencial, el cual consiste en:
                </p>

                <br />

                <ul>
                    <li>
                    Creación de banners y cintillos.
                    </li>
                    <li>
                    Estructura y formato de material didáctico.
                    </li>
                    <li>
                    Edición y presentación de videos.
                    </li>
                    <li>
                    Diseño de logotipo de la asignatura.
                    </li>
                    <li>
                    Estructura de los contenidos del aula.
                    </li>
                    <li>
                    Adecuación de herramientas de comunicación síncrona y asíncrona, 
                    como el uso de videoconferencia multipunto, chats y foros para 
                    actividades educativas.
                    </li>
                </ul>


            </GenericSection>

            <GenericSection title={"Dirección"}>
                <p>
                Boulevard Guadiana Km 5.5, C.P. 34110.
                </p>
                <p>
                Edificio de la Escuela de Lenguas, 3º piso.
                </p>
                <p>
                Durango, Durango, México.
                </p>
                <p>
                    <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1gxFpQUGptcQoDu6aPK9Clc2xtLo&ll=24.014315999999987%2C-104.68923969999999">
                        Ver en mapa
                    </a>
                </p>
            </GenericSection>

            


            <Footer/>
        
        </>
    )
}

export default UniversidadVirtual;