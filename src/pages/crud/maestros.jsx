import RoundTable from "../../components/roundTable/roundTable";
import Searchbar from "../../components/searchbar/searchbar";
import AddButton from "../../components/addButton";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";


import maestros from "../../data/maestrosTestData";
import { useState } from "react";
import MyModal from "../../components/myModal";
function Maestros() {

    const [filter,setFilter] = useState("")
    //Este es el modal para agregar alumnos
    const [modalAdd,setModalAdd] = useState(false)
    return(
        <>
            
            <MyModal header={"Agregar Maestro"} visible={modalAdd} closeHandle={(e)=>setModalAdd(false)}>
                <div className="modal__content">
                    <div className="subtitle">
                        Nombre Completo
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Pablo López"/>
                    </div>

                    <div className="subtitle">
                        Correo
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. ejemplo@hotmail.com"/>
                    </div>

                    <div className="subtitle">
                        Teléfono
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. 618 XXX XXXX"/>
                    </div>

                    <div className="subtitle">
                        Especialidad
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. Especialidad"/>
                    </div>

                    <div className="subtitle">
                        Horario
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. Link"/>
                    </div>

                    <div className="subtitle">
                        Turno
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. Matutino/Vespertino"/>
                    </div>
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={(e)=>setModalAdd(false)}>Cancelar</button>
                        <button>Agregar Maestro</button>
                    </div>
                </div>
            </MyModal>
            <Searchbar changeState={setFilter}/>

            <div className="title">
                 Maestros
            </div>

            <div style={{padding: "20px 0"}}>
                <AddButton text={"Agregar maestro"} onClick={(e)=>setModalAdd(true)}/>
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