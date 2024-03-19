import RoundTable from "../../components/roundTable/roundTable";
import Searchbar from "../../components/searchbar/searchbar";
import PieChart from "../../components/pieChart";


//TestData
import alumnos from "../../data/alumnosTestData";
import AddButton from "../../components/addButton";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const data = {
    labels:['Qumicos','Lic. en Medicina','Matematicas','Dentista'],
    datasets:[
        {
            data: [20,50,60,100],
            backgroundColor: ["aqua","red","green","orange"] 
        }
    ]
};



function TestFunc(test) {
    if(test){
        return(
            <h1>This is a test</h1>
        )
    }
}

function Alumnos() {
    const [test,setTest] = useState(true)
    function Log() {
        console.log("Hollla")
    }
    return(
        <>
            <br />

            <div className="title">
                Alumnos
            </div>

            {TestFunc(test)}

            <PieChart data={data}/>
            <Searchbar/>
            
            <br />

            <div style={{padding: "20px 0"}}>
                <AddButton text={"Agregar estudiante"} onClick={(e)=>{setTest(!test)}}/>
            </div>
            
            <RoundTable>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Matricula</th>
                        <th>Perfil de egreso</th>
                        <th>Generación</th>
                        <th>Acciones</th>
                    </tr>
                    {alumnos.map((e)=>{
                        return(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.nombre}</td>
                                <td>{e.apellidos}</td> 
                                <td>{e.correo}</td>
                                <td>{e.matricula}</td>
                                <td>{e.perfil}</td>
                                <td>{e.generacion}</td>

                                <td>
                                        <button><FaEdit/></button>
                                        <button><MdDelete/></button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </RoundTable>
        
        </>
    )
}
export default Alumnos;