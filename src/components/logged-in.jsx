import { useNavigate } from "react-router-dom";

const Loggedin = () => {

    const navigate = useNavigate();

    const signOut = () => {
        navigate("./../home");
    };

    const playJanken = () => {
        navigate("./../janken");
    };

    return (
        <>
            <div className="container">
            <h1>Logged in</h1>
            <p>Now you are logged in</p>
            <button className="btn" type="none" onClick={playJanken}>Play Janken</button>
            <button className="btn" type="signout" onClick={signOut}>Sign out</button>
            </div>
        </>
    );
};

export default Loggedin;