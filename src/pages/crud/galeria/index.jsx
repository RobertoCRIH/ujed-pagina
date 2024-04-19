import { useState , useEffect } from "react";
import Axios from "axios";
import Searchbar from "../../../components/searchbar/searchbar";
import GaleriaCrudItem from "./galeriaCrudItem";

import AddButton from "../../../components/addButton";



function Galeria() {
    
    const [imagenes,setImagenes] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/imagenes/getallimages")
        .then(response => {
            setImagenes(response.data)
            console.log(imagenes.data)
        })
        .catch(err => console.log(err.data))
    },[])



    const [image,setImage] = useState(null)

    function HandleImageUpload() {
        const formData = new FormData();

        formData.append('foto',image);

        Axios.post("http://localhost:3001/admin/imagenes/subirfoto",formData)
        .then(response =>{
            window.alert(response.data.Mensaje)
        })
        .catch(err=>{
            window.alert("Algo salió mal. No se pudo subir la imagen")
        })

    }



    return(
        <>  

            <Searchbar/>

            <div className="title">
                Galería
            </div>

            <div>
                <input type="file" onChange={i=>setImage(i.target.files[0])} />
                <br />
                <div style={{padding: "20px 0"}}>
                    <AddButton text={"Subir Imagen"} onClick={(e)=>HandleImageUpload()}/>
                </div>
                {/* <button onClick={e=>HandleImageUpload()}>Subir</button> */}
                
            </div>

            <div style={{
                        display:"flex",
                        flexWrap: "wrap",
                        gap: "50px"
                    }}>
            {imagenes.map(i=>{
                return(
                    
                                                
                    <GaleriaCrudItem src={i.url} id={i.idimagen} />
                )
            })}

            </div>
        
        </>
    )
}

export default Galeria;