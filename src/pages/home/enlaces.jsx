import ListGroup from 'react-bootstrap/ListGroup';
import { FaExternalLinkAlt } from "react-icons/fa";


function Enlaces() {
    return(
        <>
        <div className="enlaces">
            {/* <div>
                <h2>Enlaces Universitarios</h2>

                
                <ul>
                    <li><a className="enlaces__link" href="https://www.ujed.mx/normativa-y-documentos">Normativa y Documentos</a> </li>
                    <li><a className="enlaces__link" href="https://escolares.ujed.mx">Dirección de Servicios Escolares</a> </li>
                    <li><a className="enlaces__link" href="https://www.ujed.mx/direccion-de-desarrollo-y-gestion-de-recursos-humanos">Dirección de Desarrollo y Gestión de Recursos Humanos</a> </li>
                    <li><a className="enlaces__link" href="http://vinculacioninstitucional.ujed.mx">Dirección de Vinculación Institucional</a> </li>
                    <li><a className="enlaces__link" href="https://radio.ujed.mx">Radio Ujed</a> </li>
                    <li><a className="enlaces__link" href="http://ovsyg.ujed.mx">Observatorio de Violencia Social y de Género</a> </li>
                    <li><a className="enlaces__link" href="http://transparencia.ujed.mx">Armonización Contable</a> </li>
                </ul>
            </div>
            <div>
                <h2>Sitios Externos</h2>
                <ul>
                    <li><a className="enlaces__link" href="https://www.cumex.org.mx">CUMEX</a> </li>
                    <li><a className="enlaces__link" href="http://www.anuies.mx">ANUIES</a> </li>
                    <li><a className="enlaces__link" href="https://cudi.edu.mx">CUDI</a> </li>
                    <li><a className="enlaces__link" href="https://www.inegi.org.mx">INEGI</a> </li>
                    <li><a className="enlaces__link" href="https://www.unadmexico.mx">Universidad Abierta y a Distancia</a> </li>
                    <li><a className="enlaces__link" href="https://www.jobisjob.com.mx">Oferta de Trabajo</a> </li>
                </ul>
            </div>
            <div>
                <h2>Portales</h2>
                <ul>
                    <li><a className="enlaces__link" href="http://transparencia.ujed.mx">Portal de Transparencia</a> </li>
                    <li><a className="enlaces__link" href="https://contraloria.ujed.mx">Contraloría General UJED</a> </li>
                    <li><a className="enlaces__link" href="https://sistemas.ujed.mx/PersonalUJED/">Descarga tu recibo de nómina</a> </li>
                    <li><a className="enlaces__link" href="https://contraloria.ujed.mx/buzon">Buzón de Quejas</a> </li>
                </ul>
            </div> */}

            <div>
                <h3>Enlaces Universtiarios</h3>
                <ListGroup>
                    <ListGroup.Item action >
                        Normativas y Documentos
                    </ListGroup.Item>

                    <ListGroup.Item action onClick={e=> window.location.href= "https://escolares.ujed.mx/"}>
                        Dirección de Servicios Escolares
                    </ListGroup.Item>

                    <ListGroup.Item action onClick={e=> window.location.href = "/"}>
                        Dirección de Desarrollo y Gestión de Recursos Humanos
                    </ListGroup.Item>

                    <ListGroup.Item action >
                        Dirección de Vinclación Institucional
                    </ListGroup.Item>

                    <ListGroup.Item action >
                        Radio Universidad
                    </ListGroup.Item>

                    <ListGroup.Item action >
                        Observatorio de Violencia Social y de Género
                    </ListGroup.Item>

                    <ListGroup.Item action >
                        Armonización Contable
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <h3>Sitios Externos</h3>
                <ListGroup>
                    <ListGroup.Item action>
                        CUMEX
                    </ListGroup.Item>

                    <ListGroup.Item action>
                        ANUIES
                    </ListGroup.Item>

                    <ListGroup.Item action>
                        INEGI
                    </ListGroup.Item>

                    <ListGroup.Item action>
                        Universidad Abierta y a Distancia
                    </ListGroup.Item>

                    <ListGroup.Item action>
                        Oferta de Trabajo
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <h3>Portales</h3>
                <ListGroup >
                    <ListGroup.Item action>
                        Portal de Transparencia
                        
                    </ListGroup.Item>

                    <ListGroup.Item action>
                        Contraloría General UJED
                    </ListGroup.Item>

                    <ListGroup.Item action>
                        Descarga tu recibo de nómina
                    </ListGroup.Item>

                    <ListGroup.Item action>
                        Buzón de Quejas
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>




        </>
    )
}

export default Enlaces;