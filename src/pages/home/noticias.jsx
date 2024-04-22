import { useState , useEffect } from "react";
import Axios from 'axios'
import Noticia from "./noticia";
import FormatDate from "../../functions/FormatDate";

function Noticias() {

    const [noticias,setNoticias] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/noticias/obtenertodas")
        .then(response =>{ 
            setNoticias(response.data)
            console.log(response.data)
        })
    },[])

    function TheFourCards() {
        for (let index = 1; index < 4; index++) {
            return(
                <Noticia title={ noticias[index].titulo }
                        date={ FormatDate( noticias[index].fechapub )}
                />
            )
            
        }
    }
    return(
        <div className="homeNoticias">
            <div className="homeNoticias__title">
                Noticias UJED
            </div>

            <div className="homeNoticias__content">

                {/* {TheFourCards()} */}

                {noticias.map((e,index)=>{
                    if(index < 4){
                    return(
                        <Noticia title={e.titulo} date={ FormatDate(e.fechapub) }/>
                    )
                    }
                })}

                

                
            </div>

            <div className="homeNoticias__footer">
                <button>Mas Noticias</button>
            </div>
        </div>
    )
}

export default Noticias;