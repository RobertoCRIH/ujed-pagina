
import './style.scss'

import {motion} from 'framer-motion'

function PageSwitch({lista = [],passValue}) {


    return(
        <div className='pageSwitch'>

            {lista.map(e=>{
                return(
                    <motion.button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        onClick={x=>passValue(e)}
                    > {e} </motion.button>
                )
            })}
            
            

        </div>
    )
}

export default PageSwitch;