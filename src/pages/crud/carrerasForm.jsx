import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import  Axios  from 'axios';


function CarrerasForm() {

    const [nombre,setNombre] = useState("");
    const [duracion,setDuracion] = useState(1);
    const [descripcion,setDescripcion] = useState("");
    const [objetivos,setObjetivos] = useState("");
    const [metas,setMetas] = useState("");
    const [relprof,setRelprof] = useState("");
    const [empleosasp,setEmpleosasp] = useState("");

    function InsertarCarrera() {
        Axios.post("http://localhost:3001/admin/carreras/insertar",{
            nombre: nombre,
            duracion: duracion,
            descripcion: descripcion,
            objetivos: objetivos,
            metas: metas,
            relprof: relprof,
            empleosasp: empleosasp
        })
        .then(res=>{
            console.log(res.data)
            window.alert("Se ha insertado la nueva carrera.")
        })
        .catch(err=>{
            window.alert("Algo salió mal...")
        })
    }
    
    
    return(
        <>  
            <h4>Agregar Carrera</h4>
        
            <Accordion defaultActiveKey={1}>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header >
                        Agregar Carrera
                    </Accordion.Header>

                    <Accordion.Body>

                        <Form>

                            <Form.Group>
                                <Row>

                                    <Col>
                                        <Form.Label>
                                            Nombre de la carrera
                                        </Form.Label>
                                        <Form.Control onChange={e=>setNombre(e.target.value)} maxLength={100} placeholder='Ej. Licenciado en Biología'/>
                                    </Col>

                                    <Col>
                                        <Form.Label>
                                            Duración de la carrera
                                        </Form.Label>

                                        <Form.Control onChange={e=>setDuracion(e.target.value)} type='number' maxLength={40}/>
                                    
                                    </Col>

                                </Row>
                                

                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Descripción
                                </Form.Label>

                                <Form.Control onChange={e=>setDescripcion(e.target.value)} as={"textarea"} rows={12} maxLength={2999} placeholder='Escribe aquí al descripción de la carrera o una pequeña introducción a ella.'/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Objetivos 
                                </Form.Label>

                                <Form.Control onChange={e=>setObjetivos(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Metas 
                                </Form.Label>

                                <Form.Control onChange={e=>setMetas(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Relación Profesional 
                                </Form.Label>

                                <Form.Control onChange={e=>setRelprof(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Campo de Trabajo 
                                </Form.Label>

                                <Form.Control onChange={e=>setEmpleosasp(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <Button onClick={e=>InsertarCarrera()}>Agregar Carrera</Button>

                        </Form>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        
        </>
    )
}

export default CarrerasForm;