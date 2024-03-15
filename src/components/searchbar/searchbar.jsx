import { FaSearch } from "react-icons/fa";
import "./style.scss"
function Searchbar({changeState}) {
    return(
        <div className="searchbar">
            <div className="searchbar__content">
                <FaSearch style={{color:"grey"}}/>
                <input type="text" placeholder="Buscar..." onChange={(e)=>changeState(e.target.value)} />
            </div>
        </div>
    )
}

export default Searchbar;