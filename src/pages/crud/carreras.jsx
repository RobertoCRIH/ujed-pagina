import { IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";
import CarrerasItem from "./carrerasItem";

function Carreras() {


    return(
        <div className="carreras">
            <br /> <br />
            
            <CarrerasItem title={"Media Superior"}/>
            <CarrerasItem title={"Licenciatura e Ingenierías"}/>
            <CarrerasItem title={"Posgrados"}/>
            <CarrerasItem title={"Escuelas y Facultades"}/>


            
        </div>
    )
}

export default Carreras;