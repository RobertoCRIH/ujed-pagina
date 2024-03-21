import { useParams } from "react-router-dom";
import MainNav from "../../components/mainNav.jsx";


function StateMachine(page) {
    switch (page) {
        case "licenciaturas":
                return(
                    <>
                        <h1>Estas son las licenciaturas</h1>
                    
                    </>
                )
            break;
    
        default:
            break;
    }
}

function OfertaEducativa() {

    let {page} = useParams();
    return(
        <>
            <MainNav/>
            {StateMachine(page)}

        </>
    )
}

export default OfertaEducativa;