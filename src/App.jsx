import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import { useParams } from "react-router-dom";

function App() {
  const [destinationData, setDestinationData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { id } = useParams(); // Access the destinationId parameter from the URL

  const getDestinations = async () => {
    try {
      const response = await fetch("http://localhost:8080/all");
      if (response.ok) {
        const data = await response.json();
        setDestinationData(data);
        setFilteredData(data);
      } else {
        console.log("Error: Unable to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main data={filteredData} getDestinations={getDestinations} />} />
          <Route path="/form" element={<Form isEditing={false} />} />
          <Route path="/update/:id" component={Form} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
