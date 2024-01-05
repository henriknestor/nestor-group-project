import { useState } from "react";

const Randomizer = ({rand}) => {
    const [num, setNum] = useState(1);

    const genRandom = () => {
        rand = Math.floor(Math.random() *10) +1;
        setNum(rand);
    }

    return (
        <>
        <div className="container">

            <p>Randomizer</p>
            {num === 7 ? (
                <h2>You won!</h2>
            ) : (
            <button onClick={genRandom}>Randomize</button>
            )}
            <h2>Your number: {num}</h2>
        </div>
        </>
    );
};

export default Randomizer;