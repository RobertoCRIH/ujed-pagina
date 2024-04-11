import AddButton from "../../components/addButton";
import Searchbar from "../../components/searchbar/searchbar";
import { useState, useEffect } from "react";

import Axios from 'axios';
import MyModal from "../../components/myModal";

import {useNavigate} from 'react-router-dom';


function Carreras() {
    const navigation = useNavigate();

    //Filtro para busqueda

    const [filter,setFilter] = useState("");

    const areasDeCarreras = [
        "Media Superior",
        "Ciencias Básicas",
        "Ciencias Económico-Administrativas",
        "Ciencias Químico-Biológicas",
        "Ciencias Sociales y Humanidades",
        "Ciencias de la Salud",
        "Difusión, Extensión, Cultura e Identidad",
        "Ingenierías y Arquitecturas",
        "Medicina, Veterinaria y Zootecnia",
        "(ESPECIALIDAD) Ciencias de la Salud",
        "(ESPECIALIDAD) Ciencias Económico-Administrativas",
        "(ESPECIALIDAD) Ciencias Sociales y Humanidades",
        "(MAESTRIA) Ciencias Agropecuarias y Forestales",
        "(MAESTRIA) Ciencias Básicas",
        "(MAESTRIA) Ciencias de la Salud",
        "(MAESTRIA) Ciencias Económico-Administrativas",
        "(MAESTRIA) Ciencias Químico-Biológicas",
        "(MAESTRIA) Ciencias Sociales y Humanidades",
        "(DOCTORADO) Ciencias Agropecuarias y Forestales",
        "(DOCTORADO) Ciencias Básicas",
        "(DOCTORADO) Ciencias de la Salud",
        "(DOCTORADO) Ciencias Económico-Administrativas",
        "(DOCTORADO) Ciencias Químico-Biológicas",
        "(DOCTORADO) Ciencias Sociales y Humanidades",
        "Centro de Idiomas Durango",
        "Centro de Idiomas Gómez Palacio",
        "Carrera Virtual"
        
    ]

    const [carreras,setCarreras] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/carreras/obtener').then((response)=>{
          setCarreras(response.data);
        })
      },[])

      //Variables para agregar/editar carreras

      const [nombre,setNombre] = useState("");
      const [area,setArea] = useState("");
      const [relprof,setRelprof] = useState("");
      const [ciudad,setCiudad] = useState("");
      const [duracion,setDuracion] = useState();
      const [descripcion,setDescripcion] = useState("");
      const [metas,setMetas] = useState("");
      const [objetivos,setObjetivos] = useState("");
      const [empleosasp,setEmpleosasp] = useState("")

      //Modal para Agregar Carreras
      const [addModal,setAddModal] = useState(false)

      function AgregarCarrera() {
        if(nombre,area,ciudad,duracion,descripcion,metas,objetivos,empleosasp){
            Axios.post("http://localhost:3001/admin/carreras/insertar",{
                nombre: nombre,
                area:area,
                relprof: relprof,
                ciudad: ciudad,
                duracion: duracion,
                descripcion: descripcion,
                metas: metas,
                objetivos: objetivos,
                empleosasp: empleosasp
            })

            setAddModal(false);

            setCarreras([...carreras,{
                nombre: nombre,
                area:area,
                relprof: relprof,
                ciudad: ciudad,
                duracion: duracion,
                descripcion: descripcion,
                metas: metas,
                objetivos: objetivos,
                empleosasp: empleosasp
            }])
        }else{
            window.alert("No todos los datos fueron introducidos.")
        }
        
      }

      //Modal para Editar Carreras
      const [editModal,setEditModal] = useState(false);
      const [editId,setEditId] = useState(0);

      //Modal para eliminar Carrera

      function EditarCarrera() {
        if(nombre,area,ciudad,duracion,descripcion,metas,objetivos,empleosasp){
            Axios.patch("http://localhost:3001/admin/carreras/actualizar",{
                    idcarrera: editId,
                    nombre: nombre,
                    area:area,
                    relprof: relprof,
                    ciudad: ciudad,
                    duracion: duracion,
                    descripcion: descripcion,
                    metas: metas,
                    objetivos: objetivos,
                    empleosasp: empleosasp  

            })
            setEditModal(false);
        }else{
            window.alert("No todos los campos fueron actualizados")
        }
      }

      //Modal para eliminar carrera
      const [deleteModal,setDeleteModal] = useState(false);
      const [deleteId, setDeleteId] = useState(0)

      function EliminarCarrera() {
        Axios.delete("http://localhost:3001/admin/carreras/eliminar",{data:{idc:deleteId}});
        setCarreras( carreras.filter( x => x.idcarrera !== deleteId ) );
        setDeleteModal(false);
      }

    return(
        <div className="carreras">

            <MyModal header={"Agregar una carrera"} closeHandle={(e)=>setAddModal(false)} visible={addModal}>
                <div className="modal__content">

                    <div className="subtitle">Nombre de la carrera</div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Medicina" onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="subtitle">Area</div>
                    <div className="input">
                        <select onChange={(e)=>setArea(e.target.value)}>
                            <option>--Seleccione el area de la carrera</option>
                            {areasDeCarreras.map((e)=>{
                                return(
                                    <option value={e}> {e} </option>
                                )
                            }
                            )}
                        </select>
                    </div>

                    <div className="subtitle">Director de la carrera</div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Mateo López" onChange={(e)=>setRelprof(e.target.value)}/>
                    </div>

                    <div className="subtitle">Ciudad</div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Durango" onChange={(e)=>setCiudad(e.target.value)}/>
                    </div>

                    <div className="subtitle">Duración de la carrera</div>
                    <div className="input">
                        <input type="number" onChange={(e)=>setDuracion(e.target.value)}/>
                    </div>

                    <div className="subtitle">Descripción</div>
                    <div className="input">
                        <textarea rows={20} maxLength={3500} onChange={(e)=>{
                            setDescripcion(e.target.value)
                        }}/>
                    </div>

                    <div className="subtitle">Metas</div>
                    <div className="input">
                        <textarea rows={10} maxLength={800} onChange={(e)=>setMetas(e.target.value)}/>
                    </div>

                    <div className="subtitle">Objetivos</div>
                    <div className="input">
                        <textarea rows={10} maxLength={800} onChange={(e)=>setObjetivos(e.target.value)}/>
                    </div>

                    <div className="subtitle">Campo de Trabajo</div>
                    <div className="input">
                        <textarea rows={10} maxLength={250} onChange={(e)=>setEmpleosasp(e.target.value)}/>
                    </div>
                    
                </div>

                <div className="modal__footer">
                    <div className="buttons">
                        <button onClick={(e)=>AgregarCarrera()}>Agregar Carrera</button>
                    </div>
                </div>
            </MyModal>

            {/* Modal para editar  */}
            <MyModal header={"Editar Carrera"} closeHandle={(e)=>setEditModal(false)} visible={editModal}>
                <div className="modal__content">
                    
                <div className="subtitle">Nombre de la carrera</div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Medicina" onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="subtitle">Area</div>
                    <div className="input">
                        <select onChange={(e)=>setArea(e.target.value)}>
                            <option>--Seleccione el area de la carrera</option>
                            {areasDeCarreras.map((e)=>{
                                return(
                                    <option value={e}> {e} </option>
                                )
                            }
                            )}
                        </select>
                    </div>

                    <div className="subtitle">Director de la carrera</div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Mateo López" onChange={(e)=>setRelprof(e.target.value)}/>
                    </div>

                    <div className="subtitle">Ciudad</div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Durango" onChange={(e)=>setCiudad(e.target.value)}/>
                    </div>

                    <div className="subtitle">Duración de la carrera</div>
                    <div className="input">
                        <input type="number" onChange={(e)=>setDuracion(e.target.value)}/>
                    </div>

                    <div className="subtitle">Descripción</div>
                    <div className="input">
                        <textarea rows={20} maxLength={3500} onChange={(e)=>{
                            setDescripcion(e.target.value)
                        }}/>
                    </div>

                    <div className="subtitle">Metas</div>
                    <div className="input">
                        <textarea rows={10} maxLength={800} onChange={(e)=>setMetas(e.target.value)}/>
                    </div>

                    <div className="subtitle">Objetivos</div>
                    <div className="input">
                        <textarea rows={10} maxLength={800} onChange={(e)=>setObjetivos(e.target.value)}/>
                    </div>

                    <div className="subtitle">Campo de Trabajo</div>
                    <div className="input">
                        <textarea rows={10} maxLength={250} onChange={(e)=>setEmpleosasp(e.target.value)}/>
                    </div>

                </div>

                <div className="modal__footer">
                    <div className="buttons">
                        <button onClick={(e)=>EditarCarrera()}>Editar Carrera</button>
                    </div>
                </div>
            </MyModal>
            
            <MyModal header={"Eliminar Carrera"} closeHandle={(e)=>setDeleteModal(false)} visible={deleteModal}>
                <div className="modal__content">
                    <div className="subtitle">
                        ¿Seguro que quieres eliminar ésta carrera? Una vez eliminada, no se podrán recuperar los datos de la carrera ni los alumnos que fueron registrados en ella.
                    </div>
                    
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false" onClick={(e)=>EliminarCarrera()}>Eliminar Carrera</button>
                    </div>
                </div>
            </MyModal>

            <Searchbar changeState={setFilter}/>
            
            
            <div className="title">
                Carreras
            </div>

            <div style={{padding: "20px 0"}}>
                <AddButton text={"Agregar carrera"} onClick={(e)=>setAddModal(true)}/>
            </div>


           {carreras.map((i)=>{
            if(i.nombre.toLowerCase().includes(filter.toLowerCase()))
            return(
                <div className="carreras__card">
                    <div className="carreras__card__title">
                        {i.nombre}

                        <button className="editar" onClick={(e)=>{
                            setEditModal(true);
                            setEditId(i.idcarrera)
                        }}>Editar</button>

                        <button className="eliminar" onClick={e=>{
                            setDeleteModal(true);
                            setDeleteId(i.idcarrera);
                        }}>Eliminar</button>

                        <button className="plan"
                            onClick={y=>{
                                navigation("/plan-de-estudios/"+i.idcarrera) 
                            }}
                        >
                            Ver Plan de Estudios
                        </button>
                    </div>
                    <div className="carreras__card__content">

                        <div className="row">
                            <div className="item">
                                <div className="item__title">Area</div>
                                <div>{i.area}</div>
                            </div>
                            <div className="item">
                                <div className="item__title">Director</div>
                                <div> {i.relprof} </div>
                            </div>
                            <div className="item">
                                <div className="item__title">Ciudad</div>
                                <div> {i.ciudad} </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="item">
                                <div className="item__title">
                                    Descripción
                                </div>
                                <div>
                                    {i.descripcion}
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="item">
                                <div className="item__title">Metas</div>
                                <div> {i.metas} </div>
                            </div>

                            <div className="item">
                                <div className="item__title">Objetivos</div>
                                <div> {i.objetivos} </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="item">
                                <div className="item__title">Empleos</div>
                                <div> {i.empleosasp} </div>
                            </div>

                            <div className="item">
                                <div className="item__title">
                                    Duración de la carrera
                                </div>
                                <div> {i.duracion} semestres</div>
                            </div>

                        </div>
                    </div>
            </div>
            )
           })}

            
        </div>
    )
}

export default Carreras;