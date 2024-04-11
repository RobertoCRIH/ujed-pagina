import BannerImg from '../../assets/images/soccer.jpg';
import GenericBanner from '../../components/genericBanner';
import GenericSection from '../../components/genericSection';
import GenericSlider from '../../components/genericSlider';
import Footer from "../../components/footer";


import MainNav from "../../components/mainNav";

function DesarrolloDelDeporte() {
    return(
        <>
        
            <MainNav/>
            <GenericBanner img={BannerImg}>
                Centro del Desarrollo del Deporte Universitario
            </GenericBanner>

            <GenericSection>
            El Centro de Desarrollo del Deporte, es el área donde se les brinda servicios de índole deportivo, recreación y uso adecuado del tiempo libre, tanto para formación integral del alumno, así como para tener una mejor vida saludable.
            <br /> <br />
            Es el encargado de los Equipos Representativos de Nuestra Máxima Casa de Estudios de Superior y Media Superior, además de prestar servicios de medicina, nutrición y psicología a los universitarios, también se brindan a la comunidad en general.
            </GenericSection>

            <GenericSlider objArray={[
                {
                    img: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    title: "Coordinación de Metodología",
                    body: "Controla y acompaña el proceso sistemático de las capacidades generales y las condiciones para el rendimiento del deporte específico, aplicando los conceptos científicos que rigen el proceso integral óptimo de rendimiento deportivo de excelencia, para determinar los componentes del diagnóstico y definición de objetivos de calidad en el proceso de preparación del deportista.                    "
                },
                {
                    img: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    title: "Coordinación Administrativa.                    ",
                    body: "Coadyuvar con la Dirección en la planeación, organización, coordinación y supervisión de los recursos humanos, financieros y materiales con que se cuenta, a fin de proporcionar oportunamente los servicios administrativos que se requieran para el desarrollo de las funciones sustantivas de la dependencia."
                },
                {
                    img: "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    title: "Coordinación de Deportes Selectivos",
                    body: "El objetivo es controlar el proceso de Preparación de la Universiada y los JUDENEMS y eventos oficiales de fogueo que se llevan año con año, se brinda el espacio de capacitación a los Técnicos que se encargan de la preparación de los equipos de los diferentes niveles."
                },
                {
                    img: "https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    title: "Coordinación de Promoción Deportiva",
                    body: "Programas que se encargan de la promoción del deporte de alto rendimiento, promocional, de iniciación y recreativo, en las diferentes escuelas y facultades de Nuestra Universidad mediante torneos de cada una de las disciplinas deportivas."
                },
                {
                    img: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    title: "Coordinación de Medicina y Ciencias Aplicadas al Deporte.",
                    body: "Se ofrecen gratuitamente a deportistas universitarios evaluaciones, tratamiento médico y prevención de lesiones, en el servicio de Medicina y Ciencias Aplicadas al Deporte con Especialistas en Medicina Deportiva, Terapia Física, Nutrición y Psicología."
                },
                {
                    img: "https://images.pexels.com/photos/12266715/pexels-photo-12266715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    title:"Coordinación de Escuelas Infantiles",
                    body: "El CEDDU oferta a la sociedad en general escuelas deportivas de edades infantiles y juveniles para encausarlos al deporte competitivo y selectivo de la UJED."
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUkJh3L-1Th3tJD7UOYJdDd_v8l3_oCuAeEHKqLr7Fw&s",
                    title: "Coordinación de la Escuela de Futbol Infantil y Juvenil PUMAS-UJED.",
                    body: "Con el objetivo de preparar y especializar a niños y jóvenes, la Escuela Infantil y Juvenil ofrece acompañamiento Metodológico, Médico, Psicológico y Nutricional a los futuros talentos deportivos desarrollando las habilidades Físicas Técnicas y Tácticas propias del futbol. La escuela infantil actualmente trabaja con alumnos que van desde los 4 hasta los 15 años de edad, ofertando a la sociedad en general así como a la comunidad Universitaria."
                }
            ]}/>

            <GenericSection title={"Identidad institucional"}>
                <div className='subtitle'>
                Misión
                </div>

                <p>
                Brindar servicios de atención profesional en lo relativo a la cultura física y deporte, para incidir a la formación integral de los estudiantes universitarios y asegurar el deporte de alto rendimiento, promocional, de iniciación y recreativo, coadyuvando al fortalecimiento académico, a la salud y el uso adecuado del tiempo libre.
                </p>

                <div className='subtitle'>
                Visión
                </div>

                <p>
                Ser un espacio que ofrezca programas sistemáticos del deporte y la cultura física, en instalaciones adecuadas para su práctica, con resultados de excelencia deportiva a nivel nacional e internacional.
                </p>
            </GenericSection>

            <GenericSection title={"Dirección"}>
            Enrique Carrola Antuna s/n <br />
            Gimnasio de la Unidad Deportiva CCH-UJED. <br />
            C.P. 34270. <br />
            Durango, Durango, México. <br />
            </GenericSection>

            <GenericSection title={"Datos de contacto"}>
                Tel: (618) 827 12 07. <br />
                E-mail: ceddu@ujed.mx

            </GenericSection>

            <Footer/>
        
        </>
    )
}

export default DesarrolloDelDeporte;