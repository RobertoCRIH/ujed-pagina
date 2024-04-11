import GenericBanner from "../../components/genericBanner";
import MainNav from "../../components/mainNav";



import BannerImg from "../../assets/images/ing-agropecuario.jpg"
import GenericSection from "../../components/genericSection";
import Footer from "../../components/footer";


function Silvicultura() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={BannerImg}>
                Instituto de Silvicultura e Industria de la Madera
            </GenericBanner>

            <GenericSection title={"Misión"}>
            Generar nuevo conocimiento y formar recursos humanos en manejo, aprovechamiento y 
            conservación de recursos naturales.
            </GenericSection>

            <GenericSection title={"Visión"}>
            Ser una unidad académica líder en el Norte de México en la generación 
            de conocimiento y la formación de recursos humanos en manejo, aprovechamiento, y 
            conservación de recursos naturales.
            </GenericSection>

            <GenericSection title={"Objetivos"}>
            <div className="subtitle">
                Específicos
            </div>

            Realizar investigación relativa a las áreas de silvicultura y manejo forestal, ecología y medio ambiente, tecnología e industria de la madera y en economía y administración forestal.
            <br /> <br />
            Contar con un cuerpo colegiado consolidado para abordar los problemas referenciados a las áreas de trabajo del Instituto.
            <br /> <br />
            Lograr una vinculación efectiva con los diferentes integrantes de la actividad forestal del País.
            <br /> <br />
            Promover la interrelación con la docencia de manera que se permita la participación de los investigadores del ISIMA en la función docente, así como de alumnos y maestros en los trabajos de investigación.
            <br /> <br />
            Establecer convenios de vinculación con otras universidades e instituciones de investigación en áreas afines, tanto nacionales como extranjeras, a fin de intercambiar experiencias, realizar proyectos conjuntos y colaboraciones sobre trabajos de investigación.
            <br /> <br />
            Promover el desarrollo académico de investigadores y personal técnico del Instituto, sobre la base de un paradigma de calidad, superación personal y actualización científica y tecnológica.
            <br /> <br />
            Propiciar políticas que permitan la realización de estudios, trabajos de investigación, asesorías, programas de desarrollo y capacitación de personal que sean autofinanciables.
            <br /> <br />
            Mantener una estructura académico-administrativa eficiente y acorde con el desarrollo creciente del Instituto, con flexibilidad de adaptación a los cambios que exige la dinámica social, académica y científico-tecnológica.
            <br /> <br />
            Promover la participación democrática del personal del Instituto en el análisis y solución a los problemas internos del mismo, en un marco de respeto y libertad, congruente con los principios y espíritus universitarios, utilizando las instancias colegiadas de consulta y análisis, como son: el Consejo Interno del Instituto, las academias y las comisiones especiales.
            <br /> <br />
            Desarrollar y realizar acciones de difusión del conocimiento científico y tecnológico, de los resultados de los trabajos de investigación y en general del quehacer académico del Instituto, como una forma de trascender y servir a la sociedad.
            <br /> <br />
            Trabajar por la superación de la Universidad y del Instituto, buscando a través del trabajo diario hacer destacar a la Institución por su prestigio y calidad académica.
            <br /> <br />
            <div className="subtitle">
                General
            </div>
            
            Realizar investigación y desarrollar tecnología de punta para favorecer el aprovechamiento integral sustentable de los recursos forestales del país; en especial del Estado de Durango, difundir el conocimiento generado para solucionar problemas del entorno forestal en un marco de amplia vinculación con la sociedad.
            </GenericSection>


            <GenericSection title={"Dirección"}>
            Torre de Institutos. <br />
            Av. Veterinaria No. 501, esquina con Blvd. del Guadiana. <br />
            Circuito Universitario. Investigación. C.P. 34120. <br />
            Durango, Dgo. México <br />
            <a href="https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1a2Ux251Jxk0QwG-TpOqqOVUgqE4&ll=24.01270509999999%2C-104.68963799999999">Ver en mapa</a>
            </GenericSection>

            
            <Footer />
        </>
    )
}

export default Silvicultura;