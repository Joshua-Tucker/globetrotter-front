import React from "react";
import Destination from "../../Components/Destination/Destination";
import { Link } from "react-router-dom";

const Main = ({ data }) => {
  return (
    <div>
      {data.map((destination, index) => (
        <div key={index}>
          <Destination
            arrivalDate={destination.arrivalDate}
            departureDate={destination.departureDate}
            location={destination.location}
            country={destination.country}
            rating={destination.rating}
            description={destination.description}
            images={destination.images}
          />
          <Link to={`/update/${destination.id}`}>Update</Link>
        </div>
      ))}
    </div>
  );
};

export default Main;
