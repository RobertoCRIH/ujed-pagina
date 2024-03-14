import { Link } from "react-router-dom";

function Home() {
    return(
        <>
            <h1>Home</h1>
            <img src="https://i.pinimg.com/736x/ba/8f/75/ba8f75b795a60f216cfe5f1bb2071006.jpg" alt="" />
            <Link to={"/admin"}>See the crud</Link>
        </>

    )
}

export default Home;