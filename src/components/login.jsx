import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const checkUser = (users) => {
        const user = users.find(
            (user) => user.email === email && user.password === password);
            console.log(user);
            if(user.email === email && user.password === password) return user;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (email === "" || password === ""){
            alert("All fields required")
        }

        const user = await axios
        .get("http://localhost:6201/users")
        .then((res) => checkUser(res.data, email, password))
        .catch((error) => {
            console.log(error);
        })

        if (user.email === email && user.password === password) {
            navigate("./../loggedin");
            //Här måste man se till att routen är inlagd i app.jsx

            localStorage.setItem("user", JSON.stringify(user.id))
        }
        setEmail("");
        setPassword("");
    };


    return (
    <div className="container">
            <form className="label-and-input">
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                <button className="btn" type="submit" onClick={handleSubmit}>Enter</button>

            </form>

    </div>
    );
};

export default Login;