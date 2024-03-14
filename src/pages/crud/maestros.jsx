import RoundTable from "../../components/roundTable/roundTable";
import Searchbar from "../../components/searchbar/searchbar";

function Maestros() {
    return(
        <>
            <Searchbar/>
        
            <div className="title">
                Maestros
            </div>

            <RoundTable>
            <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                    <th>Especialidad</th>
                    <th>Horario</th>
                    <th>Turno</th>
                </tr>
                <tr>
                    <td>Juan Alberto Contreras Chavez</td>
                    <td>juan.alberto@gmail.com</td>
                    <td>6182209945</td>
                    <td>Biologo Marino, Astronauta, Pescador, Amante, Amigo</td>
                    <td>Horario</td>
                    <td>Turno</td>
                </tr>

                <tr>
                    <td>Juan Alberto Contreras Chavez</td>
                    <td>juan.alberto@gmail.com</td>
                    <td>6182209945</td>
                    <td>Biologo Marino</td>
                    <td>Horario</td>
                    <td>Turno</td>
                </tr>
            </RoundTable>


        </>
    )
}

export default Maestros;