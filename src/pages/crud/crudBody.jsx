import Alumnos from "./alumnos";
import Carreras from "./carreras";
import Maestros from "./maestros";
import Noticias from "./noticias";

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

            case stateList[2]:
                return(
                    <Carreras/>
                )
            break;

            case stateList[3]:
                return(
                    <Noticias/>
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