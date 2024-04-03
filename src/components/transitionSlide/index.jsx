import "./style.scss";

import {motion , AnimatePresence} from 'framer-motion';



function TransitionSlide({nombreCarrera,area,icon}) {
    return(
        <AnimatePresence>
            <motion.div 
                initial = {{ opacity: 1 }}
                animate = {{
                    height: ["100%", "0"],
                }}
                transition={{duration: 0.5, delay: 3}}
                className="tSlide"
            >
                <motion.div 
                initial ={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    duration: 0.5,
                    delay: 0.5
                }}
                className="content">
                    <div className="icon">
                        {icon}
                    </div>

                    <div 
                    className="text">
                        <h1>{nombreCarrera}</h1>
                        <p>{area}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
        
    )
}

export default TransitionSlide;