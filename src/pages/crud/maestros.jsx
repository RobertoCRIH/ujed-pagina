import RoundTable from "../../components/roundTable/roundTable";
import Searchbar from "../../components/searchbar/searchbar";
import AddButton from "../../components/addButton";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


import { useState , useEffect } from "react";
import MyModal from "../../components/myModal";

import Axios from 'axios';
function Maestros() {

    const [filter,setFilter] = useState("")

    
    //Variables para poder agregar/editar cosas
    
    const [nombre,setNombre] = useState("");
    const [telefono,setTelefono] = useState();
    const [especialidad,setEspecialidad] = useState("");
    const [horario,setHorario] = useState("");
    const [turno,setTurno] = useState("");
    
    //Este es el modal para agregar alumnos
    const [modalAdd,setModalAdd] = useState(false)

    //Funcion para agregar maestros

    function AgregarMaestros() {
        if(nombre){
            if(telefono){
                if(especialidad){
                    if(horario){
                        if(turno){
                            Axios.post('http://localhost:3001/maestros/insertar',{
                                nombre: nombre,
                                telefono: telefono,
                                especialidad: especialidad,
                                horario: horario,
                                turno: turno
                            })

                            setModalAdd(false)

                            setMaestros([...maestros,{
                                nombre: nombre,
                                telefono: telefono,
                                especialidad: especialidad,
                                horario: horario,
                                turno: turno
                            }])
                        }else{
                            window.alert("El turno no fue escogido.")
                        }
                    }else{
                        window.alert("El horario no fue agregado")
                    }
                }else{
                    window.alert("La especialidad no fue escrita")
                }
            }else{  
                window.alert("El telefono no fue escrito")
            }
        }else{
            window.alert("El nombre fue específicado")
        }
        
    }


    //Modal para editar alumnos
    const [modalEdit,setModalEdit] = useState(false);
    const [editId,setEditId] = useState();

    //Función para editar a los maestros
    function EditarMaestros() {

        if(nombre){
            if(telefono){
                if(especialidad){
                    if(horario){
                        if(turno){
                            Axios.patch("http://localhost:3001/maestros/actualizar",{
                                idmaestro: editId,
                                nombre: nombre,
                                telefono: telefono,
                                especialidad: especialidad,
                                horario: horario,
                                turno: turno
                            })

                            setModalEdit(false)

                        }else{
                            window.alert("El turno no fue escogido.")
                        }
                    }else{
                        window.alert("El horario no fue agregado")
                    }
                }else{
                    window.alert("La especialidad no fue escrita")
                }
            }else{  
                window.alert("El telefono no fue escrito")
            }
        }else{
            window.alert("El nombre fue específicado")
        }

        
    }

    //Modal para eliminar a los alumnos
    const [modalErase,setModalErase] = useState(false);
    const [eraseId,setEraseId] = useState();

    function EliminarMaestros() {
        Axios.delete("http://localhost:3001/maestros/eliminar",{data:{idmaestro:eraseId}});
        setModalErase(false);
        setMaestros( maestros.filter( x => x.idmaestro !== eraseId ) )

    }

    const [maestros,setMaestros] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/maestros/obtener').then((response)=>{
          setMaestros(response.data);
        })
      },[])

    
    return(
        <>
            {/* Modal para agregar maestros  */}
            <MyModal header={"Agregar Maestro"} visible={modalAdd} closeHandle={(e)=>setModalAdd(false)}>
                <div className="modal__content">
                    <div className="subtitle">
                        Nombre Completo
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Pablo López" onChange={(e)=>setNombre(e.target.value)}/>
                    </div>


                    <div className="subtitle">
                        Teléfono
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. 618 XXX XXXX" onChange={(e)=>setTelefono(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Especialidad
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. Especialidad" onChange={(e)=>setEspecialidad(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Horario
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. Link" onChange={(e)=>setHorario(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Turno
                    </div>
                    <div className="input">
                        <select onChange={(e)=>setTurno(e.target.value)}>
                            <option>--Seleccione su turno--</option>
                            <option value="Matutino">Matutino</option>
                            <option value="Vespertino">Vespertino</option>
                        </select>
                    </div>
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={(e)=>setModalAdd(false)}>Cancelar</button>
                        <button onClick={(e)=>AgregarMaestros()}>Agregar Maestro</button>
                    </div>
                </div>
            </MyModal>

            {/* Modal para editar maestros  */}
            <MyModal header={"Editar Maestro"} visible={modalEdit} closeHandle={(e)=>setModalEdit(false)}>
                <div className="modal__content">
                    <div className="subtitle">
                        Nombre Completo
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Pablo López" onChange={(e)=>setNombre(e.target.value)}/>
                    </div>


                    <div className="subtitle">
                        Teléfono
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. 618 XXX XXXX" onChange={(e)=>setTelefono(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Especialidad
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. Especialidad" onChange={(e)=>setEspecialidad(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Horario
                    </div>
                    <div className="input">
                        <input type="text"placeholder="Ej. Link" onChange={(e)=>setHorario(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Turno
                    </div>
                    <div className="input">
                        <select onChange={(e)=>setTurno(e.target.value)}>
                            <option>--Seleccione su turno--</option>
                            <option value="Matutino">Matutino</option>
                            <option value="Vespertino">Vespertino</option>
                        </select>
                    </div>
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={(e)=>setModalEdit(false)}>Cancelar</button>
                        <button onClick={(e)=>EditarMaestros()}>Editar Maestro</button>
                    </div>
                </div>
            </MyModal>

            {/* Modal para borrar maestro  */}
            <MyModal header={"Eliminar Maestro"} visible={modalErase} closeHandle={(e)=>setModalErase(false)}>
                <div className="modal__content">
                    <div className="subtitle">
                        ¿Seguro que quiere borrar al alumno? <br />
                        Una vez eliminado, no podrá recuperar estos datos
                    </div>
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={(e)=>EliminarMaestros()}>
                            Eliminar Maestro
                        </button>
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
                            <th>Teléfono</th>
                            <th>Especialidad</th>
                            <th>Horario</th>
                            <th>Turno</th>
                            <th>Acciones</th>
                        </tr>

                        {maestros.map((i)=>{
                            if(i.nombre.toLowerCase().includes(filter.toLowerCase())){
                            return(
                                <tr>
                                    <td>
                                        {i.nombre}
                                    </td>
                                    <td>
                                        {i.telefono}
                                    </td>
                                    <td>
                                        {i.especialidad}
                                    </td>
                                    <td>
                                        <a href={i.horario}>Horario</a>
                                    </td>
                                    <td>
                                        {i.turno}
                                    </td>
                                    <td>
                                        <button onClick={(e)=>{
                                            setModalEdit(true);
                                            setEditId(i.idmaestro);
                                        }}><FaEdit/></button>
                                        <button onClick={(e)=>{
                                            setModalErase(true);
                                            setEraseId(i.idmaestro);
                                        }}><MdDelete/></button>
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