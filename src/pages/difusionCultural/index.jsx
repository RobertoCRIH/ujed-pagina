import BannerImg from '../../assets/images/banner.jpg'
import Slide1 from '../../assets/images/artista.jpg'
import slide2 from '../../assets/images/arquitecto.jpg'
import Slide3 from '../../assets/images/carreras.jpg';

import GenericBanner from '../../components/genericBanner';
import GenericSection from '../../components/genericSection';

import MainNav from "../../components/mainNav";
import Footer from "../../components/footer";
import GenericSlider from '../../components/genericSlider';


function DifusionCultural() {
    return(
        <>
        
            <MainNav/>
            <GenericBanner img={BannerImg}>
                Dirección de Difusión Cultural
            </GenericBanner>

            <GenericSection>
            La Dirección de Difusión Cultural es la dependencia encargada de coadyuvar en la difusión y extensión de las diferentes manifestaciones artísticas y culturales que se generan no solamente al interior de la institución, sino a nivel local, regional, nacional y universal, contribuyendo con ello a la formación integral de los estudiantes y a la de la sociedad en general.
            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: Slide1,
                    title: "Misión",
                    body:"La Dirección de Difusión Cultural fortalece la tercera función sustantiva de la UJED, que es la difusión y extensión de la cultura y los servicios, y  tiene como objetivo coadyuvar con la misión institucional, contribuyendo con la formación integral de los estudiantes y de la sociedad en general, mediante la investigación, rescate, conservación, producción, promoción, divulgación, fomento, administración y difusión de las manifestaciones artísticas y culturales en un entorno incluyente, plural y de autogestión, procurando el fortalecimiento de la identidad y la calidad en los bienes servicios.                    "
                },
                {
                    img: slide2,
                    title: "Visión",
                    body: "En el año 2018, la Dirección de Difusión Cultural es un organismo que cuenta con el proyecto cultural más ambicioso del estado y su función está articulada a la par con la docencia e investigación, recuperando su carácter académico y proyectando a nuestra universidad como un referente de cultura a nivel local, nacional e internacional, mediante la oferta autofinanciable de sus proyectos y servicios culturales y acreditada por organismos especializados.                    "
                },
                {
                    img: Slide3,
                    title: "Objetivos",
                    body: "La Dirección de Difusión Cultural tiene entre sus propósitos principales, contribuir a la formación integral de los estudiantes, a través de su contacto con las artes y las diversas manifestaciones culturales, fortaleciendo sus conocimientos y valores de identidad; así como extender y difundir la cultura local, regional, nacional y universal a los universitarios y a la sociedad, coadyuvando a la investigación, rescate, preservación y difusión de los valores y tradiciones artísticas y culturales fomentando la formación de públicos y contribuyendo con ello con la misión institucional.                    "
                }
            ]}/>

            <GenericSection title={"Servicios"}>
                <p>
                La Dirección de Difusión Cultural en una dependencia comprometida con el desarrollo integral de los estudiantes universitarios, así como de los académicos y trabajadores y de la sociedad en general, por ello, ofrece la oportunidad de acercamiento para la apreciación, práctica, difusión y preservación de las artes y la cultura, a través los siguientes servicios:
                </p>

                <div className='subtitle'>
                Grupos artísticos y solistas representativos de la UJED.
                </div>

                <p>
                Los grupos artísticos y solistas representativos de la UJED trabajan con el objetivo de acercar a la comunidad universitaria y a la sociedad en general a las diferentes manifestaciones de las artes: música, teatro, cine, danza, en sus diferentes vertientes y géneros: tradicional, folclórica, contemporánea, clásica, con el objetivo de acrecentar su conocimiento del arte y la cultura local, regional, nacional y universal.
                </p>

                <div className='subtitle'>
                Grupos artísticos
                </div>

                <p>
                Los Talleres Artísticos tienen el objetivo el objetivo de acercar a los estudiantes universitarios a experiencias grupales e interpersonales, a través de la práctica de las diferentes manifestaciones artísticas, que les apoye en su formación profesional y personal.
                </p>

                <div className='subtitle'>
                Talleres artísticos
                </div>

                <p>

                 -   Proyecto Multidisciplinario de Artes “PATIN DEL DIABLO”
                <br /> -   Taller Universitario de Tango y Baile de Salón
                <br /> -   Taller de Danza Arabe y Expresión Corporal del Grupo “MUJERES DE ARENA”
                <br /> -   Taller del Grupo de Teatro “PROSCENIO”
                <br /> -   Taller de Coreografía Contemporánea del Grupo “CORPUS DI BALLO”
                <br /> -   Taller de Música de Cámara
                <br /> -   Club de Canto “GENERACIONES”
                <br /> -   Taller del Grupo “NORTEÑO JUVENIL”
                <br /> -   Taller de Guitarra Armónica
                <br /> -   Taller de música “ROCK Y JAZZ”
                <br /> -   Taller de Danza Folclórica (Principiantes, avanzados y Grupo representativo)
                <br /> -   Academia de Danza Regional (Infantil, Juvenil y Grupo representativo)
                <br /> -   Rondallas Femenil y Varonil Universitarias
                <br /> -   Mariachi Juvenil Universitario

                </p>

                <div className='subtitle'>
                Maestros de ceremonias
                </div>

                <p>
                Los maestros de ceremonias son académicos con una formación profesional en la conducción de eventos de diversa índoles: oficiales, solemnes, artísticoa, deportivos y académicos, entre otros, brindan servicio a todas las dependencias de la UJED que lo solicitan.


                </p>
            </GenericSection>

            <GenericSection title={"Dirección"}>
            Blvd. Guadiana No. 407 <br />
            Fraccionamiento Ciudad Deportiva. <br />
            C.P. 34120. <br />
            Durango, Dgo. México. <br />
            </GenericSection>

            <Footer />
        </>
    )
}

export default DifusionCultural;