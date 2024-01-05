import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const playJanken = () => {
        navigate("./../janken");
    };

    const logIn =() => {
        navigate("./../login")
    }

    return (
        <>
            <div className="container">
            <h1>Home</h1>
            <p>Now you are home</p>
            <button className="btn" type="none" onClick={playJanken}>Play Janken</button>
            <button className="btn" type="none" onClick={logIn}>Login</button>
            </div>
        </>
    );
};

export default Home;