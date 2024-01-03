import { useState } from "react";
import axios from "axios";
import Card from "./Card";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkUser = (users) => {
        const user = users.find(
            (user) => user.email === email && user.password === password);
        if(user.email === email && user.password === password) return user;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (email === "" || password === ""){
            alert("All fields required")
        }

        const user = await axios
        .get("/users")
        .then((res) => checkUser(res.data, email, password));

    }

    return (
    <div className="container">
        <Card>
            <form className="form-container">
                <h1>Login</h1>
                <label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button className="btn" type="submit" >
                    <p>Log in</p>
                </button>
            </form>
        </Card>
    </div>
    );
};

export default Login;