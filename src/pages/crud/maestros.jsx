import RoundTable from "../../components/roundTable/roundTable";
import Searchbar from "../../components/searchbar/searchbar";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";


import maestros from "../../data/maestrosTestData";
import { useState } from "react";
function Maestros() {

    const [filter,setFilter] = useState("")
    return(
        <>
            <Searchbar changeState={setFilter}/>

            <div className="title">
                 Maestros
            </div>
            
            <div>
                <RoundTable>
                    <table>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Especialidad</th>
                            <th>Horario</th>
                            <th>Turno</th>
                            <th>Acciones</th>
                        </tr>

                        {maestros.map((e)=>{

                            if(e.nombre.toLowerCase().includes(filter.toLowerCase())){
                                return(
                                    <tr>
                                        <td> <b> {e.nombre}</b></td>
                                        <td>{e.correo}</td>
                                        <td>{e.tel}</td>
                                        <td>{e.clases.map((clase)=>{
                                            return(
                                                <>
                                                <p>{clase}</p>
                                                
                                                </>
                                            )
                                        })}</td>
                                        <td><a href="http://" target="_blank" rel="noopener noreferrer">Horario</a></td>
                                        <td>{e.turno}</td>
                                        <td>
                                            <button><FaEdit/></button>
                                            <button><MdDelete/></button>
                                        </td>
                                    </tr>
                                )
                            }
                            
                        })}
                    </table>  
                </RoundTable>
            </div>
            


        </>
    )
}

export default Maestros;