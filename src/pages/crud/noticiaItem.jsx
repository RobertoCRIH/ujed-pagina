import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';



function NoticiaItem({title,fecha,id,functionImg}) {

    const navigation = useNavigate()


    const [images,setImages] = useState([{
        url: ""
    }]);
    const [imageMain,setImageMain] = useState("nope");

    useEffect(()=>{
        Axios.post("http://localhost:3001/imagenesnoti/obtenerfotosN",{
            idnoticia: id
        })
        .then(response=>{
            console.log(response.data)
            setImages(response.data)

        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    
    return(
        <div className="noticia">
                    <img src={"http://localhost:3001/uploads/"+images[0].url} />
                    <div className="noticia__title">
                        {title} 
                        
                        
                    </div>
                    <div className="noticia__date">
                        {fecha}
                    </div>

                    <div className="noticia__buttons">
                        <button className="borrar">Eliminar</button>
                        <button className="editar" onClick={functionImg}>Agregar Imagenes</button>
                    </div>
                </div>
    )
}   

export default NoticiaItem;