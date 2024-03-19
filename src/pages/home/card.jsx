import {motion} from "framer-motion";


function Card({img,title,desc}) {
    return(
        <motion.div className="card" whileHover={{scale:1.1}}>

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