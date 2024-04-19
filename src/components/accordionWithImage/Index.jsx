import { useState } from "react";
import "./style.scss"

import {motion} from 'framer-motion';

import { IoIosArrowDown } from "react-icons/io";


function AccordionWithImage({title,desc,img}) {

    const [state,setState] = useState(false)

    function toggleAccordion() {
        if(state){
            return(
                <motion.div 
                initial={{scaleY: 0}}

                animate={{scaleY:1}}
                className="accordionWImage__content">

                    

                    <p className="texto">
                        {desc}
                    </p>

                    <div className="imagen">
                        <img src={img} alt="" />
                    </div>

                    

                </motion.div>
            )
        }
    }
    
    return(

        <div className="accordionWImage">

            <div className="accordionWImage__header" onClick={e=> setState(!state)}>
                {title} <IoIosArrowDown/>
            </div>

            {toggleAccordion()}
                
        </div>
    )
}

export default AccordionWithImage;