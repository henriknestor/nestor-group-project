import { useEffect, useState } from "react";
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
    };
    const sax = () => {
        setPick("Sax");
    };
    const pase = () => {
        setPick("Påse");
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

    // Generate result
    const [result, setResult] = useState("");

    const generateResult = () => {
        if (pick === comPick) {
            setResult("Tie");
        } else if (pick === "Sten" && comPick === "Sax" || pick === "Sax" && comPick === "Påse" || pick === "Påse" && comPick === "Sten") {
            setResult("You win!");
        } else if (pick === "Sten" && comPick === "Påse" || pick === "Sax" && comPick === "Sten" || pick === "Påse" && comPick === "Sax") {
            setResult("You loose :(");
        }
    };

    // Trying to get rid of result lag, doesn't really work cause you can't choose the same pick twice :/
    useEffect(() => {
        generateComPick();
        generateResult();
    }, [sten || sax || pase]);

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
            <h2>Outcome:</h2>
            <p>{result}</p>

            <button onClick={signOut}>Sign out</button>
        </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Janken />);

export default Janken;