import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
