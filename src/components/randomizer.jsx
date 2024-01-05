import { useState } from "react";

// const Randomizer = ({rand}) => {
//     const [num, setNum] = useState(1);

//     const genRandom = () => {
//         rand = Math.floor(Math.random() *10) +1;
//         setNum(rand);
//     }

//     return (
//         <>
//         <div className="container">

//             <p>Randomizer</p>
//             {num === 7 ? (
//                 <h2>You won!</h2>
//             ) : (
//             <button onClick={genRandom}>Randomize</button>
//             )}
//             <h2>Your number: {num}</h2>
//         </div>
//         </>
//     );
// };

// export default Randomizer;

import ReactDOM from "react-dom/client";

const Randomizer = () => {
        const [pick, setPick] = useState("...");

        const sten =() => {
            setPick("Sten")
        }
        const sax =() => {
            setPick("Sax")
        }
        const pase =() => {
            setPick("Påse")
        }


    return (
        <>
        <h1>My pick is {pick}</h1>
        <button type="button" onClick={sten}>Sten</button>
        <button type="button" onClick={sax}>Sax</button>
        <button type="button" onClick={pase}>Påse</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Randomizer />);

export default Randomizer;