import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cross from "../../styles/images/black-cross.png";

const Overlay = ({ toggleOverlay, onUpdate }) => {
    const [id, setId] = useState("");
  
    const handleUpdate = () => {
      onUpdate(id);
    };
  
    return (
      <div className="overlay">
        <input
          type="text"
          value={id}
          onChange={(event) => setId(event.target.value)}
          placeholder="Enter Destination ID"
        />
        <img src={Cross} onClick={toggleOverlay} />
        <Button text="Update" handleClick={() => onUpdate(id)} />
      </div>
    );
  };
  

export default Overlay;
