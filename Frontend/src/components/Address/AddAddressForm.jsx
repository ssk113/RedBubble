import { MdOutlineMyLocation } from "react-icons/md";
import GoogleMapView from "./GoogleMapView";
import { useState } from "react";
import { addAdressAction } from "../../store/actions/addressAction";
import { useDispatch } from "react-redux";
import { RiLoader3Fill } from "react-icons/ri";
// default point if the user doesn't allow location
const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const AddAddressForm = ({ showModal }) => {
  const [address, setAddress] = useState("Loading...");
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [houseNumber, setHouseNumber] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [landmark, setLandMark] = useState("");
  const [phone, setPhone] = useState("");
  const [label, setLabel] = useState("Home");
  const [btnLoader, setBtnLoader] = useState(false);
  const dispatch = useDispatch();

  // when user want to add a new address
  const submitedAdressHandeler = (e) => {
    e.preventDefault();
    const SubmitedAddress = {
      stringFormat: `${landmark} , ${houseNumber} , ${buildingNumber},${
        address.split(",")[address.split(",").length - 2]
      } ,
       ${address.split(",")[address.split(",").length - 1]}, Phone: ${phone}`,
      coordinates: mapCenter,
      pinnedAddress: address,
      houseNumber,
      buildingNumber,
      landmark,
      label,
      phone,
    };
    dispatch(addAdressAction(SubmitedAddress, showModal, setBtnLoader));
  };

  return (
    <div className="flex flex-col md:flex-row  justify-center items-start gap-4 px-2 font-poppins mt-2 z-40">
      <div className="md:w-1/2 w-full">
        <div className=" w-full h-full p-2">
          <GoogleMapView
            setAddress={setAddress}
            mapCenter={mapCenter}
            setMapCenter={setMapCenter}
          />
        </div>
      </div>
      <form
        className="flex flex-col gap-3 h-full w-full p-2 md:w-1/2"
        onSubmit={submitedAdressHandeler}
      >
        <div className=" flex flex-col gap-2">
          <h1 className=" font-semibold">Enter Location Information</h1>
          <div className="bg-[#6D4090] px-4 py-2 flex items-center gap-3 justify-center text-white rounded-md">
            <MdOutlineMyLocation className="text-2xl " />
            <div className=" flex flex-col gap-1 p-2">
              <p className=" text-sm">{address}</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-1 mt-5">
          <label>House Number & Floor</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="Enter house no & floor"
            value={houseNumber}
            onChange={(e) => {
              setHouseNumber(e.target.value);
            }}
            required
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Building & Block Number </label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="Enter Building & block no"
            value={buildingNumber}
            onChange={(e) => {
              setBuildingNumber(e.target.value);
            }}
            required
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Landmark & Area Name</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="Enter landmark & area name"
            value={landmark}
            onChange={(e) => {
              setLandMark(e.target.value);
            }}
            required
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Phone Number</label>
          <input
            type="number"
            className="w-full bg-gray-100 p-2 rounded-md"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Address Label</label>
          <select
            type="text"
            className="w-full bg-gray-100 p-2 rounded-md"
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
            }}
          >
            <option value={"home"}>Home</option>
            <option value={"work"}>Work</option>
            <option value={"others"}>Others</option>
          </select>
        </div>
        <button className="primary-bg-darker-pink py-3 rounded-md mt-5 text-center text-white flex justify-center items-center">
          {btnLoader ? (
            <RiLoader3Fill className="text-2xl animate-spin" />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
