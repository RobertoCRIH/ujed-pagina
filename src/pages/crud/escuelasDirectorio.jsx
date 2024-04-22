import Axios from 'axios';
import { useState , useEffect } from 'react';
import { Button } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Table from 'react-bootstrap/Table';


function EscuelasDirectorio({idescuela}) {

    const [directorio,setDirectorio] = useState([])

    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("")

    useEffect(()=>{
        Axios.post("http://localhost:3001/escuelas/dir/obtener",{
            idescuela: idescuela
        })
        .then(res=>{
            console.log(res.data)
            setDirectorio(res.data)
        })
    },[])

    function SubirDirectorio() {
        Axios.post("http://localhost:3001/admin/escuelas/dir/insertar",{
            idescuela: idescuela,
            puesto: puesto,
            nombre: nombre
        })
        .then(res=>{
            console.log(res.data)

            setDirectorio(directorio=>[...directorio,{
                idescuela: idescuela,
                puesto: puesto,
                nombre: nombre
            }])
        })
        .catch(err=>{
            console.log(err.data)
        })
    }

    function BorrarDirectorio(puesto) {
        Axios.delete("http://localhost:3001/admin/escuelas/dir/eliminar",{data:{
            idescuela: idescuela,
            puesto: puesto
        }})
        .then(res=>{
            console.log(res.data)
            setDirectorio(directorio=>(directorio.filter((value,i)=> value.puesto !== puesto)))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <>
            <br />
            <div style={{
                width:"100%",
                height:"20px",
                borderTop:"1px solid grey"
            }}>

            </div>
            <h4>Directorio</h4>
        
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Puesto</th>
                        <th>Nombre</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>

                    {directorio.map(e=>{
                        return(
                            <tr>
                                <td> <b> {e.puesto} </b> </td>
                                <td> {e.nombre} </td>
                                <td> <Button variant='danger' onClick={i=>{
                                    BorrarDirectorio(e.puesto)
                                }}
                                >Eliminar</Button> </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>

            <Form.Group>
                <Form.Label>
                    Agrega Personal del Directorio
                </Form.Label>
                <Row>
                    <Col>
                        <Form.Control maxLength={50} onChange={e=>setPuesto(e.target.value)} placeholder='Puesto'/>
                    </Col>
                    <Col>
                        <Form.Control maxLength={160} onChange={e=>setNombre(e.target.value)} placeholder='Nombre'/>                    
                    </Col>
                    
                    <Col>
                        <Button onClick={e=>SubirDirectorio()}>Agregar Personal</Button>
                    </Col>
                </Row>

                
            </Form.Group>
        
        </>
    )
}

export default EscuelasDirectorio;