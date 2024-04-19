import Banner from "../../assets/images/banner.jpg"
import Slide1 from "../../assets/images/classroom.jpg"
import Slide2 from "../../assets/images/arquitecto.jpg"
import GenericList from "../../components/GenericList";
import GenericBanner from "../../components/genericBanner";
import GenericSection from "../../components/genericSection";
import GenericSlider from "../../components/genericSlider";
import MainNav from "../../components/mainNav";
import FileContainer from "../../components/fileContainer";

import Reporte2022 from "../../assets/files/Investigación de Talento Universum - UJED 2022/reporte.pdf"
import CienciasDeLaSalud2022 from "../../assets/files/Investigación de Talento Universum - UJED 2022/cienciasSalud.pdf"
import CienciasEmpresariales2022 from "../../assets/files/Investigación de Talento Universum - UJED 2022/Universum-UJED-2022-Ciencias-empresariales-comercio.pdf"
import CienciasNaturales2022 from "../../assets/files/Investigación de Talento Universum - UJED 2022/Universum-UJED-2022-Ciencias-naturales.pdf"
import Humanidades2022 from "../../assets/files/Investigación de Talento Universum - UJED 2022/Universum-UJED-2022-Humanidades-artes-educacion-derecho.pdf"
import IT2022 from "../../assets/files/Investigación de Talento Universum - UJED 2022/Universum-UJED-2022-Ingenieria-ti.pdf"

import Presentacion from "../../assets/files/Investigación de Talento Universom - UJED 2021/presentacion2021.pdf"
import Reporte2021 from "../../assets/files/Investigación de Talento Universom - UJED 2021/Universum-UJED-2021-Reporte-general.pdf";
import CienciasDeLaSalud2021 from "../../assets/files/Investigación de Talento Universom - UJED 2021/Universum-UJED-2021-Reporte-ciencias-de-la-salud.pdf"
import CienciasEmpresariales2021 from "../../assets/files/Investigación de Talento Universom - UJED 2021/Universum-UJED-2021-Reporte-ciencias-empresariales-comercio.pdf"
import CienciasNaturales2021 from "../../assets/files/Investigación de Talento Universom - UJED 2021/Universum-UJED-2021-Reporte-ciencias-naturales.pdf";
import Humanidades2021 from "../../assets/files/Investigación de Talento Universom - UJED 2021/Universum-UJED-2021-Reporte-humanidades-artes-educacion-derecho.pdf"
import IT2021 from "../../assets/files/Investigación de Talento Universom - UJED 2021/Universum-UJED-2021-Reporte-ingenieria-ti.pdf"


import ResumenEjecutivo from "../../assets/files/Investigación de Talento Universum - UJED 2020/Universum-UJED-2020-Resumen-ejecutivo.pdf"
import Reporte2020 from "../../assets/files/Investigación de Talento Universum - UJED 2020/Universum-UJED-2020-Reporte-general.pdf"
import CienciasDeLaSalud2020 from "../../assets/files/Investigación de Talento Universum - UJED 2020/Universum-UJED-2020-Reporte-ciencias-de-la-salud.pdf"
import CienciasEmpresariales2020 from "../../assets/files/Investigación de Talento Universum - UJED 2020/Universum-UJED-2020-Reporte-ciencias-empresariales-comercio.pdf"
import CienciasNaturales2020 from "../../assets/files/Investigación de Talento Universum - UJED 2020/Universum-UJED-2020-Reporte-ciencias-naturales.pdf"
import Humanidades2020 from "../../assets/files/Investigación de Talento Universum - UJED 2020/Universum-UJED-2020-Reporte-humanidades-artes-educacion-derecho.pdf"
import IT2020 from "../../assets/files/Investigación de Talento Universum - UJED 2020/Universum-UJED-2020-Reporte-ingenieria-ti.pdf"

import Footer from "../../components/footer";

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
                },
            ]} />

            <GenericSection title={"Documentos"}>
                <div className="subtitle">
                    Investigación de Talento Universum - UJED 2022
                </div>
            </GenericSection>

            <FileContainer listaDeArchivos={[
                {
                    nombre: "Reporte General",
                    link: Reporte2022
                },
                {
                    nombre: "Reporte: Ciencias de la Salud",
                    link: CienciasDeLaSalud2022
                },
                {
                    nombre: "Reporte: Ciencias Empresariales",
                    link: CienciasEmpresariales2022
                },
                {
                    nombre: "Reporte: Ciencias Naturales",
                    link: CienciasNaturales2022
                },
                {
                    nombre: "Reporte: Humanidades -Artes -Educación -Derecho",
                    link: Humanidades2022
                },
                {
                    nombre: "Reporte: Ingeniería / TI",
                    link: IT2022
                }
            ]} />

            <GenericSection>
                <div className="subtitle">
                    Investigación de Talento Universum - UJED 2021
                </div>
            </GenericSection>

            <FileContainer listaDeArchivos={[
                {
                    nombre: "Presentación",
                    link: Presentacion
                },
                {
                    nombre: "Reporte General",
                    link: Reporte2021
                },
                {
                    nombre: "Reporte: Ciencias de la Salud",
                    link: CienciasDeLaSalud2021
                },
                {
                    nombre: "Reporte: Ciencias Empresariales",
                    link: CienciasEmpresariales2021
                },
                {
                    nombre: "Reporte: Ciencias Naturales",
                    link: CienciasNaturales2021
                },
                {
                    nombre: "Reporte: Humanidades -Artes -Educación -Derecho",
                    link: Humanidades2021
                },
                {
                    nombre: "Reporte: Ingeniería / TI",
                    link: IT2021
                }
            ]} />

            <GenericSection>
                <div className="subtitle">
                    Investigación de Talento Universum - UJED 2020
                </div>
            </GenericSection>

            <FileContainer listaDeArchivos={[
                {
                    nombre: "Resumen Ejecutivo",
                    link: ResumenEjecutivo
                },
                {
                    nombre: "Reporte General",
                    link: Reporte2020
                },
                {
                    nombre: "Reporte: Ciencias de la Salud",
                    link: CienciasDeLaSalud2020
                },
                {
                    nombre: "Reporte: Ciencias Empresariales",
                    link: CienciasEmpresariales2020
                },
                {
                    nombre: "Reporte: Ciencias Naturales",
                    link: CienciasNaturales2020
                },
                {
                    nombre: "Reporte: Humanidades -Artes -Educación -Derecho",
                    link: Humanidades2020
                },
                {
                    nombre: "Reporte: Ingeniería / TI",
                    link: IT2020
                }
            ]} />

            <GenericList title={"Servicios"} list={[
                "Incubadora de Empresas.",
                "Seguimiento de Egresados.",
                "Emprendedurismo.",
                "Ujed en línea.",
                "Marcas y patentes.                "
            ]}/>

            <Footer/>
        
        </>
    )
}

export default VinculacionInstitucional;