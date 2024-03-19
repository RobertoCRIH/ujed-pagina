import "./style.scss"

import { Chart as ChartJS, ArcElement , Tooltip , Legend } from "chart.js";

import {Pie} from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function PieChart({data}) {

    // const data = {
    //     labels:['Qumicos','Lic. en Medicina','Matematicas','Dentista'],
    //     datasets:[
    //         {
    //             data: [20,50,60],
    //             backgroundColor: ["aqua","red","green"] 
    //         }
    //     ]
    // }; Este es un ejemplo de la data que tiene que haber en la tabla
    const options ={}
    return(
        <>
            <div className="chart">
                <div className="chart__main">
                    <Pie
                        data={data}
                        options={options}
                    ></Pie>
                </div>
                <div className="chart__secondary">
                    <div className="item">
                        <p className="item__title">Alumnos Registrados</p>
                        <p className="item__numberMain">607</p>
                    </div>
                    <div className="item">
                        <p className="item__title">Perfil Mas Común</p>
                        <p className="item__secondary">Lic. en Medicina</p>
                        <p className="item__numberMain">300</p>
                    </div>
                    <div className="item">
                        <p className="item__title">Perfil Menos Común</p>
                        <p className="item__secondary">Lic. en Electonica</p>
                        <p className="item__numberMain">12</p>
                    </div>
                    <div className="item">
                        <p className="item__title">Perfil Menos Común</p>
                        <p className="item__secondary">Lic. en Electonica</p>
                        <p className="item__numberMain">12</p>
                    </div>
                    <div className="item">
                        <p className="item__title">Perfil Menos Común</p>
                        <p className="item__secondary">Lic. en Electonica</p>
                        <p className="item__numberMain">12</p>
                    </div>
                    
                </div>
            </div>
            
        
        </>
    )
}

export default PieChart;