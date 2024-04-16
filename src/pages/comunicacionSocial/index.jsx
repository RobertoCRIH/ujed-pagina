import Banner from "../../assets/images/banner.jpg"
import Slide1 from "../../assets/images/posgrado.jpg";
import Slide2 from "../../assets/images/ceneval.jpg";
import GenericBanner from "../../components/genericBanner";
import GenericSlider from "../../components/genericSlider";
import MainNav from "../../components/mainNav";
import GenericSection from "../../components/genericSection";
import GenericList from "../../components/GenericList";
import Footer from "../../components/footer";

function ComunicacionSocial() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={Banner}>
                Dirección de Comunicación Social
            </GenericBanner>
            
            <GenericSection title={"Identidad institucional"}>

            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: Slide1,
                    title: "Misión",
                    body:" La Universidad Juárez del Estado de Durango es una institución de educación pública que responde a las necesidades sociales del estado, la región y el país, mediante una oferta amplia de servicios educativos acreditados, operados todos a través de procesos administrativos certificados, orientada a la formación de técnicos, profesionales y científicos investigadores, bajo un modelo educativo innovador centrado en el aprendizaje y en la investigación científica de alto nivel, capaces de insertarse exitosamente en el mercado laboral profesional y promover el desarrollo sustentable, atendiendo la diversidad cultural y los principios de justicia social, para alcanzar la transformación de las condiciones de vida y el bienestar de la población."
                },
                {
                    img: Slide2,
                    title: "Visión",
                    body: "Es una Universidad Pública dinámica, con el reconocimiento social local, nacional e internacional, por la elevada calidad con que realiza sus funciones sustantivas y adjetivas, que contempla y desarrolla la diversidad cultural y responde a los problemas sociales para su transformación en oportunidades de convivencia y desarrollo social y económico, a través de innovaciones científico tecnológicas y de la socialización del conocimiento."
                }
            ]}/>

            <br />

            <GenericSection title={"Dirección"}>
                <p>
                Constitución 404 sur. <br />
                Zona Centro. C.P. 34000. <br />
                Durango, Dgo. México. <br />

                <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1vbzs70VHL5jd1lkehQmYZi04fZA&ll=24.022427900000004%2C-104.6708223">Ver en mapa</a>
                </p>
            </GenericSection>

            <GenericSection title={"Datos de contacto"}>
                <p>
                Tel: (618) 827 12 47. <br />
                E-mail: comunicacionsocial@ujed.mx <br />
                </p>
            </GenericSection>

            <GenericSection title={"Directorio"}>
                <div className="subtitle">
                    Directora
                </div>
                <p>
                    M.P.C.D. Linda Cristal Rodríguez Simental
                </p>
            </GenericSection>

            <Footer/>
        
        </>
    )
}

export default ComunicacionSocial;