import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

const Janken = () => {


    // Sign out
    const navigate = useNavigate();

    const signOut = () => {
        navigate("./../home");
    };

    // Set players choice
    const [pick, setPick] = useState("^ Pick one ^");

    const sten = () => {
        setPick("Sten");
        generateComPick();
    };
    const sax = () => {
        setPick("Sax");
        generateComPick();
    };
    const pase = () => {
        setPick("Påse");
        generateComPick();
    };

 
    // Set computers choice (random)

    const comPicks = [
        "Sten",
        "Sax",
        "Påse",
      ];
      
      const getComPick = () => {
        return comPicks[Math.floor(Math.random() * comPicks.length)];
      };
      
        const [comPick, setComPick] = useState(getComPick());
        const generateComPick = () => {
          const randomComPick = getComPick();
          setComPick(randomComPick);
        };

    return (
        <>        
        <div className="container">
            <h1>Jankenpon</h1>
            <p>Let's play Janken</p>
            <button onClick={sten}>Sten</button>
            <button onClick={sax}>Sax</button>
            <button onClick={pase}>Påse</button>
            <h2>Your pick:</h2>
            <p>{pick}</p>
            <h2>Computers pick:</h2>
            <p>{comPick}</p>

            <button onClick={signOut}>Sign out</button>
        </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Janken />);

export default Janken;