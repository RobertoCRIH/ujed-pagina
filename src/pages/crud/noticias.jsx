import Searchbar from "../../components/searchbar/searchbar";
import NoticiaItem from "./noticiaItem";
import AddButton from "../../components/addButton";

import Axios from "axios";
import { useState, useEffect } from "react";
import MyModal from "../../components/myModal";
import { useNavigate } from "react-router-dom";
import {format} from 'date-fns';

function Noticias() {
    const navigation= useNavigate()

    const [noticias,setNoticias] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/noticias/obtenertodas")
        .then(response => setNoticias(response.data))
    },[])

    //Variables para agregar/editar

    const [titulo,setTitulo] = useState("");
    const [descCorta,setDescCorta] = useState("Descripsión corta diferente de la noticia");
    const [desc,setDesc] = useState("El cuerpo de la noticia diferente" );

    // Controladores para el modal para agregar
    const [addModal,setAddModal] = useState(false)

    function AgregarNoticia() {
        if(titulo){
            if(desc){
                Axios.post("http://localhost:3001/admin/noticias/insertar",{
                    titulo: titulo,
                    descorta: descCorta,
                    descripcion: desc
                }).then(response => {
                    console.log(response)
                    setAddModal(false)
                    navigation("/subir-noticia/"+response.data.idnuevo)

                }).catch(err=>{
                    console.log(err)
                })
            }else{
                window.alert("No fue escrito el cuerpo de la noticia.")
            }
        }else{
            window.alert("El título no fue escrito")
        }
        
    }
    return(
        <>  

            {/* Modales  */}

            {/* Modal para poder agregar noticias   */}
            <MyModal header={"Agregar una noticia"} visible={addModal} closeHandle={e=>setAddModal(false)}>
                <div className="modal__content">
                    <div className="subtitle">
                        Crea una noticia
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Ej. Título Noticia" onChange={e=>setTitulo(e.target.value)}/>
                    </div>

                    

                    
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button onClick={e=>AgregarNoticia()}>Publicar Noticia</button>
                    </div>
                </div>
            </MyModal>
            <Searchbar/>

            <div style={{padding: "20px 0"}}>
                <AddButton text={"Agregar noticia"} onClick={e=>navigation("/subir-noticia/0")}/>
            </div>
            
            <div className="title">
                Noticias
            </div>

            <div className="noticias">
                
                {noticias.map(x=>{
                    return(
                        <NoticiaItem    title={x.titulo}
                                        imgLink={"https://www.forbes.com/advisor/wp-content/uploads/2023/10/image4-Cropped.jpg"}
                                        fecha={ format(new Date(x.fechapub), 'dd/MM/yyyy' ) }/>
                    )
                })}
                

                
            </div>
        
        </>
    )
}

export default Noticias;