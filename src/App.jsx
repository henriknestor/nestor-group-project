import { BrowseRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Home from "./components/home";
import Header from "./components/header";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <BrowseRouter>
      <div className="App">
        <h1>Rubrik</h1>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowseRouter>
  );
}

export default App;
