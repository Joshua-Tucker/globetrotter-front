import React, { useState } from "react";

function Form() {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [images, setImages] = useState([]);
const [imageFile, setImageFile] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("location", location);
    formData.append("country", country);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("arrivalDate", arrivalDate);
    formData.append("departureDate", departureDate);
    formData.append("imageFile", imageFile);

    fetch("http://localhost:8080/add", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        alert("Destination added successfully");
      } else {
        alert("Failed to add destination");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label htmlFor="imageFile">Image:</label>
      <input
        type="file"
        id="imageFile"
        accept="image/*"
        onChange={(event) => setImageFile(event.target.files[0])} // Store only the first selected file
        required
      />

      <button type="submit">Add Destination</button>
    </form>
  );
}

export default Form;
