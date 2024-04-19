import Banner from "../../assets/images/carreras.jpg"
import AccordionWithImage from "../../components/accordionWithImage/Index";

import Fondo from "../../assets/images/circles-light.webp"
import Cultura from "../../assets/images/cultura.jpg"
import Deporte from "../../assets/images/deporte.jpg";
import GrupoC from "../../assets/images/grupos-civicos.jpg"
import RadioTV from "../../assets/images/radio-y-tv.jpg"
import Movilidad from "../../assets/images/movilidad.jpg"
import Becas from "../../assets/images/becas.jpg"
import Tutorias from "../../assets/images/tutorias.jpg"
import AtencionMedica from "../../assets/images/atencion-medica.jpg";
import Idiomas from "../../assets/images/idiomas.jpg"

import GenericBanner from "../../components/genericBanner";
import MainNav from "../../components/mainNav";
import Footer from "../../components/footer";

import ListGroup from 'react-bootstrap/ListGroup';


function Aspirtantes() {
    return(
        <>
        
            <MainNav/>


            <GenericBanner img={Banner}>
                Aspirantes a la UJED
            </GenericBanner>

            <div style={{
                margin: "30px 10%",
                padding: "20px",
                borderRadius: "5px",
                border: "1px solid grey",
                backgroundImage: `url(${Fondo})`
            }}>

                <h2 style={{
                    margin: "25px 0",
                    textAlign: "center",
                    fontSize: "24px"
                }}>INSCRIPCIONES</h2>

                <p>
                Si estás interesado en estudiar en la UJED te sugerimos estar 
                pendiente de la información que se publica en esta página durante los periodos 
                de inscripciones.
                </p>

                <li>
                    <b> Nivel técnico, medio superior y licenciatura: </b>
                    Consulta el proceso de registro en el sitio de la <a href="https://escolares.ujed.mx/"> Dirección de Servicios Escolares. </a>

                </li>
                <br />

                <p style={{
                    marginBottom: "30px"
                }}>
                Para ambos niveles toda la información la encontrarás en el Portal de Servicios Escolares 
                durante el periodo de inscripciones. De igual manera, en este apartado se publicarán los 
                avisos importantes, así como los resultados del examen CENEVAL.
                </p>
            </div>


            <div style={{
                margin: "0 10%",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid grey",
                padding: "10px"
            }}>
                <img src="https://www.ujed.mx/img/tarjetas/servicios-escolares.png" alt="" />
                <div >
                    <h4>
                        Dirección de Servicios Escolares    
                    </h4> 
                    <p>
                    Conoce el proceso de inscripción, actualiza tu información de alumno, verifica 
                    los trámites pendientes que tengas pendientes. Toda la información que necesitas 
                    está en el portal de Servicios Escolares.
                    </p>
                    <a href="https://escolares.ujed.mx/">Ir a Servicios Escolares</a>
                </div>
            </div>

            
            

            <AccordionWithImage title={"Formación cultural"} 
            desc={"A través de la Dirección de Difusión Cultural, la UJED realiza diversos eventos culturales, tales como conciertos, exposiciones multidisciplinarias, recitales, presentaciones de libros, encuentros literarios, Cine Club Universitario y coordina diversos grupos artísticos a los cuales puedes integrarte, talleres de danza folklórica, teatro, danza contemporánea, mariachi, rondallas, entre otros."}
            img={Cultura}
            />

            <AccordionWithImage
            title={"Formación deportiva"}
            desc={"El Centro de Desarrollo del Deporte Universitario (CEDDU) año con año realiza la Inter-Universiada, en la que compiten los diferences equipos de cada una de las unidades académicas. Además existen los equipos institucionales en 12 distintas disciplinas: balón cesto, volibol de sala y playa, beisbol, karate do, atletismo, futbol soccer y de bardas, ajedrez, hand ball, tenis de mesa, tae kwon do, gimnasia aeróbica y halterofilia. También la Escuela de Educación Física y Deportes (EEFyD) cuenta con su equipo de elevaciones mixtas."}
            img={Deporte}
            />

            <AccordionWithImage 
            title={"Grupos cívicos"}
            desc={"Como alumno de la UJED, puedes integrarte a los grupos cívicos, integrados por las escoltas y bandas de guerra, que son un símbolo de identidad juarista.            "}
            img={GrupoC}
            />

            <AccordionWithImage 
            title={"Acceso a radio y televisión"}
            desc = {"Si te gusta la locución, Radio Universidad te ofrece un espacio para que propongas un programa de interés general o relacionado con las escuelas, facultades y/o carreras de la UJED. Igualmente, TV UJED te ofrece un espacio para expresarte, en donde puedes hacer tu servicio social o prácticas profesionales."}
            img={RadioTV}
            />

            <AccordionWithImage 
            title={"Movilidad"}
            desc={"La UJED cuenta con un programa de intercambio académico que impulsa la movilidad estudiantil para que sus alumnos tengan la oportunidad de cursar una parte de tus estudios en otras instituciones nacionales y extranjeras. Dichas estancias deben estar comprometidas en su totalidad a la obtención de conocimientos académicos acordes al plan de estudio de la Institución de origen. También se considera en este concepto las estancias cortas de investigación o de prácticas profesionales."}
            img={Movilidad}
            />

            <AccordionWithImage 
            title={"Becas"}
            desc={"Ofrecemos diversos programas de becas, como son las de Manutención y las de Prospera, ambas otorgadas por la Secretaría de Educación Pública. Además se cuenta con apoyo a madres solteras, del Consejo Nacional de Ciencia y Tecnología, y el programa institucional de becas “Héctor García Calderón”. Igualmente, la Universidad apoya a los alumnos que se encuentran realizando estancia de movilidad y que cumplen con los requisitos necesarios."}
            img={Becas}
            />

            <AccordionWithImage 
            title={"Tutorías"}
            desc={"Como alumno de la UJED puedes solicitar un tutor en la coordinación de Tutorías de tu escuela. El tutor es un docente responsable de proporcionarte asesoría, métodos de aprendizaje y estudio, orientación psicológica y en su caso si se requiere canalizar al alumno a algún centro de apoyo especializado."}
            img={Tutorias}
            />

            <AccordionWithImage 
            title={"Atención Médica"}
            desc={"En la UJED, el alumnado tiene derecho a ser afiliado al Seguro Facultativo, con el cual se le proporciona atención médica a través del Instituto Mexicano del Seguro Social (IMSS). Además, en temporadas se desarrollan campañas de prevención y promoción a la salud en las que se completa el esquema de vacunación, medición de presión arterial, glucosa, talla y peso, y se proporciona información de salud reproductiva."}
            img={AtencionMedica}
            />

            <AccordionWithImage 
            title={"Aprendizaje de Idiomas"}
            desc={"Puedes estudiar idiomas en los diferentes centros que tiene la Universidad, como la Escuela de Lenguas a través de su Centro de Lenguas o su programa PUAALI para alumnos universitarios, el centro de idiomas de la FECA y la Alianza Francesa."}
            img={Idiomas}
            />

            <Footer/>
        </>
    )

}

export default Aspirtantes;

