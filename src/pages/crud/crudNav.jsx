import logo from "../../assets/images/ujed-logo.png"
//Icons
import { FaUserTie } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";



function CrudNav({changeFunction}) {
    return(
        <div className="crud__nav">

            <div className="logo">
                <img src={logo} alt="" />
            </div> 

            <div className="buttons">

                <button onClick={(e)=> {changeFunction("Maestros")}}> <FaUserTie style={{marginRight:"20px"}}/> Maestros</button>
                <button onClick={(e)=> {changeFunction("Alumnos")}}> <FaUserGraduate style={{marginRight:"20px"}}/> Alumnos</button>

            </div>
        </div>
    )
}

export default CrudNav;