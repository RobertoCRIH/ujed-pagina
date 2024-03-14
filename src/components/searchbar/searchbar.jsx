import { FaSearch } from "react-icons/fa";
import "./style.scss"
function Searchbar() {
    return(
        <div className="searchbar">
            <div className="searchbar__content">
                <FaSearch style={{color:"grey"}}/>
                <input type="text" placeholder="Buscar..." />
            </div>
        </div>
    )
}

export default Searchbar;