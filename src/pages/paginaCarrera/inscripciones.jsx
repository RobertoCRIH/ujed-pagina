import { FaArrowRight } from "react-icons/fa6";


function Inscripciones() {
    return(
        <div className="inscripciones">
            <div className="title">
                ¿Te interesó la UJED?
            </div>

            <div className="content">
                <div className="text">
                    Si te interesa ser parte de la UJED, revisa
                    nuestra <b>Dirección de Servicios Escolares</b>
                    en donde encopntrarás la información de como 
                    inscribirte durante
                </div>
                <a href="https://escolares.ujed.mx" target="_blank">
                    <div>
                        <FaArrowRight/>
                        Visita la dirección de servicios escolares
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Inscripciones;