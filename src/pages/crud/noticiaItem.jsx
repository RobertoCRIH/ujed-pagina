function NoticiaItem({title,imgLink,fecha}) {
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
                        <button className="editar">Editar</button>
                    </div>
                </div>
    )
}   

export default NoticiaItem;