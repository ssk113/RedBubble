import React, { useEffect, useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

const SearchAddresses = ({ setAdressSearching, isLoaded }) => {
  const inputRef = useRef(null);

  const handlePlaceChanged = () => {
    const place = inputRef.current.getPlace();
    if (place && place.geometry) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };

  return <>{isLoaded && <p>LOadinf ...</p>}</>;
};

export default SearchAddresses;
