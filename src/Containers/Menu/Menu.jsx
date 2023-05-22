import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Cross from "../../styles/images/black-cross.png";
import { Link } from "react-router-dom";
import Overlay from "../../Components/Overlay/Overlay";

const Menu = ({ toggleMenu }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [id, setId] = useState("");

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleUpdate = (id) => {
    // Handle the update logic here or call the appropriate function
    console.log("Updating destination with ID:", id);
    toggleOverlay();
  };

  return (
    <>
      {showOverlay && <Overlay toggleOverlay={toggleOverlay} handleUpdate={handleUpdate} />}

      <div className="menu">
        <Link to={"/form"} style={{ textDecoration: "none", color: "black" }}>
          <Button text="Add" />
        </Link>
        <Button text="Edit" handleClick={toggleOverlay} />

        <img src={Cross} onClick={toggleMenu} />
      </div>
    </>
  );
};

export default Menu;
