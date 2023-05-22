import React, { useState } from "react";
import Cross from "../../styles/images/black-cross.png";

const Overlay = ({ handleUpdate, toggleOverlay }) => {
  const [id, setId] = useState("");

  const onUpdate = () => {
    handleUpdate(id);
    toggleOverlay();
  };

  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <img src={Cross} alt="Close" onClick={toggleOverlay} />
        <h2>Update</h2>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={onUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Overlay;
