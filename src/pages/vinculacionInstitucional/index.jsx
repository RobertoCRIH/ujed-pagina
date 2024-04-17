import Banner from "../../assets/images/banner.jpg"
import Slide1 from "../../assets/images/classroom.jpg"
import Slide2 from "../../assets/images/arquitecto.jpg"
import GenericList from "../../components/GenericList";
import GenericBanner from "../../components/genericBanner";
import GenericSection from "../../components/genericSection";
import GenericSlider from "../../components/genericSlider";
import MainNav from "../../components/mainNav";
import FileContainer from "../../components/fileContainer";

function VinculacionInstitucional() {
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={Banner}>
                Dirección de Vinculación Institucional
            </GenericBanner>

            <GenericSection title={"Identidad institucional"}>

            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: Slide1,
                    title: "Misión",
                    body: "Generar una nueva cultura empresarial a través de la formación de emprendedores, empresarios y empresas autosustentables y de calidad con alto impacto económico en su entorno."
                },
                {
                    img: Slide2,
                    title: "Visión",
                    body: "Ser el principal centro formador de liderazgo del estado y uno de los mejores del país."
                }
            ]} />

            <GenericSection title={"Documentos"}>
                <div className="subtitle">
                    Investigación de Talento Universum - UJED 2022
                </div>
            </GenericSection>

            <FileContainer listaDeArchivos={[
                {
                    nombre: "Reporte General",
                    link: ""
                }
            ]} />

            <GenericList title={"Servicios"} list={[
                "Incubadora de Empresas.",
                "Seguimiento de Egresados.",
                "Emprendedurismo.",
                "Ujed en línea.",
                "Marcas y patentes.                "
            ]}/>
        
        </>
    )
}

export default VinculacionInstitucional;