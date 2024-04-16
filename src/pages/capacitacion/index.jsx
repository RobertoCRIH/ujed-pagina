import Banner from "../../assets/images/banner.jpg"
import Slider1 from "../../assets/images/ceneval.jpg";
import Slider2 from "../../assets/images/classroom.jpg";
import Slider3 from "../../assets/images/banner.jpg";
import GenericList from "../../components/GenericList";
import FileContainer from "../../components/fileContainer";
import Footer from "../../components/footer";
import GenericBanner from "../../components/genericBanner";
import GenericSection from "../../components/genericSection";
import MainNav from "../../components/mainNav";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';


import linkSolicitud from "../../assets/files/Solicitud_de_validacion_y_verificacion.4.docx"
import linkCaratula from "../../assets/files/caratulaExpediente.docx";
import linkDescCurso from "../../assets/files/descCurso.docx";
import linkExpositor from "../../assets/files/fichaExpositor.docx";
import linkInstructor from "../../assets/files/instructor.xlsx";
import linkAsistencia from "../../assets/files/asistencia.docx"
import PageSwitch from "../../components/pageSwitch";
import { useState } from "react";
import GenericSlider from "../../components/genericSlider";
function CapacitacionInstitucional() {

    
    const stateList =[
        
        "Identidad Institucional",
        "Servicios, Eventos y Padrón de Expertos",
        "Información General",
    ]

    const [currentState,setCurrentState] = useState("Identidad Institucional")

    function pageStatemachine() {
        switch (currentState) {
            case "Servicios, Eventos y Padrón de Expertos":
                return(
                    <>
                    
                    <GenericSection title={"Servicios"}>
                        <div className="subtitle">
                        Cursos presenciales
                        </div>
                        <div className="subtitle">
                            Cursos virtuales
                        </div>
                        <p>
                        Los cursos virtuales se ofrecen a través del Sistema Universidad Virtual
                        </p>

                        <button onClick={e=>{
                            navigation("/universidad-virtual")
                        }}>Ir al sistema de universidad virtual</button>

                        <div className="subtitle">
                        Validación de cursos de las URES
                        </div>

                        <p>
                        Para tramitar la validación de un curso, favor de enviar al correo capacitacion@ujed.mx  los siguientes documentos:
                        </p>

                        
                    </GenericSection>

                    <FileContainer listaDeArchivos={[
                        {
                            nombre: "Formato de Solicitud",
                            link: linkSolicitud
                        },
                        {
                            nombre: "Caratula del Expediante",
                            link: linkCaratula
                        },
                        {
                            nombre: "Descripción general del curso",
                            link: linkDescCurso
                        },
                        {
                            nombre: "Ficha técnica del expositor",
                            link: linkExpositor
                        },
                        {
                            nombre: "Evaluación al instructor y logística del curso",
                            link: linkInstructor
                        },
                        {
                            nombre: "Lista de asistencia",
                            link: linkAsistencia
                        }
                    ]}/>

                    <Alert variant="warning" style={{
                        margin: "30px 10%",
                    }}>
                        Necesitas entregar evidencia fotográfica de los documentos y entregar tu 
                        material de apoyo utilizado en el curso.

                    </Alert>
                        
                    <GenericSection>
                        <p>
                            Una vez recibido, revisado y validado el Expediente de Capacitación, recibirás un correo para acudir a la Coordinación de Capacitación Institucional a entregar las constancias a validar.
                        </p>
                    </GenericSection>

                    <GenericSection title={"Eventos"}>
                        Para poder ver los eventos planteados por la Coordinación de Capacitación Institucional,
                        visita nuestro apartado de noticias.
                    </GenericSection>

                    <GenericSection title={"Padrón de expertos"}>
                        <p>
                        Si estás interesado en ingresar al padrón de expertos, contesta el <a href="https://capacitadores.ujed.mx/">formulario de capacitación.</a>
                        </p>
                        <p>
                        Este padrón de expertos tiene la finalidad de identificar a los profesores altamente capacitados para la impartición de cursos dentro de la Universidad. Actualiza tus datos y tendrás muchas oportunidades.
                        </p>
                    </GenericSection>
                    
                    </>
                )  
                
            case "Identidad Institucional":
                return(
                    <>
                        <GenericSection title={"Identidad Institucional"}>

                        </GenericSection>
                    
                        <GenericSlider objArray={[
                            {
                                img: Slider1,
                                title: "Misión",
                                body: "Garantizar la capacitación y el desarrollo continuo del personal de la Universidad mediante programas y expositores actualizados que contribuyan a formar una Institución de Educación Superior con calidad Mundial."
                            },
                            {
                                img: Slider2,
                                title: "Visión",
                                body: "Formalizar los procesos de capacitación en las URES que conforman la Universidad, asegurando un impacto medible que mejore las competencias en el personal."
                            },
                            {
                                img: Slider3,
                                title: "Objetivos",
                                body: "Fortalecer el talento de los Recursos Humanos al servicio de la UJED, mediante un proceso de formación continua, dirigido al desarrollo de las competencias laborales que permitan alcanzar estándares de desempeño organizacional de calidad mundial certificada, mediante cursos de acción en los que sea el talento humano de su personal la fuerza que impulse el cambio organizacional sostenible altamente competitivo."
                            }
                        ]}/>

                        <GenericSection title={"Valores"}>
                            <div className="subtitle">
                            Trabajo en Equipo
                            </div>
                            <p>
                            Construir un nuevo estilo de trabajo que promueva el 
                            desarrollo del equipo, que permita la participación en 
                            la toma de decisiones y el logro de resultados superiores 
                            a los que se alcanzarían individualmente.
                            </p>

                            <div className="subtitle">
                            Mejora Continua
                            </div>
                            <p>
                            Es nuestro pilar para crecer sin detenernos. Queremos brindar 
                            los mejores servicios para el desarrollo personal y del equipo 
                            de trabajo generando en nuestro ámbito laboral un clima creativo 
                            e innovador.
                            </p>
                            <div className="subtitle">
                            Calidad
                            </div>
                            <p>
                            Brindamos servicios de alta calidad educativa orientados a mejorar 
                            los procesos laborales y las relaciones humanas dentro de nuestra 
                            Organización.
                            </p>
                            <div className="subtitle">
                            Compromiso
                            </div>
                            <p>
                            Con la institución Universitaria especialmente y con la comunidad en 
                            general para satisfacer sus necesidades de capacitación. Garantizamos 
                            un trabajo responsable dedicado e íntegro con cada participante de 
                            nuestros procesos de capacitación.
                            </p>

                            <div className="subtitle">
                            Perseverancia
                            </div>

                            <p>
                            Firmeza y constancia en la ejecución de los propósitos. Tendremos 
                            disposición a mantenernos firmes y constantes en la prosecución de 
                            acciones y emprendimientos de manera estable y continua hasta lograr 
                            el objetivo.
                            </p>

                            <div className="subtitle">
                            Comunicación
                            </div>

                            <p>
                            Nos comunicamos abierta y honestamente para cimentar las buenas 
                            relaciones en el equipo y entre los miembros de nuestra organización. 
                            Escuchamos las inquietudes, necesidades y dificultades, promoviendo el 
                            diálogo continuo y los consensos necesarios para que el trabajo en 
                            equipo se convierta en el camino óptimo para la realización de las 
                            tareas.
                            </p>

                            <div className="subtitle">
                            Integridad
                            </div>

                            <p>
                            Obrar con rectitud y probidad inalterables. Actuaremos con consonancia 
                            con lo que cada uno dice o considera importante. Incluye comunicar las 
                            intenciones, ideas y sentimientos abierta y directamente, y estar 
                            dispuesto a actuar con honestidad incluso en negociaciones difíciles 
                            con agentes externos.
                            </p>

                            <div className="subtitle">
                            Iniciativa
                            </div>

                            <p>
                            Adelantarse a los demás en su accionar. Nos adelantaremos a los demás en su 
                            accionar, marcando el rumbo por medio de acciones concretas. Los niveles de 
                            actuación van desde concretar decisiones tomadas en el pasado hasta la búsqueda 
                            de nuevas oportunidades o soluciones de problemas.
                            </p>

                            <div className="subtitle">
                            Innovación
                            </div>

                            <p>
                            Capacidad para modificar las cosas aun partiendo de formas no pensadas anteriormente.
                             Proporcionaremos ideas nuevas y diferentes ante problemas o situaciones requeridos 
                             por el propio puesto, la Institución, los usuarios o el segmento de la sociedad 
                             en donde se actúe a nombre de la UJED.
                            </p>

                            <div className="subtitle">
                            Empowerment
                            </div>

                            <p>
                            Dar poder al equipo de trabajo o potenciación del mismo. Es el hecho de delegar poder 
                            y autoridad a los subordinados y de conferirles el sentimiento de que son dueños y, 
                            al mismo tiempo, responsables de su propio trabajo.
                            </p>
                        </GenericSection>
                    
                    </>
                )
            
            case "Información General":
                return(
                    <>
                    
                        <GenericSection title={"Dirección"}>
                            Constitución 404 sur.  <br />
                            Zona Centro. C.P. 34000. <br />
                            Durango, Dgo. México. <br />
                            <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&mid=1SIHQWouJTk8A7cBOVU2iHKiMGOs&ll=24.02266917919688%2C-104.67074309999997&z=17">Ver en mapa</a>
                        </GenericSection>

                        <GenericSection title={"Datos de contacto"}>

                        Tel: (618) 827 12 53. Ext. 3915 y 3903. <br />
                        E-mail: capacitacion@ujed.mx    
                        </GenericSection>

                        <GenericSection title={"Directorio"}>
                            <div className="subtitle">Coordinadora</div>
                            <p>M.M. Claudia Irene Portillo del Campo</p>
                        </GenericSection>
                    
                    </>
                )
        
            default:
                break;
        }
    }

    const navigation = useNavigate()
    return(
        <>
        
        
            <MainNav/>

            <GenericBanner img={Banner}>
                Coordinación de Capacitación Institucional
            </GenericBanner>

            <PageSwitch lista={stateList}  passValue={setCurrentState}/>

            {pageStatemachine()}

            

            <Footer/>
        
        </>


    )
}

export default CapacitacionInstitucional;