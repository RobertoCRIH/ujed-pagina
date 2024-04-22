import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Axios from 'axios';

function EscuelasForm() {

    const [nombre,setNombre] = useState("")
    const [abreviatura,setAbreviatura] = useState("")
    const [descripcion,setDescripcion] = useState("")
    const [ciudad,setCiudad] = useState("")
    const [area,setArea] = useState("")
    const [direccion,setDireccion] = useState("")
    const [urlMapa,setUrlMapa] = useState("")
    const [contacto,setContacto] = useState("")
    const [vision,setVision] = useState("")
    const [mision,setMision] = useState("")
    const [objetivos,setObjetivos] = useState("")
    const [bolsaTrabajo,setBolsaTrabajo] = useState("")
    const [bolsaTrabajoLink,setBolsaTrabajoLink] = useState("")
    const [servicios,setServicios] = useState("")
    const [urlweb,setUrlWeb] = useState("")

    function SubirEscuela() {
        Axios.post("http://localhost:3001/admin/escuelas/insertar",{
            ciudad: ciudad,
            area: area,
            nombre: nombre,
            abreviatura: abreviatura,
            descripcion: descripcion,
            direccion: direccion,
            urlmapa: urlMapa,
            urlweb: urlweb,
            contacto: contacto,
            mision: mision,
            vision: vision,
            objetivos: objetivos,
            bolsatrabajo: bolsaTrabajo,
            urlbotr: bolsaTrabajoLink,
            servicios: servicios 
        })
        .then(res => {
            console.log(res.data)
            window.alert("Se agregó la escuela con éxito")
        })
        .catch(err=> window.alert("Algo salió mal"))
    }

    return(
        <>
        <h4>
            Subir Nueva Escuela
        </h4>
        <Accordion defaultActiveKey={1}>
            <Accordion.Item eventKey='0'>
                <Accordion.Header >
                    Subir una Nueva Escuela
                </Accordion.Header>
                <Accordion.Body>
                <Form >

                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Nombre de la Escuela</Form.Label>
                                <Form.Control onChange={e=>{
                                    setNombre(e.target.value)
                                }} maxLength={160} type='text' required placeholder='Ej. Colegio de Ciencias y Humanidades'/>
                                <Form.Control.Feedback type='invalid'>Tienes que escribir el nombre de la escuela</Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Label>Siglas de la Escuela</Form.Label>
                                <Form.Control maxLength={15} type='text' placeholder='Ej. CCH' onChange={e=>setAbreviatura(e.target.value)}/>
                            </Col>
                        </Row>
                        
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control onChange={e=>setDescripcion(e.target.value)} as='textarea' rows={10} maxLength={1000}/>
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Selecciona la ciudad donde está la escuela</Form.Label>
                                <Form.Select aria-label='Selecciona la Ciudad' onChange={e=>setCiudad(e.target.value)}>
                                    <option>Ciudad de la Escuela</option>
                                    <option value="Durango">Durango</option>
                                    <option value="Gómez Palacio">Gómez Palacio</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Selecciona el area académica</Form.Label>
                                <Form.Select onChange={e=>setArea(e.target.value)}>
                                    <option>Área Académica</option>
                                    <option value="Media Superior">Media Superior</option>
                                    <option value="Ciencias Agropecuarias y Forestales">Ciencias Agropecuarias y Forestales</option>
                                    <option value="Ciencias Básicas">Ciencias Básicas</option>
                                    <option value="Ciencias Económico-Administrativas">Ciencias Económico-Administrativas</option>
                                    <option value="Ciencias Químico Biológicas">Ciencias Químico Biológicas</option>
                                    <option value="Ciencias Sociales y Humanidades">Ciencias Sociales y Humanidades</option>
                                    <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                                    <option value="Difusión, Extensión, Cultura e Identidad">Difusión, Extensión, Cultura e Identidad</option>
                                    <option value="Medicina Veterinaria y Zootecnia">Medicina Veterinaria y Zootecnia</option>
                                    <option value="Universidad Virtual">Universidad Virtual</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Escribe la dirección de la escuela</Form.Label>
                        <Form.Control onChange={e=>setDireccion(e.target.value)} as={"textarea"} rows={3} maxLength={250}/>
                        <Form.Text>*El formato con el que escribas la dirección será el mismo usado en la página web</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Escribe el link del mapa de la dirección</Form.Label>
                        <Form.Control onChange={e=>setUrlMapa(e.target.value)} type='text' maxLength={220} placeholder='Ej. https://www.google.com/maps/d/u/0/viewer?hl=es&z=17&mid=1kCB-naRIzNpPGmDjOIJVWcVnRQA&ll=24.02085020000002%2C-104.6387351'/>
                        <Form.Text>*Si dejas en blanco éste apartado, la página se redireccionará a si misma</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contacto</Form.Label>
                        <Form.Control onChange={e=>setContacto(e.target.value)} as='textarea' rows={5} maxLength={160} placeholder={'Ej. Tel: (618) 000 00 00\nEj. Email: email@gmail.com'}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Visión</Form.Label>
                        <Form.Control onChange={e=>setVision(e.target.value)} as='textarea' rows={8} maxLength={800} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Misión</Form.Label>
                        <Form.Control onChange={e=>setMision(e.target.value)} as='textarea' rows={8} maxLength={800} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Objetivos</Form.Label>
                        <Form.Control onChange={e=>setObjetivos(e.target.value)} as='textarea' rows={8} maxLength={800} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Bolsa de Trabajo</Form.Label>
                        <Form.Control onChange={e=>setBolsaTrabajo(e.target.value)} as='textarea' rows={5} maxLength={300} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Link a Bolsa de Trabajo</Form.Label>
                        <Form.Control onChange={e=>setBolsaTrabajoLink(e.target.value)} maxLength={200} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Servicios</Form.Label>
                        <Form.Control onChange={e=> setServicios(e.target.value)} as='textarea' rows={10} maxLength={1000} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Url a Página Web</Form.Label>
                        <Form.Control onChange={e=>setUrlWeb(e.target.value)} maxLength={220} placeholder='Ej. pagina-web.com'/>
                        <Form.Text>
                            *Este es el link que te llevará a una página externa en caso de que sea necesario. 
                            No escribas nada, en caso de que no haya ninguna página que quieras agregar.
                        </Form.Text>
                    </Form.Group>


                    <br />
                    <Button variant='primary' onClick={e=>SubirEscuela()}>
                        Subir Escuela
                    </Button>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        </>
    )
}

export default EscuelasForm;