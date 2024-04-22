import GenericBanner from "../../components/genericBanner";
import MainNav from "../../components/mainNav";
import GenericSection from "../../components/genericSection";
import GenericSlider from "../../components/genericSlider";
import Footer from "../../components/footer";


import BannerImg from "../../assets/images/banner.jpg"
import Slide1 from "../../assets/images/classroom.jpg"
import Slide2 from "../../assets/images/ciencias-sociales.jpg"
import Slide3 from "../../assets/images/economico administrativo.jpg"

function InvJuridica() {
    return(
        <>
        
            <MainNav/>
            
            <GenericBanner img={BannerImg}>
                Instituto de Investigaciones Jurídicas
            </GenericBanner>

            <GenericSection>
                <p>
                El Instituto de Investigaciones Jurídicas tiene como propósito 
                fundamental la investigación para generar y difundir conocimientos 
                en el campo del Derecho. Para la consecución de sus objetivos rigen 
                los principios de libertad de Cátedra e Investigación, así como de 
                libre manifestación de las ideas.
                </p>
                <br />
                <p>
                Además de sus 32 años de experiencia en el área de investigación, el 
                personal de investigación adscrito a esta dependencia universitaria y 
                la sólida infraestructura física con que se cuenta, como lo son su 
                equipamiento tecnológico, cubículos y una biblioteca especializada, es 
                importante destacar que el Instituto de Investigaciones Jurídicas cuenta 
                con la colaboración de investigadores de la Facultad de Derecho y 
                Ciencias Políticas de la propia Universidad Juárez y de los estudiantes de 
                la División de Estudios de Postgrado e Investigación a través de mecanismos 
                institucionales como los Cuerpos Académicos y las Redes de Investigación.
                </p>
                <br />
                <p>
                El Instituto de Investigaciones Jurídicas ve fortalecido su quehacer a través 
                de grupos de investigación organizados en donde participan investigadores, 
                profesores y alumnos quienes desarrollan trabajos de investigación en diversos 
                campos del derecho y de la problemática social que debe ser resuelta a través 
                de las normas jurídicas que regulan la convivencia social, el bien común y 
                la justicia, en su sentido más amplio.
                </p>
                <br />
                <p>
                Otra de sus fortalezas radica en las redes de investigación de las cuales forma parte; 
                hoy en día el Instituto cuenta con convenios de colaboración y cooperación en materia 
                de investigación jurídica con institucionales educativas nacionales e internacionales. 
                En el ámbito internacional se han signado convenios con la Facultad de Ciencias 
                Sociales de Cuenca de la Universidad de Castilla-La Mancha, España y con la Facultad 
                de Derecho de la Universidad de la Habana, Cuba.
                </p>
                <br />
                <p>
                En lo que respecta al ámbito nacional desde hace varios años se ha trabajado 
                conjuntamente con profesores investigadores de la Facultad de Derecho de la 
                Universidad Autónoma del Estado de México y de la Facultad de Derecho de la 
                Universidad Autónoma de Sinaloa, desarrollando proyectos de investigación de han 
                dado como resultado la publicación de varios libros.
                </p>
                <br />
                <p>
                La formación de recursos humanos está presente en la mayoría de las actividades 
                que se realizan, siendo los estudiantes de la Facultad de Derecho y de la División 
                de Estudios de Posgrado e Investigación los principales invitados a participar en las 
                actividades académicas que se realizan.
                </p>
                <br />
                <p>
                En la actualidad cuenta con tres Cuerpos Académicos de Investigación:
                </p>
                <br />
                <p>
                Aspectos Constitucionales de la Reforma del Estado Mexicano.Perspectiva del Derecho 
                Constitucional.Aspectos Avanzados de los Derechos Humanos.
                </p>
            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: Slide1,
                    title: "Misión",
                    body: "Contribuir al desarrollo de la investigación en la ciencia del derecho, que permita mejorar el conocimiento práctico de la profesión y la comprensión de los problemas en la sociedad del conocimiento, a través de esquemas flexibles y creativos de difusión y de acciones de extensión, articulación y vinculación social."
                },
                {
                    img: Slide2,
                    title: "Visión",
                    body:"Transformar el Instituto de Investigaciones Jurídicas de la UJED, para consolidarse como la institución de excelencia en el Estado de Durango a través de programas de investigación, innovadores, competitivos y flexibles acordes con el contexto social donde se desarrolla. \n\nParticipar en programas de pregrado y posgrado flexibles, abiertos, innovadores, permanentes, con el entorno nacional e internacional.\n\nConsolidar la formación de cuerpos académicos con un perfil deseable en un proceso de actualización permanente, que permita desempeñar con calidad las funciones de investigación, para contribuir a mejorar la transmisión del conocimiento a los alumnos y el avance de la ciencia jurídica.\n\nActualizar el marco normativo de la unidad académica para coordinar correctamente los objetivos que la misma persigue."
                },
                {
                    img: Slide3,
                    title: "Objetivos",
                    body:"Contribuir al avance del conocimiento en el campo del Derecho. \n\nContribuir mediante la difusión de los resultados de sus investigaciones a la actualización de los Profesionales del Derecho.\n\nProporcionar información jurídica a Instituciones Públicas y Privadas.\n\nAsesorar a Instituciones Públicas y Privadas en aquellos asuntos que requieran de Investigación Jurídica.\n\nEstablecer los mecanismos de coordinación con los demás Institutos y Dependencias afines, locales, nacionales e internacionales."
                }
            ]} />


            <GenericSection title={"Dirección"}>
            Torre de Institutos.  <br />
            Av. Veterinaria No. 501, esquina con Blvd. del Guadiana. <br />
            Circuito Universitario. Investigación. C.P. 34120. <br />
            Durango, Dgo. México <br />
            <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1hEIS_KOUMvygGB93LgEi6PqESto&ll=24.0127039%2C-104.6896628">Ver en mapa</a>
            </GenericSection>

            <GenericSection title={"Datos de contacto"}>
                Tel: (618) 827 12 25. <br />
                E-mail: iijujed@ujed.mx
            </GenericSection>

            <Footer />
        </>
    )
}

export default InvJuridica;