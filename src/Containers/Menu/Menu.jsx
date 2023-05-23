import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Cross from "../../styles/images/black-cross.png";
import Overlay from "../../Components/Overlay/Overlay";
import { createBrowserHistory } from "history";

const Menu = ({ toggleMenu }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [id, setId] = useState("");
  const [destinationData, setDestinationData] = useState(null);
  const history = createBrowserHistory();
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const toggleOverlay = () => {
    fetchDestinationData(id);
    setShowOverlay(!showOverlay);
  };

  const handleOverlayUpdate = (id) => {
    console.log("Updating with id:", id);
    setId(id);
    fetchDestinationData(id);
  };

  const fetchDestinationData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/${id}`);
      if (response.ok) {
        const data = await response.json();
        setDestinationData(data);
        populateFormData(data);
      } else {
        throw new Error("Failed to fetch destination data");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to fetch destination data");
    }
  };

  const populateFormData = (data) => {
    setLocation(data.location);
    setCountry(data.country);
    setDescription(data.description);
    setRating(data.rating);
    setArrivalDate(data.arrivalDate);
    setDepartureDate(data.departureDate);
  };
  

  return (
    <>
      {showOverlay && (
        <Overlay
          toggleOverlay={toggleOverlay}
          handleOverlayUpdate={handleOverlayUpdate}
          setId={setId}
          id={id}
        />
      )}

      <div className="menu">
        <Link to={"/form"} style={{ textDecoration: "none", color: "black" }}>
          <Button text="Add" />
        </Link>
        <Button text="Edit" handleClick={toggleOverlay} />

        <img src={Cross} alt="Cross" onClick={toggleMenu} />
      </div>
    </>
  );
};

export default Menu;
