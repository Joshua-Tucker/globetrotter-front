import React from "react";
import Cross from "../../styles/images/black-cross.png";
import { Link } from "react-router-dom";

const Overlay = ({ toggleOverlay, handleOverlayUpdate, setId, id }) => {
  const onUpdate = () => {
    console.log("Updating with id:", id);
    handleOverlayUpdate(id);
    toggleOverlay();
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <img src={Cross} alt="Close" onClick={toggleOverlay} />
        <h2>Update</h2>
        <input type="text" value={id} onChange={handleIdChange} />
        <Link
          to={`/form/edit/${id}`} // Corrected string interpolation
          style={{ textDecoration: "none", color: "black" }}
        >
          <button onClick={onUpdate}>Update</button>
        </Link>
      </div>
    </div>
  );
};

export default Overlay;


// First solo trip around Porto, spent a few days here then down to Faro. Had an incredible time and met some great people, this was when I realised that coding was the gateway to having the sort of lifestyle I wanted to live!