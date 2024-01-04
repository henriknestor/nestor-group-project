import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
            <h1>Home</h1>
            <p>Now you are home</p>
            <Button onClick={navigate}>Najs</Button>
            </div>
        </>
    );
};

export default Home;