import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import  Axios  from 'axios';

function CarrerasItem({object}) {

    const [nombre,setNombre] = useState(object.nombre);
    const [duracion,setDuracion] = useState(object.duracion);
    const [descripcion,setDescripcion] = useState(object.descripcion);
    const [objetivos,setObjetivos] = useState(object.objetivos);
    const [metas,setMetas] = useState(object.metas);
    const [relprof,setRelprof] = useState(object.relprof);
    const [empleosasp,setEmpleosasp] = useState(object.empleosasp);

    //Función para poder cambiar entre modo de edición
    const [editOff,setEditOff] = useState(true)

    function EditarCarrera() {
        Axios.patch("http://localhost:3001/admin/carreras/actualizar",{
            idcarrera: object.idcarrera,
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
            window.alert("Se actualizó la carrera.")
            setEditOff(true)
        })
    }

    function BorrarCarrera() {
        Axios.delete("http://localhost:3001/admin/carreras/eliminar",{data:{
            idcarrera: object.idcarrera
        }})
        .then(res=>{
            window.alert("Carrera Eliminada")
            setErased(true)
        })
        .catch(err=>{
            window.alert("Algo salió mal...")
        })
    }

    const [erased,setErased] = useState(false); 

    if(!erased){
    return(
        <>  
        
            <Accordion defaultActiveKey={1}>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header >
                        {object.nombre}
                    </Accordion.Header>

                    <Accordion.Body>

                        <Form>
                            <Form.Group>
                                <Form.Check  type="switch" label={"Activar Edición"} onChange={e=>setEditOff(!editOff)}/>
                                <Form.Text>*Marca esta casilla para editar los valores</Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Row>

                                    <Col>
                                        <Form.Label>
                                            Nombre de la carrera
                                        </Form.Label>
                                        <Form.Control disabled={editOff} defaultValue={nombre} onChange={e=>setNombre(e.target.value)} maxLength={100} placeholder='Ej. Licenciado en Biología'/>
                                    </Col>

                                    <Col>
                                        <Form.Label>
                                            Duración de la carrera
                                        </Form.Label>

                                        <Form.Control disabled={editOff} defaultValue={duracion} onChange={e=>setDuracion(e.target.value)} type='number' maxLength={40}/>
                                    
                                    </Col>

                                </Row>
                                

                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Descripción
                                </Form.Label>

                                <Form.Control disabled={editOff} defaultValue={descripcion} onChange={e=>setDescripcion(e.target.value)} as={"textarea"} rows={12} maxLength={2999} placeholder='Escribe aquí al descripción de la carrera o una pequeña introducción a ella.'/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Objetivos 
                                </Form.Label>

                                <Form.Control disabled={editOff} defaultValue={objetivos} onChange={e=>setObjetivos(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Metas 
                                </Form.Label>

                                <Form.Control disabled={editOff} defaultValue={metas} onChange={e=>setMetas(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Relación Profesional 
                                </Form.Label>

                                <Form.Control disabled={editOff} defaultValue={relprof} onChange={e=>setRelprof(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Campo de Trabajo 
                                </Form.Label>

                                <Form.Control disabled={editOff} defaultValue={empleosasp} onChange={e=>setEmpleosasp(e.target.value)} as={"textarea"} rows={6} maxLength={800} />

                                <Form.Text>
                                    *El formato con que escribas este apartado será el mismo que se mostrará en la página web.
                                </Form.Text>
                            </Form.Group>

                            <br />


                            <Row>
                                <Col>
                                    <Button variant='success' onClick={e=>EditarCarrera()}>Editar Carrera</Button>
                                </Col>
                                <Col>
                                    <Button variant='danger' onClick={e=>BorrarCarrera()}>Eliminar Carrera</Button>
                                </Col>
                            </Row>
                        </Form>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        
        </>
    )
    }
}

export default CarrerasItem;