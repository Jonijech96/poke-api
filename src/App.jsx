import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import InputName from "./components/InputName";
import Pokedex from "./components/Pokedex";
import PokemonDetails from "./components/PokemonDetails";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<InputName />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
      <Footer />
    </div>

    </HashRouter>
  );
}

export default App;
