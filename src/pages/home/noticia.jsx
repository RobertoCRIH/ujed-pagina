import { useNavigate } from "react-router-dom";

function Noticia() {
    const navigation = useNavigate()
    return(
        <div className="noticia" onClick={(e)=>navigation("/noticias/0")}>
            <img src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className="fecha">20 de Marzo 2024</p>
            <h2>Inspirar a los alumnos para emprender, objetivo del Centro de Negocios UJED</h2>
        </div>
    )
}

export default Noticia;