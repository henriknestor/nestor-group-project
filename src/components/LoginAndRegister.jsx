import Login from "./login";
import Register from "./register";

const LoginAndRegister =() => {
    return (
        <div className="App">
            <Login />
            <p>or</p>
            <Register />
        </div>
    );
};

export default LoginAndRegister;