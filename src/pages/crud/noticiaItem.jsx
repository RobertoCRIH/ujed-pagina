import { useNavigate } from "react-router-dom";

function NoticiaItem({title,imgLink,fecha}) {

    const navigation = useNavigate()
    return(
        <div className="noticia">
                    <img src={imgLink} />
                    <div className="noticia__title">
                        {title}
                    </div>
                    <div className="noticia__date">
                        {fecha}
                    </div>

                    <div className="noticia__buttons">
                        <button className="borrar">Eliminar</button>
                        <button className="editar" onClick={e=>{
                            navigation("/subir-noticia/0")
                        }}>Editar</button>
                    </div>
                </div>
    )
}   

export default NoticiaItem;