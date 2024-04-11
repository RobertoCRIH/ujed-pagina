import GenericBanner from "../../components/genericBanner";
import MainNav from "../../components/mainNav";

import BannerImg from "../../assets/images/banner.jpg";
import Slider1 from "../../assets/images/cienciasbasicas.jpg"
import Slider2 from "../../assets/images/quimico.jpg";
import Slider3 from "../../assets/images/salud.jpg";

import GenericSection from "../../components/genericSection";
import GenericSlider from "../../components/genericSlider";
import Footer from "../../components/footer";


function InvCientifica() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={BannerImg}>
                Instituto de Investigación Científica "Dr. Roberto Rivera Damm"
            </GenericBanner>

            <GenericSection title={""}>
                <p>
                El Instituto de Investigación Científica fue el primer Instituto de nuestra Universidad, fundado el 7 de Octubre de 1970. Actualmente formamos parte de la D.E.S. de Salud, contamos con 22 académicos-investigadores, y 16 personas en tareas administrativas; catorce académicos cuentan con el reconocimiento de PRODEP y ocho con reconocimiento del Sistema Nacional de Investigadores(SNI).
                </p>
                <br />
                <p>
                Se participa en las siguientes líneas de investigación: Salud reproductiva, Salud mental de diferentes grupos poblacionales, Salud Pública comunitaria, Sistemas y servicios de salud, Salud ocupacional, Genética molecular, Medio ambiente y contaminación y salud.
                </p>

            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: Slider1,
                    title: "Misión",
                    body: "Somos una unidad académica de la Universidad Juárez del Estado de Durango, dedicada a desarrollar investigación básica y aplicada con la finalidad de generar conocimientos científicos, formar recursos humanos y prestar servicios a la comunidad en el área de la salud, vinculada a las instituciones públicas y privadas con calidad, responsabilidad en el quehacer, ética en el desempeño, trabajo en equipo y calidez en la atención."
                },
                {
                    img: Slider2,
                    title: "Visión",
                    body: "El Instituto de Investigación Científica de la Universidad Juárez del Estado de Durango, será un centro de investigación reconocido por su liderazgo nacional en el campo de la investigación en salud pública, y específicamente en el ámbito de la salud reproductiva a través de la investigación y educación de posgrado, apoyando sus acciones sustantivas en indicadores estratégicos de calidad."
                },
                {
                    img: Slider3,
                    title: "Objetivos",
                    body: "Trabajo transdisciplinario: La perspectiva que permite la articulación cognitiva y metodológica que posibilitael abordaje de diversos objetos y procesos de conocimiento, para su mejor comprensión e interpretación. \nResponsabilidad: Asumir los compromisos establecidos con la sociedad, la institución y la unidadacadémica, para el cumplimiento cabal de su misión.\nSentido ético: Es el comportamiento dentro del marco de principios y valores que regulan elejercicio profesional."
                }
            ]} />

            <GenericSection title={"Cuerpos Académicos"}>
                <p>
                La planta académica del Instituto de Investigación Científica “Dr. Roberto Rivera Damm” se encuentra trabajando de forma colegiada, al interior de los Cuerpos Académicos (CA) con perfiles idóneos y de calidad a las Líneas de Generación y Aplicación de Conocimiento de los propios CA’s, entre los que se tienen actualmente, los siguientes:
                </p>
                <br />

                <ul>
                    <li>
                    Cuerpo académico de genética, ambiente y salud
                    </li>
                    <li>
                    Cuerpo académico de salud pública y epidemiología
                    </li>
                    <li>
                    Cuerpo académico de salud y ciencias sociales
                    </li>
                    <li>
                    Investigación biomédica y molecular aplicada a las ciencias de la salud
                    </li>
                </ul>

                <br />

            </GenericSection>

            <GenericSection title={"Servicios a la Comunidad"}>
                <p>
                Los servicios hacia la comunidad en general son a través de la Clínica de Salud Sexual, Reproductiva y Familiar, y el Laboratorio de Análisis Clínicos del propio instituto, ofertando servicios específicos con personal altamente capacitado y especializado que brindan una atención con calidad, responsabilidad, ética y con un compromiso social hacia la comunidad.
                </p>
            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: "https://static.tuasaude.com/media/article/nl/bf/ginecologista_24748_l.jpg",
                    title: "Clínica de Salud Sexual, Reproductiva y Familiar",
                    body: "Con un horario de atención del servicio médico de lunes a viernes de 8:00 am a 14:30 hrs \nJefa de la Clínica de Salud Sexual, Reproductiva y Familiar: Dra. Nadia Velázquez Hernández\nDirección: Avenida Universidad esquina con Volantín s/n. CP: 34000, Zona Centro.\nTeléfono Recepción Clínica: +52 618 8271216"
                },
                {
                    img: "https://escuelafarmacia.com/wp-content/uploads/analisis-clinicos.jpg",
                    title: "Laboratorio de Análisis Clínicos",
                    body: "Entre los servicios que presta el laboratorio de análisis clínicos, de manera general, involucran estudios en las áreas de química clínica, hematología, parasitología, inmuno/endocrinología, citopatología y uroanálisis, todos ellos evaluados dentro del programa externo de aseguramiento de la calidad (PACAL)."
                }
            ]} />

            <GenericSection title={"Dirección"}>
            Avenida Universidad esq. con Volantín. <br />
            Zona centro. C.P. 34000. <br />
            Durango, Dgo. México. <br />
            </GenericSection>

            <Footer/>
        
        </>
    )
}

export default InvCientifica;