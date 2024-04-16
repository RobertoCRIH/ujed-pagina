import { useEffect, useState } from "react"
import Axios from 'axios'

import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";



function ListaPlanEstudio({listaDB}) {

    const nSemesters = Number(listaDB[0].duracion)

    const semestres = []
    
    for (let index = 0; index < nSemesters; index++) {
        
        semestres.push(index + 1)
    }

    const [materias,setMaterias] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/materias/obtener').then((response)=>{
            setMaterias(response.data)            
        })
      },[])

    
    function AgregarMateria(idcarrera,nombre,semestre) {
        

        Axios.post("http://localhost:3001/admin/materias/insertar",{
            idcarrera: idcarrera,
            nombre: nombre,
            semestre: semestre
        }).then((response)=>{
            var NewId = response.data.idnuevo
            console.log(NewId)

            setMaterias([...materias,{
                idmateria: NewId,
                idcarrera: idcarrera,
                nombre: nombre,
                semestre: semestre
            }])
        })

        
        
    }

    function EliminarMateria(id) {
        Axios.delete("http://localhost:3001/admin/materias/eliminar",{data:{idmateria:id}})
        setMaterias(materias.filter(x=>x.idmateria!==id))
    }


    return(

        <>
            <div className="listaPlanes">
            {semestres.map(s=>{
                return(
                    <div className="listaPlanes__item">
                        <h2>Semestre {s} </h2>
                            
                        {materias.map(i=>{
                            if(i.semestre == s ){
                                if(i.idcarrera === listaDB[0].idcarrera){
                                    return(
                                        <div className="materia"> · {i.nombre} 
                                        <button style={{color:"red"}} onClick={e=>{
                                            EliminarMateria(i.idmateria)
                                        }}> <MdDelete/> </button> 
                                        </div>
                                    )
                                } 
                            }
                        })}

                        <div className="addMateria">
                            <input maxLength={100} type="text" id={s + "-bttn"}/>
                            <button onClick={e=>{
                                const elem = document.getElementById(s+"-bttn")
                                
                                AgregarMateria(listaDB[0].idcarrera,elem.value,s)

                                elem.value = "";

                            }}> <CiCirclePlus/> </button>
                        </div>
                        
                        
                    </div>

                    
                )
            })}
            </div>
            
        
        </>

    )
}

export default ListaPlanEstudio;