import React from "react";
import Destination from "../../Components/Destination/Destination";

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
        </div>
      ))}
    </div>
  );
};

export default Main;
