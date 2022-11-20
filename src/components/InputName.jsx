import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/nameSlice";

const InputName = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enterName = () => {
    dispatch(changeName(input));
    navigate("/pokedex");
  };

  return (
    <div>
      InputName
      <h1>nuevo name</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={enterName}>Enviar</button>
    </div>
  );
};

export default InputName;
