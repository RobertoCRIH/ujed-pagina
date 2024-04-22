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
        .then(response => setNoticias(response.data.reverse()))
        .catch(err=>console.log(err))
    },[])

    const [imagenes,setImagenes] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:3001/imagenes/getallimages")
        .then(response => {
            setImagenes(response.data.reverse())
            console.log(imagenes.data)
        })
        .catch(err => console.log(err.data))
    },[])

    //Conseguir las imagenes agregadas a noticia


    

    //Función para agregar una imagen a una noticia.
    const [editId,setEditId] = useState() //Esta es la variable para que se guarde la id del wur se va a editar

    function AgregarImagen(id) {
        Axios.post("http://localhost:3001/admin/relnotis/asignarfoto",{
            idimagen : id,
            idnoticia : editId
        })
        .then(res=>{
            window.alert("Se agregó la imagen")
        })
        .catch(err=>{
            window.alert("Ésta imagen ya había sido agregada.")
        })
    }
    

    // Controladores para el modal para agregar
    const [addModal,setAddModal] = useState(false)
    const [addId,setAddId] = useState([{
        url: ""
    }])

    
    return(
        <>  

            {/* Modales  */}

            {/* Modal para poder agregar noticias   */}
            <MyModal header={"Agregar imagenes " + addId } visible={addModal} closeHandle={e=>setAddModal(false)}>
                <div className="modal__content">
                    

                    <div>
                        {imagenes.map(i=>{
                            return(
                                <div style={{
                                    display: "flex",
                                    alignItems:"center",
                                    gap: "10px",
                                    margin: "20px 10px"
                                }}>

                                    <img style={{
                                        height:"100px",
                                        aspectRatio:"2/1",
                                        objectFit:"cover"
                                    }} src={ "http://localhost:3001/uploads/"+i.url } alt="" />

                                    <p> {i.url} </p>

                                    <button style={{
                                        padding:"5px 10px",
                                        borderRadius:"15px"
                                    }}
                                    onClick={e=>{
                                        AgregarImagen(i.idimagen)
                                    }}
                                    >Añadir</button>
                                </div>
                            )
                        })}
                    </div>

                    

                    
                </div>
                <div className="modal__footer">
                    <div className="buttons">
                        <button >Publicar Noticia</button>
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
                                        id={x.idnoticia}
                                        functionImg={e=>{
                                            setAddModal(true);
                                            setAddId(x.idnoticia);
                                            setEditId(x.idnoticia)
                                        }}
                                        fecha={ format(new Date(x.fechapub), 'dd/MM/yyyy' ) }/>
                    )
                })}
                

                
            </div>
        
        </>
    )
}

export default Noticias;