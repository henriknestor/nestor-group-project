import { useState } from "react";

const Janken = () => {

let choice = "hkj";

    const sten = () => {
        choice = "Sten";
    }

    const sax = () => {
        choice = "Sax";
    }

    const pase = () => {
        choice = "Påse";
    }

    const fisk = () => {
        alert="burk";
    }

    // Funkar inte :(

    return (
        <>        
        <div className="container">
            <h1>Jankenpon</h1>
            <p>Let´s play Janken</p>
            <button onClick={sten}>Sten</button>
            <button onClick={sax}>Sax</button>
            <button onClick={fisk}>Påse</button>
            <h2>Your choice: {choice}</h2>
        </div>
        </>
    );
};

export default Janken;