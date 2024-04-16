import Banner from "../../assets/images/posgrado.jpg"
import Slide1 from "../../assets/images/arquitecto.jpg"
import Slide2 from "../../assets/images/ceneval.jpg"
import Slide3 from "../../assets/images/ing-agropecuario.jpg"

import GenericBanner from "../../components/genericBanner";
import GenericSlider from "../../components/genericSlider";
import MainNav from "../../components/mainNav";
import GenericSection from "../../components/genericSection";
import GenericList from "../../components/GenericList";
import Footer from "../../components/footer";

function ControlCalidad(params) {
    return(
        <>
        
        <MainNav/>

        <GenericBanner img={Banner}>
            Sistema Integral de Gestión de Calidad
        </GenericBanner>

        <GenericSection title={"Sobre Nosotros..."}>

        </GenericSection>

        <GenericSlider objArray={[
            {
                img: Slide1,
                title: "Misión",
                body:"Apoyar a que los procesos académicos y de gestión proporcionen productos y servicios de calidad e incrementen la satisfacción a los usuarios y partes interesadas, a través de la implementación, mantenimiento y mejora continua del sistema de gestión de calidad para que contribuya al logro de la misión de la Institución."
            },
            {
                img: Slide2,
                title: "Visión",
                body: "Para el 2024, contar con un Sistema de Gestión de Calidad consolidado y reconocido por los usuarios, que permita ser una administración moderna, con programas educativos acreditados (nacional e internacional) y procesos certificados que contribuyan al logro de la visión de la Institución."
            },
            {
                img: Slide3,
                title: "Política de Calidad",
                body: "La Universidad Juárez del Estado de Durango acorde a su dirección estratégica está comprometida a ofrecer servicios académicos, de investigación, administrativos y culturales, de forma eficiente, oportuna, transparente y con objetivos de calidad definidos que contribuyan a satisfacer las necesidades y expectativas de nuestros usuarios y partes interesadas integrando sus procesos en un Sistema de Gestión de Calidad, a través de la normatividad institucional aplicable y de la mejora continua soportada en la Norma ISO 9001 vigente."
            }
        ]}/>
        <br />

        <GenericList title={"Objetivos de calidad"} list={[
            "Consolidar y Mantener el Sistema de Gestión de Calidad en la UJED.",
            "Promover la estandarización de los procesos y sus controles procurando mejores resultados en cuanto a la calidad del servicio educativo.",
            "Fortalecer la competencia laboral del personal de la UJED.",
            "Impulsar el uso eficiente de los recursos y la generación de información confiable, transparente y oportuna de la gestión institucional, para optimizar la asignación de los recursos con que cuenta la institución.",
            "Incrementar la satisfacción de los usuarios en relación al servicio que ofrecen los procesos del SGC.",
            "Promover la actualización en los procesos institucionales desarrollando servicios ágiles y funcionales para el beneficio de las Partes Interesadas.",
            "Fortalecer la vinculación institucional a través de acciones pertinentes de la difusión, extensión de los servicios, la cultura, el arte y el deporte."
        ]}/>

        <GenericSection title={"Sitio web"}>
            <p> Visita el sitio web del Sistema Integral de Gestión de Calidad de la UJED para poder aprender más. </p>
            <button onClick={e=>{
                window.location.href = "http://scalidad.ujed.mx/"
            }}>
                Ir al sitio
            </button>
        </GenericSection>

        <Footer/>
        
        </>
    )
}

export default ControlCalidad;