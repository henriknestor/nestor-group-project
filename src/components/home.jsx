import Button from "./Button";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate("./../janken");
    // Funkar inte :(

    return (
        <>
            <div className="container">
            <h1>Home</h1>
            <p>Now you are home</p>
            <Button onClick={navigate}>Play Janken</Button>
            <Link className="App-link" to="./../janken">Play Janken</Link>         
            </div>
        </>
    );
};

export default Home;