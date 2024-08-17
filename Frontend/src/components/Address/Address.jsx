import { useState } from "react";
import AllAddressModal from "./AllAddressModal";

const Address = ({ address, setAddress }) => {
  const [openAddressModal, setOpenAddressModal] = useState(false);

  return (
    <>
      {openAddressModal && (
        <AllAddressModal
          showModal={setOpenAddressModal}
          setAddress={setAddress}
        />
      )}

      <div className=" flex flex-col gap-2 px-2">
        <h1 className=" font-semibold">{address && address.address.label}</h1>
        <h1>{address ? address.address.stringFormat : "No Address Added"}</h1>
      </div>
      <button
        className="flex px-2 mt-2 primary-color-darker-pink font-medium"
        onClick={() => {
          setOpenAddressModal(true);
        }}
      >
        {address ? "CHANGE ADDRESS" : "ADD ADDRESS"}
      </button>
    </>
  );
};

export default Address;
