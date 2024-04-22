import GenericBanner from "../../components/genericBanner";
import GenericSection from "../../components/genericSection";
import MainNav from "../../components/mainNav";
import Footer from "../../components/footer";

import Slide1 from "../../assets/images/ceneval.jpg"
import Slide2 from "../../assets/images/idiomas.jpg"
import Slide3 from "../../assets/images/ciencias-sociales.jpg"


import BannerImg from '../../assets/images/banner.jpg'
import GenericSlider from "../../components/genericSlider";

function CienciasSociales() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={BannerImg}>
                Instituto de Ciencias Sociales
            </GenericBanner>

            <GenericSection>
            El Instituto de Ciencias Sociales es una institución pública que contribuye al desarrollo del conocimiento social y humanístico a través de la investigación; mediante sus procesos de investigación y formación docente promueve en los sujetos una mayor comprensión de los fenómenos sociales y sus efectos, privilegia la formación intelectual, una mentalidad libre y responsable fortaleciendo así la identidad universitaria, y su papel en la sociedad duranguense y del país en su conjunto.
            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: Slide1,
                    title: "Misión",
                    body: "El Instituto de Ciencias Sociales es una institución pública que contribuye al desarrollo del conocimiento social y humanístico a través de la investigación; mediante sus procesos de investigación y formación docente promueve en los sujetos una mayor comprensión de los fenómenos sociales y sus efectos, privilegia la formación intelectual, una mentalidad libre y responsable fortaleciendo así la identidad universitaria, y su papel en la sociedad duranguense y del país en su conjunto.                    "
                },
                {
                    img: Slide2,
                    title: "Visión",
                    body: "El Instituto de Ciencias Sociales de la UJED consolidará sus líneas de investigación social y humanística, cumpliendo con los estándares nacionales y con reconocimiento nacional e internacional.                    "
                },
                {
                    img: Slide3,
                    title: "Objetivos",
                    body:"Realizar investigación enfocada en las ciencias sociales y las humanidades. \nProducir conocimiento producto de los investigadores de nuestro Instituto.\nDifundir el conocimiento producto de las investigaciones surgidas en el Instituto, así como de los paradigmas más importantes en las ciencias sociales y las humanidades.\nPromover planes de estudios de posgrado en las áreas de las ciencias sociales y humanidades.\nFomentar cuerpos colegiados y proyectos de investigación en los campos de trabajo del Instituto."
                }
            ]} />

            <GenericSection title={"Dirección"}>
                <p>
                Torre de Institutos. <br />
                Av. Veterinaria No. 501, esquina con Blvd. del Guadiana. <br />
                Circuito Universitario. <br />
                C.P. 34120 Durango, Dgo. México. <br />
                <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1JqsOG6ZNuaQodEL6SQMTinFF7iA&ll=24.012593700000007%2C-104.6896622">Ver Mapa</a>
                </p>
            </GenericSection>

            <GenericSection title={"Datos de contacto"}>
                <p>
                Tel: (618) 827 12 30. <br />
                E-mail: icsociales@ujed.mx
                </p>
            </GenericSection>

            <Footer/>
        
        </>
    )
}

export default CienciasSociales;