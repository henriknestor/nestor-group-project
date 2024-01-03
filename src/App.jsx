import { BrowseRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <BrowseRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowseRouter>
  );
}

export default App;
