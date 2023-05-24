import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Form.scss";

const Form = ({ isEditing }) => {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [imageFiles, setImageFiles] = useState(null);
  const [destinationData, setDestinationData] = useState(null);
  const locationState = useLocation().state;
  const { id } = useParams();

  useEffect(() => {
    if (id || (isEditing && locationState && locationState.destinationData)) {
      fetchDestinationData();
    }
  }, [id, isEditing, locationState]);

  const fetchDestinationData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/${id}`);
      if (response.ok) {
        const data = await response.json();
        const {
          location,
          country,
          description,
          rating,
          arrivalDate,
          departureDate,
        } = data;
        setLocation(location);
        setCountry(country);
        setDescription(description);
        setRating(rating);
        setArrivalDate(arrivalDate);
        setDepartureDate(departureDate);
      } else {
        throw new Error("Failed to fetch destination data");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to fetch destination data");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      let requestData;

      if (isEditing) {
        // Handle JSON request for update
        requestData = {
          location,
          country,
          description,
          rating,
          arrivalDate,
          departureDate,
          imageFiles: imageFiles || [],
        };

        response = await fetch(`http://localhost:8080/destination/edit/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
      } else {
        // Handle form data request for addition
        const formData = new FormData();
        formData.append("location", location);
        formData.append("country", country);
        formData.append("description", description);
        formData.append("rating", rating);
        formData.append("arrivalDate", arrivalDate);
        formData.append("departureDate", departureDate);
        for (let i = 0; i < imageFiles.length; i++) {
          formData.append(`imageFiles`, imageFiles[i]);
        }
        response = await fetch("http://localhost:8080/add", {
          method: "POST",
          body: formData,
        });
      }

      if (response.ok) {
        const data = await response.json();
        setDestinationData(data);
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to submit the form");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="form">
        <div className="form__left">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(event) => {
              const value = event.target.value;
              if (value >= 1 && value <= 12) {
                setRating(value);
              }
            }}
            min={1}
            max={12}
            required
          />
        </div>

        <div className="form__right">
          <label htmlFor="arrivalDate">Arrival date:</label>
          <input
            type="date"
            id="arrivalDate"
            value={arrivalDate}
            onChange={(event) => setArrivalDate(event.target.value)}
            required
          />

          <label htmlFor="departureDate">Departure date:</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
            required
          />

          <input
            type="file"
            id="imageFiles"
            accept="image/*"
            multiple
            onChange={(event) => {
              const files = Array.from(event.target.files);
              setImageFiles(files);
            }}
            required
          />

          <button id="submit" type="submit">
            {isEditing ? "Update Destination" : "Add Destination"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

//  encType="multipart/form-data"
