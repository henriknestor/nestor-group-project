import Button from "./Button";
import { useState } from "react";

const Janken = ({rand}) => {
    const [num, setNum] = useState(1);

    const genRandom = () => {
        rand = Math.floor(Math.random() *10) +1;
        setNum(rand);
    }

let choice = ""

    const sten = () => {
        choice = "Sten";
    }

    const sax = () => {
        choice = "Sax";
    }

    const pase = () => {
        choice = "Påse";
    }

    // Funkar inte :(

    return (
        <div className="container">

            <p>Randomizer</p>
            {num === 7 ? (
                <h2>You won!</h2>
            ) : (
            <button onClick={genRandom}>Randomize</button>
            )}
            <h2>Your number: {num}</h2>
            <h1>Jankenpon</h1>
            <p>Let´s play Janken</p>
            <button onClick={sten}>Sten</button>
            <button onClick={sax}>Sax</button>
            <button onClick={pase}>Påse</button>
            <h2>Your choice: {choice}</h2>

        </div>
    );
};

export default Janken;