import Axios from 'axios';
function GaleriaCrudItem({src,id}) {

    function BorrarFoto(id) {
        Axios.delete("http://localhost:3001/admin/imagenes/borrarfoto",{
            data: {idimagen: id}
        })
        .then( response => {
            window.alert("La imagen fue eliminada")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(

        <div style={{
            width: "400px"
        }}>
            <p>
                Id: {id}
            </p>
            <img style={{
                width: "400px",
                height: "400px",
                objectFit: "contain",
                border: "1px solid grey"
            }} src={"http://localhost:3001/uploads/"+src} alt="" />

            

            <h5 style={{
                textAlign: "center"
            }}>
                {src}
            </h5>

            <button style={{
                backgroundColor: "red",
                color: "white",
                width: "100%",
                border: "none",
                padding:" 5px 0",
                borderRadius: "15px",
                fontWeight: "bold"
            }}
            onClick={e=>{
                BorrarFoto(id)
            }}
            >Eliminar Imagen</button>

        </div>
    )
}

export default GaleriaCrudItem;