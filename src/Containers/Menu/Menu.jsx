import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Cross from "../../styles/images/black-cross.png";
import { Link } from "react-router-dom";
import Overlay from "../../Components/Overlay/Overlay";

const Menu = ({ toggleMenu }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [id, setId] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [imageFiles, setImageFiles] = useState(null);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("location", location);
      formData.append("country", country);
      formData.append("description", description);
      formData.append("rating", rating);
      formData.append("arrivalDate", arrivalDate);
      formData.append("departureDate", departureDate);

      // Append image files if available
      if (imageFiles) {
        for (let i = 0; i < imageFiles.length; i++) {
          formData.append("imageFiles", imageFiles[i]);
        }
      }

      const response = await fetch(`http://localhost:8080/destination/edit/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        // Handle successful update
        const updatedData = await response.json();
        // Perform necessary actions, such as updating the UI or showing a success message
      } else {
        // Handle update failure
        throw new Error("Failed to update destination");
      }
    } catch (error) {
      console.log(error);
      // Show error message to the user or perform error handling
    }
  };

  return (
    <>
      {showOverlay && <Overlay toggleOverlay={toggleOverlay} handleUpdate={handleUpdate} id={id} />}

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
