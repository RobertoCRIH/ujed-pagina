import BannerImg from '../../assets/images/banner.jpg'
import Slide1 from '../../assets/images/classroom.jpg';
import Slide2 from '../../assets/images/carreras.jpg'
import Slide3 from '../../assets/images/arquitecto.jpg'

import GenericBanner from "../../components/genericBanner";
import GenericSection from '../../components/genericSection';
import GenericSlider from '../../components/genericSlider';
import MainNav from "../../components/mainNav";
import Footer from "../../components/footer";


function Bibliotecas() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={BannerImg}>
                Dirección General de Bibliotecas
            </GenericBanner>

            <GenericSection>
                La Dirección General de Bibliotecas es un espacio de 
                acceso a la información que la UJED ofrece a su comunidad estudiantil, 
                docente y al público en general. Cuenta con horario de atención de lunes 
                a viernes de 8:00 a 21:00 horas y los sábados de 8:00 a 14:00 horas.
            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: Slide1,
                    title: "Misión",
                    body: "La Misión del Sistema Bibliotecario de la Universidad es apoyar a la docencia, la investigación y la difusión de la cultura; administrando los recursos informativos y proporcionando servicios bibliotecarios de excelencia a la comunidad universitaria y al público en general."
                },
                {
                    img: Slide2,
                    title: "Visión",
                    body: "El Sistema Bibliotecario de la Universidad será una organización líder capaz de atender todas las demandas de información de los usuarios con los recursos existentes, siendo su compromiso otorgar asesorías permanentes para que estos tengan la capacidad de transformar la información en conocimiento."
                },
                {
                    img: Slide3,
                    title: "Objetivos",
                    body:"Implantar, certificar y mantener al 2025 un Sistema de Gestión de la Calidad en la provisión de servicios bibliotecarios integrales en veintitrés bibliotecas de la UJED, basado en la Norma ISO 9001: 2015; respaldados por la normatividad institucional y el financiamiento predeterminado en el presupuesto universitario.\nMejorar y administrar los acervos bibliográficos de las bibliotecas del Sistema Bibliotecario año con año, para garantizar la prestación del servicio y poner a disposición de los usuarios el acervo bibliográfico."
                }
            ]} />

            <GenericSection title={"Servicios"}>

                <div className='subtitle'>
                    Repositorio Institucional
                </div>
                <p>
                    Accede a nuestro repositorio de escritos.
                </p>
                <button onClick={e=>{
                    window.location.replace("http://repositorio.ujed.mx/jspui/")
                }}>Ir al Repositorio Institucional</button>

                <div className='subtitle'>
                    Biblioteca Virtual UJED
                </div>
                <p>
                    Visita nuestra página de Facebook
                </p>
                <button onClick={e=>{
                    window.location.replace("https://www.facebook.com/dgbujed")
                }}>Ir a Facebook</button>

            </GenericSection>

            <GenericSection title={"Dirección"}>
            Blvd. Guadiana No. 403 <br />
            Fraccionamiento Ciudad Deportiva. <br />
            C.P. 34120. <br />
            Durango, Dgo. México. <br />
            <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1T5D5YKyl0InezqgfLclAouNmuiE&ll=24.014659664719385%2C-104.68935949116377">Ver en mapa</a>
            </GenericSection>

            <Footer/>

        </>
    )
}

export default Bibliotecas;