import Footer from "../../components/footer/index.jsx";
import MainNav from "../../components/mainNav.jsx";
import NoticiasBanner from "./noticiasBanner.jsx";
import NoticiasMas from "./noticiasMas.jsx";
import NoticiasTexto from "./noticiasTexto.jsx";
import "./style.scss"
function PaginaNoticias() {
    return(
        <>
        
            <MainNav/>
            <NoticiasBanner title={"Estudiante de la UJED descubre cura contra el cancer"} imageBg={"https://www.forbes.com/advisor/wp-content/uploads/2023/10/image4-Cropped.jpg"} />
            <NoticiasTexto/>

            <div style={{
                padding:"0 10%",
                fontSize: "20px",
                fontWeight:"bold"
            }}>
                Mas Noticias
            </div>

            <NoticiasMas/>

            <Footer/>
        
        </>
    )
}

export default PaginaNoticias;