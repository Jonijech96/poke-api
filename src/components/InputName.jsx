import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/nameSlice";

const InputName = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const enterName = (e) => {
    e.preventDefault();
    dispatch(changeName(input));
    navigate("/pokedex");
  };

  return (
    <div className="input-name__content">
      
      <h1>Enter your name</h1>
      <form action="" onSubmit={enterName}>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button>Enviar</button>
      </form>
    </div>
  );
};

export default InputName;
