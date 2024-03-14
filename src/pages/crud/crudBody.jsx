import Alumnos from "./alumnos";
import Maestros from "./maestros";

function CrudBody({state,stateList}) {

    function StatesSwitch() {
        switch (state) {
            case stateList[0]:
                return(
                    <Maestros/>
                )
                break;

            case stateList[1]:
                return(
                    <Alumnos/>
                )
            break;
        
            default:
                break;
        }
    }

    return(
        <div className="crud__body">
            
            {StatesSwitch()}
        </div>
    )
}

export default CrudBody;