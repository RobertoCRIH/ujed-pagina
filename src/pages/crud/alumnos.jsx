import RoundTable from "../../components/roundTable/roundTable";
import Searchbar from "../../components/searchbar/searchbar";
import PieChart from "../../components/pieChart";

import Axios from 'axios';

//TestData
import AddButton from "../../components/addButton";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import MyModal from "../../components/myModal";

const data = {
    labels:['Qumicos','Lic. en Medicina','Matematicas','Dentista'],
    datasets:[
        {
            data: [20,50,60,100],
            backgroundColor: ["aqua","red","green","orange"] 
        }
    ]
};



function Alumnos() {
    
    const [searchbar,setSearchbar] = useState("")


    const [alumnos,setAlumnos] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:3001/alumnos/obtenertodos').then((response)=>{
          setAlumnos(response.data);
        })
      },[])

      const [carreras,setCarreras] = useState([])
      useEffect(()=>{
          Axios.get('http://localhost:3001/carreras/obtenertodos').then((response)=>{
            setCarreras(response.data);
          })
        },[])


        //Variables para agregar/editar
        const [nombre,setNombre] = useState("");
        const [correo,setCorreo] = useState("");
        const [matricula,setMatricula] = useState("");
        const [idCarrera,setIdCarrera] = useState();
        const [telefono,setTelefono] = useState();
        const [semestre,setSemestre] = useState();

        //Modal para agegar alumnos
        const [addModal,setAddModal] = useState(false)

        //Funcion para agregar alumnos
        function AgregarAlumnos() {

            if(nombre){
                if(correo){
                    if(matricula){
                        if(idCarrera){
                            if(telefono){
                                if(semestre){
                                    Axios.post("http://localhost:3001/alumnos/insertar",{
                                        nombre: nombre,
                                        correo: correo,
                                        matricula: matricula,
                                        idcarrera: idCarrera,
                                        telefono: telefono,
                                        semestre: semestre
                                    })

                                    setAddModal(false);
                                    setAlumnos([...alumnos,{
                                        nombre: nombre,
                                        correo: correo,
                                        matricula: matricula,
                                        idcarrera: "",
                                        telefono: telefono,
                                        semestre: semestre
                                    }])
                                }else{
                                    window.alert("El semestre no se indicó")
                                }
                            }else{
                                window.alert("El número de telefono no se agregó")
                            }
                        }else{
                            window.alert("No se escogió una carrera")
                        }
                    }else{
                        window.alert("No se escribió la matricula")
                    }
                }else{  
                    window.alert("No se agregó el correo")
                }
            }else{ 
                window.alert("No se escribió el nombre")
            }

            
        }

        //Modal para editar alumnos
        const [editModal,setEditModal] = useState(false);
        const [editId,setEditId] = useState();

        function EditarAlumno() {

            if(nombre){
                if(correo){
                    if(matricula){
                        
                        if(idCarrera){
                            if(telefono){
                                if(semestre){
                                    Axios.patch("http://localhost:3001/alumnos/actualizar",{
                                        idalumno: editId,
                                        nombre: nombre,
                                        correo: correo,
                                        matricula: matricula,
                                        idcarrera: idCarrera,
                                        telefono: telefono,
                                        semestre: semestre

                                    })

                                    setEditModal(false);
                                    
                                }else{
                                    window.alert("El semestre no se indicó")
                                }
                            }else{
                                window.alert("El número de telefono no se agregó")
                            }
                        }else{
                            window.alert("No se escogió una carrera")
                        }
                    }else{
                        window.alert("No se escribió la matricula")
                    }
                }else{  
                    window.alert("No se agregó el correo")
                }
            }else{ 
                window.alert("No se escribió el nombre")
            }

            
        }

        //Modal para eliminar persona
        const [eraseModal,setEraseModal] = useState(false);
        const [eraseId,setEraseId] = useState()

        function EliminarAlumnos() {
            Axios.delete("http://localhost:3001/alumnos/eliminar",{data:{idalumno:eraseId}})
            setEraseModal(false);
            setAlumnos( alumnos.filter( x => x.idalumno !== eraseId ) )
        }
    return(
        <>
            <MyModal header={"Agregar a un alumno"} visible={addModal} closeHandle={(e)=>setAddModal(false)}>
                <div className="modal__content">
                    <div className="subtitle">
                        Nombre del Alumno
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Correo del Alumno
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setCorreo(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Matricula
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setMatricula(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Carrera
                    </div>
                    <div className="input">
                        <select onChange={(e)=>setIdCarrera(e.target.value)}>
                            <option>Selecciona una carrera</option>
                            {carreras.map(x=>{
                                return(
                                    <option value={x.idcarrera}>{x.nombre}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="subtitle">
                        Teléfono
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setTelefono(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Semestre
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setSemestre(e.target.value)}/>
                    </div>

                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={e=>{
                            setAddModal(false)
                        }}>Cancelar</button>
                        <button onClick={(e)=>AgregarAlumnos()}>Agregar Alumno</button>
                    </div>
                </div>
            </MyModal>
            {/* Modal para editar alumno   */}
            <MyModal header={"Editar Alumno"} visible={editModal} closeHandle={(e)=>setEditModal(false)}> 
                <div className="modal__content">
                    <div className="subtitle">
                        Nombre del Alumno
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Correo del Alumno
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setCorreo(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Matricula
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setMatricula(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Carrera
                    </div>
                    <div className="input">
                        <select onChange={(e)=>setIdCarrera(e.target.value)}>
                            <option>Selecciona una carrera</option>
                            {carreras.map(x=>{
                                return(
                                    <option value={x.idcarrera}>{x.nombre}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="subtitle">
                        Teléfono
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setTelefono(e.target.value)}/>
                    </div>

                    <div className="subtitle">
                        Semestre
                    </div>
                    <div className="input">
                        <input type="text" onChange={(e)=>setSemestre(e.target.value)}/>
                    </div>

                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={e=>{
                            setEditModal(false)
                        }}>Cancelar</button>
                        <button onClick={x=>EditarAlumno()}>Editar Alumno</button>
                    </div>
                </div>
            </MyModal>

            {/* Modal para eliminar   */}
            <MyModal header={"Eliminar Alumno"} visible={eraseModal} closeHandle={(e)=>setEraseModal(false)}>
                <div className="modal__content">
                    <div className="subtitle">
                        ¿Seguro que quieres borrar este alumno? <br />
                        Todos sus datos se perderán.
                    </div>
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={(e)=>EliminarAlumnos()}>Borrar Alumno</button>
                    </div>
                </div>
            </MyModal>
            <br />

            <div className="title">
                Alumnos
            </div>

            

            <PieChart data={data}/>
            <Searchbar changeState={setSearchbar}/>
            
            <br />

            <div style={{padding: "20px 0"}}>
                <AddButton text={"Agregar estudiante"} onClick={(e)=>{setAddModal(true)}}/>
            </div>
            
            <RoundTable>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Matricula</th>
                        <th>Perfil de egreso</th>
                        <th>Teléfono</th>
                        <th>Semestre</th>
                        <th>Acciones</th>
                    </tr>
                    {alumnos.map((e)=>{
                        if(e.nombre.toLowerCase().includes(searchbar.toLowerCase())){

                        return(
                            <tr>
                                <td>{e.idalumno}</td>
                                <td>{e.nombre}</td>
                                <td>{e.correo}</td>
                                <td>{e.matricula}</td>
                                <td>{carreras.map(x=>{
                                    if(e.idcarrera === x.idcarrera){
                                        return(
                                            x.nombre
                                        )
                                    }
                                })}</td>
                                <td>{e.telefono}</td>
                                <td>{e.semestre}</td>
                                <td>
                                        <button onClick={x=>{
                                            setEditModal(true);
                                            setEditId(e.idalumno)
                                        }}><FaEdit/></button>
                                        <button onClick={(x)=>{
                                            setEraseModal(true);
                                            setEraseId(e.idalumno)
                                        }}><MdDelete/></button>
                                </td>
                            </tr>
                        )}
                    })}
                </table>
            </RoundTable>
        
        </>
    )
}
export default Alumnos;