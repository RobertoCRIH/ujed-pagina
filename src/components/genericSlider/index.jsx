import { useState } from "react"
import "./style.scss"

import {motion} from 'framer-motion'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function GenericSlider({objArray}) {


    function GoForward() {
        if( curState == (objArray.length - 1)){
            setCurState(0)
        }else{
            setCurState(curState+1)
        }
    }

    function GoBack() {
        if( curState == 0 ){
            setCurState(objArray.length - 1)
        }else{
            setCurState(curState - 1)
        }
    }

    const [curState, setCurState] = useState(0)

    // const objArray = [{
    //     img: "https://imgs.search.brave.com/6Tsizd0_xfEI0nM5SOTpN6MCNoVmSendF5a-dIk2ln0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZWZp/bmljaW9uLmRlL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEwLzA4/L2FydGlzdGEtMi5q/cGc",
    //     title: "Nuestra Misión",
    //     body: "El Instituto de Bellas Artes de la UJED tiene como misión impulsar el desarrollo del arte y la cultura del Estado de Durango a través de la investigación, promoción y producción de las diversas manifestaciones artísticas, así como el rescate, protección y preservación del patrimonio cultural tangible e intangible de la entidad, incluyendo la capacitación en las principales áreas del arte, además del estímulo a la creatividad y expresión artística, logrando así una adecuada difusión del legado artístico-cultural local, regional, nacional y universal.        "
    // },
    // {
    //     img: "https://imgs.search.brave.com/6Tsizd0_xfEI0nM5SOTpN6MCNoVmSendF5a-dIk2ln0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZWZp/bmljaW9uLmRlL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEwLzA4/L2FydGlzdGEtMi5q/cGc",
    //     title: "Nuestra Visión",
    //     body: "El instituto de Bellas Artes de la UJED se consolidará como el mejor centro artístico de la entidad, proyectándolo como un instituto de prestigio a nivel nacional, constituyendo un organismo que coadyuve al acrecentamiento de la cultura y las artes mediante una preparación de calidad y excelencia que contribuya al desarrollo e impulso de las diferentes expresiones artísticas, a través de la práctica de los valores universales como el respeto, la honestidad, responsabilidad, ética y el compromiso social, resultando en una sólida formación y difusión de artistas mejor preparados para desarrollar su labor creativa y docente.        "
    // }

// ]
    // if(objArray){
    // return(
    //     <div className="GenericSlider">
            
    //         <div  
    //         className="innerContainer"
    //         >

    //             {objArray.map(i=>{
    //                 return(
    //                     <div className="item">
    //                         <img src={i.img} alt="" />

    //                         <div className="text">
    //                             <h4> {i.title} </h4>
    //                             <p>
    //                                 {i.body}
    //                             </p>
    //                         </div>
                        
    //                     </div>
    //                 )
    //             })}

                

    //         </div>

    //     </div>
    // )}
    if(objArray){
    return( 
        <div className="sliderII">

            <div className="arrow">
                <button onClick={e=>{
                    GoBack()
                }}>
                <IoIosArrowBack/>
                </button>
            </div>

            

            <div className="sliderII__card" style={{
                backgroundImage: `url(${objArray[curState].img})`
            }}>

                <div className="sliderII__card__content">
                    <h3> {objArray[curState].title} </h3>
                    <p>
                        {objArray[curState].body  }
                    </p>

                    <div className="buttons">
                        
                        {objArray.map((e,index)=>{
                            if(index==curState){
                                return(
                                    <button className="selected" onClick={x=>{
                                        setCurState(index)
                                    }}>  </button>
                                )   
                            }else{
                                return(
                                    <button onClick={x=>{
                                        setCurState(index)
                                    }}>  </button>
                                )  
                            }
                        })}

                    </div>

                    
                </div>

                {/* <div className="arrows">
                    <button> <IoIosArrowBack/> </button>
                    <button> <IoIosArrowForward/> </button>
                </div> */}

            </div>

             
            
            <div className="arrow">
                <button onClick={e=>{
                    GoForward()
                }}>
                <IoIosArrowForward/>
                </button>
            </div>
            

        </div>
    )
    }
}

export default GenericSlider;