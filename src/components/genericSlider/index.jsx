import "./style.scss"

import {motion} from 'framer-motion'

function GenericSlider({objArray}) {

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
    if(objArray){
    return(
        <div className="GenericSlider">
            
            <motion.div  
            className="innerContainer"
            >

                {objArray.map(i=>{
                    return(
                        <div className="item">
                            <img src={i.img} alt="" />

                            <div className="text">
                                <h4> {i.title} </h4>
                                <p>
                                    {i.body}
                                </p>
                            </div>
                        
                        </div>
                    )
                })}

                

            </motion.div>

        </div>
    )}
}

export default GenericSlider;