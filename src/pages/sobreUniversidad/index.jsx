import { useState } from 'react';
import BannerImg from '../../assets/images/banner.jpg'
import GenericBanner from '../../components/genericBanner';

import MainNav from "../../components/mainNav";
import PageSwitch from '../../components/pageSwitch';
import GenericSection from '../../components/genericSection';
import Footer from "../../components/footer";

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




function SobreUniversidad() {

    const states =[
        "Contacto",
        "Identidad Institucional",
        "Historia"
    ]

    const [curState,setCurState] = useState("Contacto")

    function StateSwitch() {
        switch (curState) {
            case "Contacto":
                return(
                    <>
                    
                        <GenericSection title={"Contacto"}>
                            <p>
                                Conoce los datos de contacto específicos para una unidad o programa académico visitando su sección correspondiente dentro de este sitio web.
                            </p>
                            <p>
                                Para consultas generales puedes escribirnos a <b style={{color: "blue"}}>atencionusuarios@ujed.mx</b>  o enviar el formulario que aparece más adelante.
                            </p>
                        </GenericSection>

                        <GenericSection title={"Redes Sociales"}>

                            <div style={{fontSize: "40px",display: "flex",gap:"20px"}}>
                                <a href="https://www.facebook.com/UJEDOficial/" style={{color:"#B31312"}}>
                                    <FaFacebook/>
                                </a>

                                <a href="https://www.facebook.com/UJEDOficial/" style={{color:"#B31312"}}>
                                    <FaSquareXTwitter/>
                                </a>
                            </div>

                        </GenericSection>
                    
                    </>
                )
            
            case "Identidad Institucional":
                return(
                    <>
                    
                        <GenericSection title={"Identidad Institucional"}>
                            <div className='subtitle'>
                                Misión
                            </div>
                            <p>
                            Transformar la sociedad, mediante la formación integral de bachilleres, profesionales, científicos, creadores y ciudadanos conscientes de su responsabilidad social, promoviendo la investigación científica y la innovación en el conocimiento, la vinculación y extensión universitaria. Ser una Institución pública, autónoma, laica, incluyente, que genere de manera integral la cultura y el deporte para contribuir a una sólida formación universitaria, respetuosa de la diversidad, con principios humanistas, comprometida con la equidad y justicia social, atenta a la ampliación pertinente de la oferta y cobertura educativa, potencializando las tecnologías como un detonante para el desarrollo regional en el marco de un mundo globalizado.
                            </p>

                            <div className='subtitle'>
                                Visión 2024
                            </div>

                            <p>
                                Llegar a ser una Universidad integrada y vinculada de manera sólida con el desarrollo socioeconómico y ambiental del Estado, con amplio reconocimiento y prestigio internacional, comprometida con la formación profesional de sus estudiantes como ciudadanos éticos y competentes; generadora y transmisora del conocimiento, la cultura, el arte y el deporte, bajo un marco de transparencia y rendición de cuentas.
                            </p>

                            <p>
                            Esta Visión 2024, implica que la UJED debe caracterizarse por promover su funcionamiento institucional en base a los ideales de rasgos distintivos como: equidad e inclusión, derechos humanos, valores institucionales, innovación, y transparencia y rendición de cuentas., enmarcadas en los siguientes espacios.
                            </p>

                            <p>
                            <br /> <br /> En lo social, refiriendo a este, el de ofrecer a la comunidad duranguense un servicio educativo de calidad y que la Institución sea reconocida por promover acciones para que todos los alumnos sean atendidos en condiciones de equidad a fin de fortalecer la inclusión, como parte de esa distinción se practicará con el ejemplo los valores institucionales definidos en este documento rector. Asimismo, en un marco del respeto a los derechos humanos, la UJED reconoce el ejercicio pleno de la educación, de las personas y poblaciones diversas que han sido históricamente objeto de la exclusión, discriminación y estigmatización, por lo que buscará planificar, aplicar y evaluar estrategias y programas de acción que permitan ofrecer las condiciones óptimas para el ejercicio pleno de sus derechos.
                            <br /> <br /> En lo administrativo, caracterizándose este, en el mejor uso de los recursos para garantizar un buen servicio a la sociedad, creando condiciones para que los organismos colegiados accedan con mayor facilidad a las bolsas de recursos específicos y la propia institución se beneficie con un presupuesto ordinario y extraordinario suficiente para su quehacer educativo y bajo este proyecto ofrecer un servicio a la comunidad garantizando la correcta aplicación de los recursos en un marco de transparencia y rendición de cuentas y fortalecer la eficiencia así como la obtención de resultados de desempeño institucional.
                            <br /> <br /> En lo profesional, que distinguida a nuestra Universidad por su calidad educativa y por la formación de ciudadanos profesionales íntegros. Ofrecer a la comunidad profesionistas formados con valores y principios éticos, competentes, que sepan aplicar el conocimiento en contextos reales y resuelvan problemática de la sociedad, que sean emprendedores e innovadores y contribuyan al desarrollo sostenible del estado y la nación.
                            </p>
                        </GenericSection>
                    
                    </>
                )
            
            case "Historia":
                return(
                    <>
                    
                        <GenericSection title={"Historia"}>

                            <p>
                            En 1773 se remodeló el edificio y fue ocupado por el Seminario Conciliar hasta el año de 1859 en que fue clausurado. En 1856 el Lic. Don José de la Bárcena fundó el Colegio Civil del Estado y ocupó el actual Edificio Central de la Universidad el 25 de Enero de 1860. Su Lema original fue VIRTUTI ET MERITO.
                            <br /> <br />   
                            De origen, nuestra Institución estuvo preñada por una concepción religiosa del mundo, pero también del espíritu vivaz y crítico que dentro del pensamiento religioso representaron los Jesuitas. Toda la segunda mitad del siglo XIX se refleja en la educación la pugna de la Iglesia y el Estado, ya que si bien el Colegio Civil se creó como alternativa al Seminario Conciliar, donde se formaban Eclesiásticos y Abogados, esto se hizo cercenando al Seminario algunas de sus cátedras y buena parte de su biblioteca así como los Académicos que habían sido fruto de aquellos claustros del Seminario.
<br /> <br />   
                            En 1872 al morir Don Benito Juárez, los alumnos y maestros solicitaron al Gobierno y este accedió a cambiar el nombre de Instituto del Estado, por el de Instituto Juárez. Sus colores originales que lo identifican son el rojo y el blanco. En el año de 1900 marca un momento importante en la vida de la Institución, con la creación de la primera Sociedad de Alumnos del Instituto Juárez, quien definió como su objetivo La adquisición de todo tipo de conocimientos.
<br /> <br />   
                            Hacia el año de 1938 con su incorporación en la Universidad de México, adopta el lema POR MI RAZA HABLARÁ EL ESPÍRITU, el mismo escudo de la actual U.N.A.M., y en forma no oficial la influencia de los colores azul y oro.
<br /> <br />   
                            A principios del año de 1957 el Instituto Juárez solo contaba en su haber con las Escuelas de Derecho, Preparatoria, Comercial Práctica, Enfermería, Música y Pintura. El 21 de Marzo de 1957 el Gobernador del Estado Lic. Francisco González de la Vega, publicó un decreto por el que el Instituto Juárez se eleva a la categoría de Universidad, llamándose desde entonces UNIVERSIDAD JUÁREZ DEL ESTADO DE DURANGO.
<br /> <br />   
                            Algunos factores que determinaron el cambio de Instituto Juárez a Universidad, fueron: la necesidad del Estado de promover la producción socioeconómica, así como evitar la fuga de cerebros hacia otros estados más desarrollados, logrando así un mayor arraigo de los profesionistas en nuestro Estado. Con el rango de Universidad se crearon las Escuelas de Medicina, Contaduría y Administración, y la de Medicina Veterinaria, con lo que se abría a nuevos campos del saber y a profesiones científicas con las que aún no se tenía contacto.
<br /> <br />   
                            Por decreto de fundación la Ley Orgánica de la U.J.E.D., que la Institución está íntegramente al servicio de la sociedad, de acuerdo con un elevado sentido ético y de servicio social. El conocimiento como meta común, tiene que acrecentarse y difundirse, aspirado que al ser derramado a la sociedad sirva para su beneficio. La técnica y la ciencia deben seguir un camino paralelo a la cultura y el humanismo.
<br /> <br />   
                            Universidad significa Universalidad y nada de lo que es humano nos debe parecer ajeno. Universidad significa unidad de lo diverso, como una expresión de lo que es común a todos los hombres, independientemente de su raza, nacionalidad, creencias religiosas o políticas.
<br /> <br />   
                            La Universidad de siempre, la Universidad que queremos debe ser una respuesta a nuestra voluntad y a nuestro esfuerzo; debemos ser congruentes con lo que pensamos y lo que hacemos, honestos con nuestra verdad y convicciones, donde no haya lugar a actitudes espectaculares, demagógicas y populistas. Los Universitarios debemos participar activamente en todas las acciones que favorezcan el desarrollo de nuestra cultura, conservando las buenas costumbres de paz, ayuda mutua, respeto y demás principios morales.
<br /> <br />   
                            La investigación no dejó de ser poco más que un renglón en el papel hasta 1970 en que se creó el Instituto de Investigación Científica de la U.J.E.D., con autonomía Académica en su estructura orgánica que le permitió un desarrollo sin ninguna relación fundamental con escuelas, facultades y otros institutos de investigación de la propia Universidad.
<br /> <br />   
                            Si bien la Universidad Juárez del Estado de Durango, ha tenido un desarrollo real desde su creación hasta la fecha, su crecimiento ha sido sin duda alguna lento, comparativamente con otras instituciones más jóvenes.
<br /> <br />   
                            De la historia entonces, podemos entresacar para retomar herencias que ennoblecen la condición humana, pero también nos da pauta para reconocer el origen de nuestros males y atrasos, en la medida de la cual, la revisión del pasado ofrece posibilidades de cambio de futuro.
<br /> <br />   
                            En el caso particular de nuestra Universidad, se inició desde 1988 un proceso de reforma que pretende preparar a la Institución para asumir el reto de la modernidad y en forma decidida participar activamente en la nueva sociedad que se está formando actualmente.
<br /> <br />   
                            La reestructuración y reforma de la Institución, se enfrenta a un gran número de limitantes que impiden efectuar los cambios con la celeridad que sería deseable. Las soluciones a nuestros problemas institucionales son efectuar cambios, buscar alternativas, convencer en forma razonada, a la brevedad posible, conciliando los plazos que toda planeación debe contener para alcanzar los objetivos deseados.
<br /> <br />   
                            Los programas de reformas de nuestra Universidad se consideran positivos, en el sentido de que propician un mejoramiento de la educación en el País y dan una respuesta a las demandas de la población, para formar profesionistas capaces y responsables, así como un gran sentido de identidad nacional. La Universidad Juárez del Estado de Durango, se plantea un modelo de desarrollo que permita a la Institución su crecimiento integral, armonizando los intereses nacionales, del Estado y de la comunidad, con los suyos propios.
<br /> <br />   
                            La U.J.E.D., para el cumplimiento de sus fines institucionales busca la superación de la academia, fijando su interés en la búsqueda de la excelencia y conjugando esfuerzos en post de este ideal.
<br /> <br />   
                            La investigación científica y tecnológica deber ser fortalecida en la Universidad y deberá considerarse prioritaria en el sentido de su significación como elemento de independencia y soberanía para el país.
<br /> <br />   
                            La cultura regional y nacional tiene absoluto respaldo de la Universidad para su permanente difusión, de igual forma lo tienen el desarrollo intelectual y artístico de los duranguenses atendiendo a los principios nacionales y valores morales que toda cultura debe respetar.
                            </p>
                        </GenericSection>

                    </>
                ) 
        
            default:
                break;
        }
    }
    
    return(
        <>
        
            <MainNav/>

            <GenericBanner img={BannerImg}>
                Sobre la UJED
            </GenericBanner>

            <PageSwitch lista={states} passValue={setCurState}/>

            {StateSwitch()}

            <Footer />
        
        </>
    )

}

export default SobreUniversidad;