import "./style.scss"
import FileMissing from "../../assets/images/file-missing.jpg"
import Axios from "axios";
import { useState , useEffect } from "react";

function EditarNoticia() {
    //Conseguir imagenes

    const [imagenes,setImagenes] = useState([])
    useEffect(()=>{
        Axios.get("http://localhost:3001/imagenes/getallimages")
        .then(response => {
            setImagenes(response.data)
            console.log(imagenes.data)
        })
        .catch(err => console.log(err.data))
    },[])


    

    //Variables para subir noticia

    const [titulo,setTitulo] = useState("");
    const [descCorta,setDescCorta] = useState("");
    const [desc,setDesc] = useState("")

    // Funcion para subir noticia 
    function SubirNoticia() {
        if(titulo){
            if(desc){
                Axios.post("http://localhost:3001/admin/noticias/insertar",{
                    titulo: titulo,
                    descorta: descCorta,
                    descripcion: desc
                }).then(response=>{
                    console.log(response.data);
                    window.alert("Se agregó la carrera");
                }).catch(err=>{
                    console.log(err);
                    window.alert("El cuerpo y/o el titulo del articulo ya ha sido usado en otro")
                })
            }else{
                window.alert("El cuerpo de la notica no fue escrito")
            }
        }else{
            window.alert("El título de la noticia no fe específicado")
        }
        
    }

    return(
        <>
        
            <div className="editar_noticia">
                <div className="editar_noticia__img">
                    <img src={""}  />

                    <p>Selecciona una imagen</p>

                    <div className="imgPicker">
                        {imagenes.map(x=>{
                            return(
                                <button>
                                    <img src={"http://localhost:3001/uploads/"+x.url} alt="" />
                                    <div> {x.url} </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="editar_noticia__form">
                    <div className="tag">
                        Título de la noticia
                    </div>

                    <input type="text" maxLength={100} onChange={e=>setTitulo(e.target.value)}/>

                    <br />
                    <br />

                    <div className="tag">
                        Escribe una descripción corta para el artículo
                        <div className="contador"> {descCorta.length} / 399</div>
                    </div>

                    <textarea cols={100} maxLength={399} onChange={e=>{
                        setDescCorta(e.target.value)
                    }}  rows="10"></textarea>

                    <div className="tag">
                        Escribe el cuerpo de la noticia
                        <div className="contador"> {desc.length} / 2999</div>
                    </div>

                    <textarea cols={100} maxLength={2999} onChange={e=>setDesc(e.target.value)}  rows="20"></textarea>

                    <button
                    style={{
                        padding: "5px 10px",
                        borderRadius: "5px"
                    }}
                    onClick={e=>{
                        SubirNoticia();
                    }}
                    >Enviar Noticia</button>
                </div>
            </div>
        
        </>
    )
}

export default EditarNoticia;