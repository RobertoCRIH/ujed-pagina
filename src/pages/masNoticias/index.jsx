import MainNav from "../../components/mainNav/index.jsx"
import "./style.scss"

import Footer from "../../components/footer/index.jsx";


import {motion} from 'framer-motion'

function MasNoticias() {

    const testArray = [1,2,3,4,5,6,7,8,9]

    return(
        <>  
            <MainNav/>
            
        
            <div className="masNoticias">
                <div className="title">
                    <h1>Noticias</h1>
                </div>

                

                <div className="noticiasContainer">

                    {testArray.map(e=>{
                        return(
                            <motion.div 
                            className="noticiasContainer__card"
                            whileHover={{
                                scale: 1.1
                            }}
                            >
                                <img src="https://notipress.mx/img/content/15753.webp" alt="" />

                                <div className="noticiasContainer__card__text">
                                    <div className="fecha">
                                        21 / 03 / 2024
                                    </div>
                                    <h2>Este es el título de una noticia</h2>
                                </div>
                            </motion.div>
                        )
                    })}
                    

                </div>
            </div>  

            <Footer/>
        
        </>
    )
}

export default MasNoticias;