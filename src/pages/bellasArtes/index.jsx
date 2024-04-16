import GenericBanner from "../../components/genericBanner";
import MainNav from "../../components/mainNav";

import BannerImg from '../../assets/images/artista.jpg'
import GenericSection from "../../components/genericSection";
import GenericSlider from "../../components/genericSlider";
import Footer from "../../components/footer";
import GenericList from "../../components/GenericList";
import DatosArea from "../../components/datosArea";



function BellasArtes() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={BannerImg}> Instituto de Bellas Artes </GenericBanner>

            <GenericSection title={"Sobre Nosotros..."}>
            El Instituto de Bellas Artes, perteneciente a la Universidad Juárez del Estado de 
            Durango, ha sido creado con el propósito de generar y coadyuvar en las políticas 
            públicas culturales del Estado, vinculándolas al desarrollo social y cultural de 
            la región, mediante la protección y difusión del patrimonio cultural tangible e 
            intangible de la entidad, el estímulo a la creatividad artística y la difusión 
            del arte y la cultura local, regional, nacional y universal, así como el fomento 
            a las bellas artes y la educación artística en sus diferentes áreas, para fortalecer 
            la identidad de los duranguenses.
            </GenericSection>


            <GenericSlider objArray={[
                {
                    img: "https://imgs.search.brave.com/6Tsizd0_xfEI0nM5SOTpN6MCNoVmSendF5a-dIk2ln0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZWZp/bmljaW9uLmRlL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEwLzA4/L2FydGlzdGEtMi5q/cGc",
                    title: "Misión",
                    body: "El Instituto de Bellas Artes de la UJED tiene como misión impulsar el desarrollo del arte y la cultura del Estado de Durango a través de la investigación, promoción y producción de las diversas manifestaciones artísticas, así como el rescate, protección y preservación del patrimonio cultural tangible e intangible de la entidad, incluyendo la capacitación en las principales áreas del arte, además del estímulo a la creatividad y expresión artística, logrando así una adecuada difusión del legado artístico-cultural local, regional, nacional y universal."
                },
                {
                    img: "https://imgs.search.brave.com/OPLWTprI_IUbb2Y2YWDgXB7koPhdhMFQtZty13lNRbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9rZXlz/dG9uZWFjYWRlbWlj/LXJlcy5jbG91ZGlu/YXJ5LmNvbS9pbWFn/ZS91cGxvYWQvZl9h/dXRvL3FfYXV0by9n/X2F1dG8vY19maWxs/L3dfMTI4MC9lbGVt/ZW50LzgyLzgyOTE0/X3BhaW50aW5nLmpw/Zw",
                    title: "Visión",
                    body: "El instituto de Bellas Artes de la UJED se consolidará como el mejor centro artístico de la entidad, proyectándolo como un instituto de prestigio a nivel nacional, constituyendo un organismo que coadyuve al acrecentamiento de la cultura y las artes mediante una preparación de calidad y excelencia que contribuya al desarrollo e impulso de las diferentes expresiones artísticas, a través de la práctica de los valores universales como el respeto, la honestidad, responsabilidad, ética y el compromiso social, resultando en una sólida formación y difusión de artistas mejor preparados para desarrollar su labor creativa y docente.                    "
                },
                {
                    img: "https://imgs.search.brave.com/xXoGXOiB4XUavrO_e3ZbHmQgi-qQ22LehDEUiKo9kKk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93ZWIt/aW1hZ2VzLnBpeHBh/LmNvbS9LaThfeDNW/UjhNYjlPWVliMm5X/YmJyYjFfNDROcERm/Mk9NeTRwTXMyTEVR/L3JzOmZpdDoxMjAw/OjAvcTo4MC9hSFIw/Y0hNNkx5OXdhWGh3/WVdOdmJTMXBiV2N1/Y0dsNGNHRXVZMjl0/TDJOdmJTOWhjblJw/WTJ4bGN5OHhOVGcy/T1RjM01EUTBMVGM1/T1RJeU5DMWhjblF0/YW05aU1XcHdaeTVx/Y0djPQ",
                    title: "Objetivos",
                    body: "Impulsar proyectos de investigación, rescate, promoción y difusión del patrimonio cultural, así como la capacitación a nivel superior de maestros, alumnos y egresados de las escuelas de arte, o la vinculación con otros centros y Universidades del país para la formación de las comunidades académicas relacionadas con las artes, además de ofrecer a la ciudadanía y a los visitantes un espacio que refleje la cultura duranguense y en el que se promueva el disfrute de las actividades artísticas generadas por los propios universitarios y aquéllos externos a ella que puedan contribuir al conocimiento y reconocimiento de nuestros valores de identidad.                    "
                }
            ]}/>

            <GenericList title={"Objetivos Generales"  } list={[
                "Crear un centro de información y orientación relativa al desarrollo del arte y la cultura en la entidad.",
                "Brindar cursos de capacitación a promotores, docentes, alumnos, artistas y creadores en temas relacionados con el desarrollo artístico y cultural.",
                "Impulsar proyectos para financiar temas de investigación, rescate, preservación y difusión del patrimonio artístico y cultural de nuestra entidad.",
                "Ofrecer un espacio que brinde a los visitantes locales y foráneos la oportunidad de conocer nuestro patrimonio artístico y cultural.",
                "Coadyuvar en la formación de profesionales de las artes por medio de impartición de cursos, diplomados, seminario, talleres, congresos, conferencias etc."
            ]}/>



            <GenericSection title={"Dirección"}>
                <p>
                Negrete 700 esq. Bruno Martínez. Zona Centro
                </p>
                <p>
                C.P. 34000.
                </p>
                <p>
                Durango, Dgo. México.
                </p>
                <p>
                    <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&hl=es&mid=1yv0iqGJ78td5YioHkZJXeRuOdhQ&ll=24.025402019005362%2C-104.6717370043686&z=17"></a>
                </p>
                
            </GenericSection>

            <GenericSection title={"Datos de contacto"}>
                <p>
                    <b>Tel: </b> (618) 827 12 05 <br />
                    E-mail: institutodebellasartes@ujed.mx
                    

                    <br />
                <br />

                </p>
            </GenericSection>
            <Footer/>
            
        </>
    )
}

export default BellasArtes;