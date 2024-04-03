import { Link , useNavigate} from "react-router-dom";
import MainNav from "../../components/mainNav";
import Banner from "./banner.jsx";

import "./style.scss"
import Cards from "./cards.jsx";
import Section from "./section.jsx";
import Galeria from "./galeria.jsx";
import Noticias from "./noticias.jsx";
import Enlaces from "./enlaces.jsx";
import Footer from "../../components/footer/index.jsx";

function Home() {
    const navigate = useNavigate()
    return(
        <>  
            
            <button 
            style={{width:"100%",
            height:"50px",
            backgroundImage:"url(https://cdn.shopify.com/s/files/1/0344/6469/files/cat-gif-loop-wheel_grande.gif?v=1523982721)",
            backgroundSize:"contain",
            cursor:"pointer",
            color:"yellow",
            fontWeight:"bold"
            }}
            onClick={(e)=>navigate("/admin",{replace:false})}>
            <p>IR AL CRUD</p> 
            </button>
            <MainNav/>
            <Banner/>
            <Cards/>
            <Section    title={"¿Que ofrecemos en la UJED?"}
                        text={"En la UJED, te ofrecemos más que una educación; te brindamos oportunidades ilimitadas. Desde programas académicos de vanguardia hasta una vibrante vida estudiantil, nuestra universidad está aquí para inspirarte, desafiarte y ayudarte a alcanzar tu máximo potencial. Descubre una comunidad comprometida con tu éxito y prepárate para un viaje transformador en la UJED."}
                        img={"https://img.freepik.com/free-photo/active-conversation-group-people-business-conference-modern-classroom-daytime_146671-16259.jpg?w=740&t=st=1710817614~exp=1710818214~hmac=ad147fffd5b47450ccdde3f0869c80a7ceb6d3c46d01b967106d7bc53035be55"}
                        />
            
            <Section    title={"¿Cuál es nuestra misión?"}
                        text={"Transformar la sociedad, mediante la formación integral de bachilleres, profesionales, científicos, creadores y ciudadanos conscientes de su responsabilidad social, promoviendo la investigación científica y la innovación en el conocimiento, la vinculación y extensión universitaria. Ser una Institución pública, autónoma, laica, incluyente, que genere de manera integral la cultura y el deporte para contribuir a una sólida formación universitaria, respetuosa de la diversidad, con principios humanistas, comprometida con la equidad y justicia social, atenta a la ampliación pertinente de la oferta y cobertura educativa, potencializando las tecnologías como un detonante para el desarrollo regional en el marco de un mundo globalizado."}
                        img={"https://img.freepik.com/free-photo/colleagues-looking-businesswoman-writing-whiteboard-office-during-presentation_662251-1759.jpg?w=740&t=st=1710817764~exp=1710818364~hmac=3c0b11eabd1c5bcb4cd994492ef456074d808ae9957457d7f8df597a05fe589f"}
           />

           <Galeria/>

           <Noticias/>

           <Enlaces/>

           <Footer/>
            
        </>

    )
}

export default Home;