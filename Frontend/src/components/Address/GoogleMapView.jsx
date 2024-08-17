import React, { useCallback, useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import getAdressbyCordinates from "../../functions/getAdressbyCordinates";
import toast from "react-hot-toast";

// default style for map container
const containerStyle = {
  width: "100%",
  height: "100%",
};

// libraries
const libraries = ["places"];

const GoogleMapView = ({ setAddress, mapCenter, setMapCenter }) => {
  const [map, setMap] = useState(null);
  const [adressSearching, setAdressSearching] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          try {
            const getAdress = await getAdressbyCordinates(
              userLocation.lat,
              userLocation.lng
            );
            setAddress(getAdress);
            setMapCenter(userLocation);
          } catch (error) {
            toast.error("Error!");
            setAddress("Some Error Try Again !");
          }
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onSelectLocation = async (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    try {
      const getAdress = await getAdressbyCordinates(
        newPosition.lat,
        newPosition.lng
      );
      setAddress(getAdress);
      setMapCenter(newPosition);
    } catch (error) {
      console.log(error);
    }
  };

  // if user click on autocomplete suggestions
  const onPlaceChanged = async () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const newPosition = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        try {
          const getAdress = await getAdressbyCordinates(
            newPosition.lat,
            newPosition.lng
          );
          setAddress(getAdress);
          setMapCenter(newPosition);
          setAdressSearching(false);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <>
      {isLoaded ? (
        <>
          <div className="flex flex-col gap-1 p-2 z-40">
            <label className="font-semibold">Search Address</label>
            <Autocomplete
              onLoad={(auto) => setAutocomplete(auto)}
              onPlaceChanged={onPlaceChanged}
            >
              <input
                type="text"
                className="w-full bg-gray-100 p-2 rounded-md"
                placeholder="Search any address"
                onClick={() => setAdressSearching(true)}
              />
            </Autocomplete>
          </div>

          {!adressSearching && (
            <div className=" w-full h-[15rem] md:h-[35rem] px-2">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={17}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  disableDefaultUI: true,
                  scrollwheel: false,
                }}
                onClick={onSelectLocation}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </div>
          )}
        </>
      ) : (
        <p>Map is Loading....</p>
      )}
    </>
  );
};

export default React.memo(GoogleMapView);
