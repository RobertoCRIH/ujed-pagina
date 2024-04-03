import { useNavigate } from "react-router-dom";

function ListaOfertasItem({nombre,lugar,id}) {
    const navigation = useNavigate();
    return(
        <div className="listaO__item" onClick={e=>{
            window.scrollTo(0,0);
            navigation("/pagina-oferta/"+id+"/"+nombre);
        }}>
            <h3>{nombre}</h3>
            <p>{lugar}</p>
        </div>
    )
}

export default ListaOfertasItem;