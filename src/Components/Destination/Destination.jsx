import React from "react";
import "./Destination.scss";
import CarouselImport from "react-elastic-carousel";

const Destination = ({
  arrivalDate,
  departureDate,
  location,
  country,
  rating,
  description,
  images,
}) => {
  return (
    <div className="destination">
      <div className="destination__top">
        <div className="destination__location">{location}</div>
        <div className="destination__dates">
          {arrivalDate}--{departureDate}
        </div>
        <div className="destination__country">{country}</div>
      </div>
      <div className="destination__images">
        <CarouselImport className="destination__carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={`data:image/*;base64,${image}`}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </CarouselImport>
      </div>
      <div className="destination__details">
        <div className="destination__rating">{rating}/12</div>
        <div className="destination__description">{description}</div>
      </div>
    </div>
  );
};

export default Destination;
