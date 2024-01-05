import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkEmail = (users) => {
        const user = users.find((user) => user.email === email);
        if(user) return user;
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === "" || email === "" || password === ""){
            alert("All fields required")
            navigate("./../register");
        }

        const user = await axios
            .get("http://localhost:6201/users")
            .then((res) => checkEmail(res.data, email));

            if(user) {
                alert("User already exists")
            } else {
                const user = ({name: username, password: password, email: email});
                axios.post("http://localhost:6201/users", user)
                .then(alert("User created"))
                .then(navigate("./../loggedin"));
            }

    }

    return (
        <div className="container">
        
                <form className="label-and-input">
                    <h1>Register new user</h1>
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            id="name"
                            placeholder="Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
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
                    
                        <button className="btn" type="submit" onClick={handleSubmit}>Register</button>

                </form>
          
        </div>
    );
};

export default Register;