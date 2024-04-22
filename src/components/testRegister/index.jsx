import { useState } from "react";
import Axios from 'axios';

function TestRegister() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function AddUser() {
        Axios.post("http://localhost:3001/registrar",{
            username: username,
            password: password
        }).then(res=>{
            window.alert("Registrado")
        })
    }
    return(
        <div>

            <input type="text"  placeholder="username" onChange={e=>setUsername(e.target.value)}/> <br />
            <input type="text" placeholder="password" onChange={e=>setPassword(e.target.value)}/><br />
            <br />
            <button onClick={e=>AddUser()}>subir</button>
        </div>
    )
}

export default TestRegister;