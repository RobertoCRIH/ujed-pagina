import { useState } from "react";
import logo from "../../assets/images/ujed-logo.png"
//Icons
import { FaUserTie } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";







function CrudNav({changeFunction}) {
    const [visible,setVisible] = useState(true)
    if(visible){
        return(
            <>
                
                <div className="crud__nav">
                    
                    <div className="header" >
                        <button onClick={(e)=>setVisible(false)}><FaArrowLeft/></button>
                    </div>
                    
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div> 

                    <div className="buttons">

                        <button onClick={(e)=> {changeFunction("Maestros")}}> <FaUserTie style={{marginRight:"20px"}}/> Maestros</button>
                        <button onClick={(e)=> {changeFunction("Alumnos")}}> <FaUserGraduate style={{marginRight:"20px"}}/> Alumnos</button>
                        <button onClick={(e)=> {changeFunction("Carreras")}}> <FaBook style={{marginRight:"20px"}}/> Carreras</button>
                        <button onClick={(e)=> {changeFunction("Noticias")}}> <FaNewspaper style={{marginRight:"20px"}}/> Noticias</button>
                        <button onClick={(e)=> {changeFunction("Admins")}}> <FaUserGear style={{marginRight:"20px"}}/> Admins</button>
                        <button onClick={(e)=> {changeFunction("Galería")}}> <FaUserGear style={{marginRight:"20px"}}/> Galería</button>
                        <button onClick={(e)=> {changeFunction("Escuelas")}}> <FaSchool style={{marginRight:"20px"}}/> Escuelas</button>

                    </div>
                    
                </div>
                </>
        )
    }else{
        return(
            <button className="crud__nav__switchBttn" onClick={(e)=>setVisible(true)}> <FiMenu/> </button>
        )
    }
    
}

export default CrudNav;