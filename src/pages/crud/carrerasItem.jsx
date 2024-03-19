import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";


function CarrerasItem({title}) {
    const [visible,setVisible] = useState(false)

    function ListDisplay() {
        if(visible){
            return(
                <div className="list">
                    
                    <Link className="list__item" to={{pathname:`/admin/editarcarrera/${0}`}}>
                    
                        <div>Bachillerato General</div>
                        <div>Escuela Preparatoria</div>
                        <div>Durango</div>
                    
                    </Link>

                    <Link className="list__item" to={{pathname:`/admin/editarcarrera/${0}`}}>
                    
                        <div>Bachillerato General</div>
                        <div>Escuela Preparatoria</div>
                        <div>Durango</div>
                    
                    </Link>

                    <Link className="list__item" to={{pathname:`/admin/editarcarrera/${0}`}}>
                    
                        <div>Bachillerato General</div>
                        <div>Escuela Preparatoria</div>
                        <div>Durango</div>
                    
                    </Link>

                </div>
            )
        }
    }
    return(
        <div className="carreras__item">
            <button className="title" onClick={(e)=>setVisible(!visible)}>
                {title} <IoIosArrowDown/>
            </button>

            {ListDisplay()}
        </div>
    )
}

export default CarrerasItem;