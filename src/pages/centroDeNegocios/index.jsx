import BannerImg from '../../assets/images/ujed banner.jpg';
import Slider1 from '../../assets/images/carreras.jpg';
import Slider2 from '../../assets/images/classroom.jpg';
import Slider3 from '../../assets/images/arquitecto.jpg';

import GenericBanner from "../../components/genericBanner";
import GenericSection from '../../components/genericSection';
import GenericSlider from '../../components/genericSlider';
import MainNav from "../../components/mainNav";
import Footer from "../../components/footer";


function CentroDeNegocios() {
    return(
        <>
            <MainNav/>

            <GenericBanner img={BannerImg}>
                Centro de Negocios
            </GenericBanner>
        
            <GenericSection title={"Servicios"}>
                <ul>
                    <li>
                    Análisis de mercado y emprendedurismo.
                    </li>

                    <li>
                    Incubadora de Empresas.
                    </li>

                    <li>
                    Gestión y apoyo financiero.
                    </li>

                    <li>
                    Asesoría Legal.
                    </li>

                    <li>
                    Etiquetado NOM 051.
                    </li>

                    <li>
                    Comercio Exterior.
                    </li>

                    <li>
                    Registro de Marca.
                    </li>

                    <li>
                    Redes Sociales.
                    </li>
                </ul>
            </GenericSection>


            <GenericSlider objArray={[
                {
                    img: Slider1,
                    title: "Misión",
                    body: "Generar una nueva cultura empresarial y de líderes emprendedores con habilidades y valores, que generen impacto económico en su entorno.                    "
                },
                {
                    img: Slider2,
                    title: "Visión",
                    body: "Inspirar a lograr tus sueños para trascender en la vida.                    "
                },
                {
                    img: Slider3,
                    title: "Valores",
                    body: "Empatía, trabajo en equipo, innovación, tenacidad, compromiso.                    "
                }
            ]} />

            <GenericSection title={"Dirección"}>
            Circuito interior Av. Veterinaria s/n. <br />
            A un costado de la Facultad de Ciencias Químicas. <br />
            C.P. 34113. <br />
            Durango, Dgo. México. <br />
            </GenericSection>

            <Footer/>
        </>
    )
}

export default CentroDeNegocios;