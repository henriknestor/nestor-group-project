import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Header from "./components/header";
import Register from "./components/register";
import Login from "./components/login";
import Loggedin from "./components/logged-in";

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
          <Route path="/loggedin" element={<Loggedin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
