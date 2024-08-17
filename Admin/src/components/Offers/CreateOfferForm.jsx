import { useState } from "react";
import toast from "react-hot-toast";
import { createOfferAction } from "../../store/actions/offerActions";
import { useDispatch } from "react-redux";
import { RiLoader3Fill } from "react-icons/ri";
const CreateOfferForm = ({ showModal }) => {
  const [offers, setOffers] = useState(null);
  const dispatch = useDispatch();
  const [btnLoader, setBtnLoader] = useState(false);

  // when admin wants to create offer
  const createOfferHandler = (e) => {
    e.preventDefault();
    // check is something missing
    if (!Object.values(offers).every((value) => value.trim())) {
      toast.error("some fields are blank");
      return;
    }
    setBtnLoader(true);
    // dispacthing create offer action to create the offer
    dispatch(createOfferAction(offers, setBtnLoader, setOffers, showModal));
  };

  return (
    <form
      className="p-2 mt-5 flex flex-col gap-2"
      onSubmit={createOfferHandler}
    >
      <div className="flex flex-col gap-1">
        <label className="text-lg">Offer Name</label>
        <input
          required
          type="text"
          className="p-2 bg-gray-100 rounded-md"
          placeholder="Offer name"
          value={offers?.offerName ?? ""}
          onChange={(e) => setOffers({ ...offers, offerName: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg">Minimum Order Value</label>
        <input
          required
          type="number"
          className="p-2 bg-gray-100 rounded-md"
          placeholder="Minimum purchase value"
          value={offers?.minimumValue ?? ""}
          onChange={(e) =>
            setOffers({ ...offers, minimumValue: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg">Discount % (only percentage number)</label>
        <input
          required
          type="number"
          className="p-2 bg-gray-100 rounded-md"
          placeholder="Enter discount percentage"
          onChange={(e) => setOffers({ ...offers, discount: e.target.value })}
          value={offers?.discount ?? ""}
        />
      </div>
      <button className="primary-linear-bg text-white mt-5 flex justify-center items-center rounded-md py-2">
        {btnLoader ? (
          <RiLoader3Fill className=" animate-spin text-2xl" />
        ) : (
          "Create Offer"
        )}
      </button>
    </form>
  );
};

export default CreateOfferForm;
