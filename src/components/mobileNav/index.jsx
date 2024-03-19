import logo from "../../assets/images/ujed-logo.png";
import "./style.scss"
import { MdOutlineMenu } from "react-icons/md";

function MobileNav() {
    return(
        <div className="mobileNav">
            
            <div className="header">
                <img src={logo} alt="" />
                <button> <MdOutlineMenu/> </button>
            </div>
            

        </div>
    )
}

export default MobileNav;