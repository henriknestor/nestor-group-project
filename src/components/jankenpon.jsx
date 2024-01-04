import Button from "./Button";

const Janken = () => {
    const sten = alert("Sten");

    // Äh, jag fattar ingenting :(

    return (
        <>
            <div className="container">
            <h1>Jankenpon</h1>
            <p>Let´s play janken</p>
            <Button onClick={sten}>Sten</Button>
            <button onClick={alert("Sax")}>Sax</button>
            <Button>Påse</Button>
            </div>
        </>
    );
};

export default Janken;