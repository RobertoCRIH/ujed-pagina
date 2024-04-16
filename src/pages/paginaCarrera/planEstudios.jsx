import { useState, useEffect } from "react";

import Accordion from 'react-bootstrap/Accordion';


import Axios from 'axios';



function PlanEstudios({semestres,idcarrera}) {

    const [materias,setMaterias] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/materias/obtener').then((response)=>{
            setMaterias(response.data);
            
        })
        },[])

    semestres = Number(semestres);


    const semestresLista =[]

    for (let index = 0; index < semestres; index++) {
        semestresLista.push(index+1)
        
    }

    const [semestre,setSemestre] = useState(1)

    if(semestresLista){
        
        return( 

            <div className="planEstudios">

                <h3>Plan de Estudio</h3>

                <Accordion defaultActiveKey={0} >
                    
                    {semestresLista.map(e=>{
                        return(
                            <Accordion.Item eventKey={e}> 
                                <Accordion.Header>
                                    Semestre {e}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {materias.map(x=>{
                                        if(x.idcarrera === idcarrera){
                                            if(x.semestre == e){
                                                return(
                                                    <li> {x.nombre} </li>
                                                )
                                            }
                                        }
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        )  
                    })}

                </Accordion>

            </div>

        )
    }

}

export default PlanEstudios;