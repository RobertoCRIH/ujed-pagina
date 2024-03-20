import AddButton from "../../components/addButton";
import RoundTable from "../../components/roundTable/roundTable";
import Searchbar from "../../components/searchbar/searchbar";

function Admins() {
    return(
        <>
        
            <Searchbar/>
            <div className="title">
                Administradores
            </div>

            <div style={{padding: "20px 0"}}>
                <AddButton text={"Agregar maestro"}/>
            </div>

            <RoundTable>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Contraseña</th>
                </tr>
                <tr>
                    <td>Juan Gabriel Frances Gonzalez</td>
                    <td>juancho.f@gmail.com</td>
                    <td>juanIsLove12</td>
                </tr>
            </RoundTable>
        </>
    )
}

export default Admins;