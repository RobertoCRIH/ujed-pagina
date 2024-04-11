import { useState, useEffect } from "react";

import {motion} from 'framer-motion';

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
                <h2>Plan de Estudios</h2>

                <div className="planEstudios__buttons">

                    {semestresLista.map(s=>{
                        if(s===semestre){
                            return(
                                <motion.button className="selected"
                                whileHover={{
                                    scale:1.1
                                }}
                                > {s} </motion.button> 
                            )
                        }else{
                            return(
                                <motion.button
                                whileHover={{
                                    scale:1.1
                                }}
                                onClick={e=>{
                                    setSemestre(s)
                                }}
                                >
                                    {s} 
                                </motion.button> 
                            )
                        }
                    })}

                </div>

                <div 
                className="planEstudios__lista"
                >

                    {materias.map(m=>{
                        if(m.semestre == semestre){
                            if(m.idcarrera == idcarrera){
                                return(
                                    <div className="item"> ■ {m.nombre}   </div>
                                )
                            }
                        }
                    })}

                </div>
            </div>

        )
    }

}

export default PlanEstudios;