import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Header from "./components/header";
import Register from "./components/register";
import Login from "./components/login";
import LoginAndRegister from "./components/LoginAndRegister";
import Loggedin from "./components/logged-in";
import PrivateRoute from "./components/PrivateRoute";
import TestPrivateRoute from "./components/TestPrivateRoute";
import Janken from "./components/jankenpon";
import Randomizer from "./components/randomizer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="loginandregister" element={<LoginAndRegister />} />
          <Route path="/loggedin" element={<Loggedin />} />
          <Route path="/randomizer" element={<Randomizer />} />
          <Route 
            path="/user"
            element={
              <PrivateRoute><TestPrivateRoute /></PrivateRoute>
            }
          />
          <Route path="/janken" element={<Janken />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
