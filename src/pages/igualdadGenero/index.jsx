import Banner from "../../assets/images/mujeres-trabajando.jpg"
import FileContainer from "../../components/fileContainer";
import Footer from "../../components/footer";
import GenericBanner from "../../components/genericBanner";
import GenericSection from "../../components/genericSection";
import MainNav from "../../components/mainNav";
import file from "../../assets/files/Programa_Institucional_de_Igualdad_de_Genero.pdf";

function IgualdadGenero() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={Banner}>
                Igualdad de Género en la UJED
            </GenericBanner>
            
            <GenericSection title={"Introducción del documento"}>
                <p style={{
                    fontStyle: "italic"
                }}>
                "El documento que tienen en sus manos es una anhelo largamente acariciado por
                un grupo de universitarias y universitarios que consideramos que nuestra Institución
                no puede transitar hacia mejores escenarios, si no contempla y declara de manera
                puntual el derecho de las mujeres a alcanzar mejores condiciones para su desarrollo
                en igualdad de circunstancias que nuestros compañeros varones, y que estamos
                convencidos de que el respeto a los derechos humanos es un deber inherente a la
                vida universitaria y al respeto a la dignidad de cada uno de sus integrantes. 
                </p>

                <p style={{
                    fontStyle: "italic"
                }}>
                Celebramos y agradecemos además la iniciativa del Dr. Edgar Alan Arroyo
                Cisneros, un compañero universitario comprometido con su tiempo y su
                circunstancia, ya que derivado de su convocatoria se recibieron un número
                importante de iniciativas provenientes de las comunidades académicas de la UJED,
                que intentamos se vieran reflejadas en este Programa de Igualdad de Género, el
                cual será un documento abierto, flexible y en su operación dinámico, de tal suerte
                que pueda ir incorporando las propuestas que lo fortalezcan."
                </p>

                <p>

                    <b>
                        Para poder leer el documento completo, descárgalo aquí.
                    </b>

                </p>
            </GenericSection>

            <FileContainer listaDeArchivos={[
                {
                    nombre: "Igualdad de Género en la UJEd",
                    link: file
                }
            ]}/>

            <br />

            <br />

            <Footer/>
        
        </>
    )
}

export default IgualdadGenero;