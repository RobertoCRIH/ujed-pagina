import GenericBanner from "../../components/genericBanner";
import MainNav from "../../components/mainNav";

import Footer from "../../components/footer";


import ImgBanner from "../../assets/images/banner.jpg"

import Slide1 from "../../assets/images/classroom.jpg";
import Slide2 from "../../assets/images/ciencias-sociales.jpg"

import GenericSlider from "../../components/genericSlider";
import GenericSection from "../../components/genericSection";

function InvHistorica() {
    return(

        <>
        
            <MainNav/>

            <GenericBanner img={ImgBanner}>
                Instituto de Investigación Histórica
            </GenericBanner>

            <GenericSlider objArray={[
                {
                    img: Slide1,
                    title: "Misión",
                    body: "Generar conocimiento en función de las líneas prioritarias de investigación individual y colectiva, profundizando en el estudio de la historia y los problemas, especiarme los relacionados con el medio ambiente y el desarrollo sustentable en la región norte de México , propicia la actualización permanente en la formación teórico-metodológica y practica de su personal académico y colaboradores. Teniendo como uno de sus objetivos la vinculación entre la investigación y la docencia, para formar investigadores de manera integlal, plenos en el contexto amplio de educación, gestión, planeación, difusión y vinculación para la investigación."
                },
                {
                    img: Slide2,
                    title: "Visión",
                    body: "El Instituto de Investigaciones Históricas se percibe como una entidad académica consolidada en la construcción de conocimiento especializado individual y colectivo y líder de instituciones similares en el norte de México. Diseña y oferta estudios de posgrado de calidad. Su personal académico es multidisciplinar, calificado y responde a la pertinencia social de la educación superior en las diversas dimensiones que implican espacio y temporalidad. Su infraestructura y el uso de nuevas tecnologías son el complemento de su quehacer diario."
                }
            ]} />

            <GenericSection title={"Dirección"}>
                <p>
                Torre de Investigación 2º piso. <br />
                Blvd. del Guadiana No. 501. <br />
                Fracccionamiento Ciudad Universitaria. C.P. 34120. <br />
                Durango, Dgo. México <br />
                <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1ZPe5PtdXQSbjwkR9dVp4X05Ki3M&ll=24.012716200000003%2C-104.68964610000002">Ver en mapa</a>
                </p>
            </GenericSection>

            <GenericSection title={"Datos de contacto"}>
                Tel: (618) 827 12 41 <br />
                E-mail: iih@ujed.mx
            </GenericSection>

            <Footer />

        </>
    )
}

export default InvHistorica;