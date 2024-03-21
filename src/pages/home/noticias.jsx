import Noticia from "./noticia";

function Noticias() {
    return(
        <div className="homeNoticias">
            <div className="homeNoticias__title">
                Noticias UJED
            </div>

            <div className="homeNoticias__content">
                <Noticia/>

                <Noticia/>

                <Noticia/>
                <Noticia/>

                <Noticia/>

                <Noticia/>
                <Noticia/>

                <Noticia/>

                <Noticia/>
                <Noticia/>

                <Noticia/>

                <Noticia/>
            </div>

            <div className="homeNoticias__footer">
                <button>Mas Noticias</button>
            </div>
        </div>
    )
}

export default Noticias;