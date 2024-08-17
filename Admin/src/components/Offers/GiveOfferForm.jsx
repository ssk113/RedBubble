import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { giveOfferAction } from "../../store/actions/offerActions";
import { RiLoader3Fill } from "react-icons/ri";

const GiveOfferForm = ({ showModal }) => {
  const dispatch = useDispatch();
  const { createdOffers } = useSelector((state) => state.offerSlice);
  const { users } = useSelector((state) => state.userSlice);
  const [btnLoader, setBtnLoader] = useState(false);

  // form input states
  const [selectOffer, setSelectOffer] = useState(
    createdOffers && createdOffers[0].id
  );
  const [selectUser, setSelectUser] = useState(users && users[0].email);

  // when admin wants to give offer to a user
  const giveOfferHandeler = (e) => {
    e.preventDefault();
    if (!selectOffer || !selectUser) {
      return toast.error("Some fields are missing");
    }
    const offerDetails = {
      offerId: selectOffer,
      userEmail: selectUser,
    };
    dispatch(giveOfferAction(offerDetails, setBtnLoader, showModal));
  };

  return (
    <form className=" flex flex-col gap-2 mt-5" onSubmit={giveOfferHandeler}>
      <div className=" flex flex-col gap-2">
        <label className=" text-lg">Select Offer</label>
        <select
          className=" bg-gray-100 p-2"
          value={selectOffer}
          onChange={(e) => {
            setSelectOffer(e.target.value);
          }}
        >
          {createdOffers.map((offer) => {
            return (
              <option value={offer.id} key={offer.id}>
                {offer.offerName}
              </option>
            );
          })}
        </select>
      </div>
      <div className=" flex flex-col gap-2">
        <label className=" text-lg">Select User</label>
        <select
          className=" bg-gray-100 p-2"
          value={selectUser}
          onChange={(e) => {
            setSelectUser(e.target.value);
          }}
        >
          {users.map((user) => {
            return (
              <option key={user.id} value={user.email}>
                {user.email}
              </option>
            );
          })}
        </select>
      </div>
      <button className="primary-linear-bg text-white mt-5 flex justify-center items-center rounded-md py-2">
        {btnLoader ? (
          <RiLoader3Fill className=" animate-spin text-2xl" />
        ) : (
          "Give Offer"
        )}
      </button>
    </form>
  );
};

export default GiveOfferForm;
