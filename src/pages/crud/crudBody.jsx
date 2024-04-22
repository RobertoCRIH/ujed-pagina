import Admins from "./admins";
import Alumnos from "./alumnos";
import Carreras from "./carreras";
import Escuelas from "./escuelas";
import Galeria from "./galeria";
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

            case stateList[4]:
                return(
                    <Admins/>
                )
                break

            case stateList[5]:
                return(
                    <>
                        <Galeria/>
                    </>
                )
                break;

            case stateList[6]:
                return(
                    <>
                        <Escuelas/>
                    
                    </>
                )
            default:
                return(<><h1>error</h1></>)
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