import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

const Janken = () => {

    const navigate = useNavigate();

    const signOut = () => {
        navigate("./../home");
    };

    const [pick, setPick] = useState("");

    const [comPick, setComPick] = useState("");

    const sten =() => {
        setPick("Sten")
        setComPick("Påse")
        alert("My choice was Påse, you lost")
    }
    const sax =() => {
        setPick("Sax")
        setComPick("Sten")
        alert("My choice was Sten, you lost")
    }
    const pase =() => {
        setPick("Påse")
        setComPick("Sax")
        alert("My choice was Sax, you lost")
    }



    return (
        <>        
        <div className="container">
            <h1>Jankenpon</h1>
            <p>Let´s play Janken</p>
            <button onClick={sten}>Sten</button>
            <button onClick={sax}>Sax</button>
            <button onClick={pase}>Påse</button>
            <h2>Your choice:</h2>
            <p>{pick}</p>
            <h2>My choice:</h2>
            <p>{comPick}</p>

            <button onClick={signOut}>Sign out</button>
        </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Janken />);

export default Janken;