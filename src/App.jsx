import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";
import Form from "./Form/Form";

function App() {
  const [destinationData, setDestinationData] = useState([]); // State to store the destination data
  const [filteredData, setFilteredData] = useState([]); // State to store the filtered data

  const getDestinations = async () => {
    try {
      const response = await fetch("http://localhost:8080/all"); // Make an API request to fetch the destination data
      if (response.ok) {
        const data = await response.json(); // Parse the response data
        setDestinationData(data); // Set the destination data in state
        setFilteredData(data); // Set the filtered data in state (initially the same as destination data)
      } else {
        console.log("Error: Unable to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDestinations(); // Fetch the destination data when the component mounts (runs only once)
  }, []);

  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <Main data={filteredData} />{" "}
      <Form/>
      {/* Render the Main component and pass the filteredData as prop */}
    </div>
  );
}

export default App;
