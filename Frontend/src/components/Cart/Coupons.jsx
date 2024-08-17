import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import AvailOfferModal from "./AvailOfferModal";
import { useSelector } from "react-redux";

const Coupons = ({ appliedOffer, setAppliedOffer, price }) => {
  const [offerModal, setOfferModal] = useState(false);
  const { offers } = useSelector((state) => state.offerSlice);

  return (
    <>
      {offerModal && (
        <AvailOfferModal
          showModal={setOfferModal}
          setAppliedOffer={setAppliedOffer}
          price={price}
        />
      )}
      <div
        className=" w-full bg-white flex gap-2 justify-between items-center px-4 py-3 rounded-md shadow-md cursor-pointer border"
        onClick={() => {
          setOfferModal(true);
        }}
      >
        <div className=" flex  gap-4 items-center justify-center">
          <BiSolidOffer className=" text-5xl text-green-500" />
          <div>
            <h1>{appliedOffer ? "Offer Applied" : "Avail Offer / Coupons"}</h1>
            <p className=" text-sm">{offers.length} Offers Available</p>
          </div>
        </div>
        <IoMdArrowDropright className=" text-3xl primary-color-darker-pink" />
      </div>
    </>
  );
};

export default Coupons;
