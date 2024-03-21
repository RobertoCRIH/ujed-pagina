import {motion} from "framer-motion";

import { useNavigate } from "react-router-dom";

function Card({img,title,desc,goTo}) {
    const navigate = useNavigate()
    return(
        <motion.div className="card" 
        whileHover={{scale:1.1}}
        onClick={(e)=>navigate(goTo)}
        
        >

                <img src={img} alt="" />

                <div className="text">
                    <div className="title">
                        {title}
                    </div>

                    <div className="desc">
                        {desc}
                    </div>
                </div>
                
            </motion.div>
    )
}

export default Card;