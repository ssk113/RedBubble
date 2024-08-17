import { useEffect, useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineSendToMobile } from "react-icons/md";
import CreateOfferModal from "./CreateOfferModal";
import GivenOffersTable from "./GivenOffersTable";
import CreatedOffersTable from "./CreatedOffersTable";
import GiveOfferModal from "./GiveOfferModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../../store/actions/userActions";
import {
  getAllCreatedOffersAction,
  getAllGivenOffersAction,
} from "../../store/actions/offerActions";
import Error from "../Error/Error";
import toast from "react-hot-toast";
import PageLoader from "../Loaders/PageLoader";

const Offers = () => {
  const [loader, setLoader] = useState(true);
  const [createOfferModal, setCreateOfferModal] = useState(false);
  const [giveOfferModal, setGiveOfferModal] = useState(false);
  const [showGivenOfferTable, setShowGivenOfferTable] = useState(false);
  const [error, setError] = useState(null);
  const { createdOffers } = useSelector((state) => state.offerSlice);
  const dispatch = useDispatch();

  // useffect for fetching all the users & given offers & created offers
  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          dispatch(getAllUserAction()),
          dispatch(getAllCreatedOffersAction()),
          dispatch(getAllGivenOffersAction()),
        ]);
        setLoader(false);
      } catch (error) {
        toast.error("error while fetching offers ");
        setError(error);
      }
    })();
  }, []);

  const giveOfferHandeler = () => {
    if (createdOffers.length > 0) {
      setGiveOfferModal(true);
    } else {
      toast.error("No offers present");
    }
  };

  return (
    <>
      {error ? (
        <>
          <Error message={"Error While Fetching Offers !"} />
        </>
      ) : (
        <>
          {loader ? (
            <PageLoader />
          ) : (
            <>
              {createOfferModal && (
                <CreateOfferModal showModal={setCreateOfferModal} />
              )}
              {giveOfferModal && (
                <GiveOfferModal showModal={setGiveOfferModal} />
              )}
              <div className="w-full m-auto mt-5 px-6 py-5 rounded-md bg-white font-poppins flex justify-between gap-5">
                <div className="flex gap-4 justify-center items-center">
                  <div
                    className="px-8 py-10 bg-gray-100 rounded-xl flex justify-center items-center gap-2 cursor-pointer"
                    onClick={() => {
                      setCreateOfferModal(true);
                    }}
                  >
                    <h1 className=" text-xl">Create Offer</h1>
                    <BiSolidOffer className="text-2xl text-green-400" />
                  </div>
                  <div
                    className="px-8 py-10 bg-gray-100 rounded-xl flex justify-center items-center gap-2 cursor-pointer"
                    onClick={giveOfferHandeler}
                  >
                    <h1 className=" text-xl">Give Offer</h1>
                    <MdOutlineSendToMobile className="text-2xl text-blue-400" />
                  </div>
                </div>
                <div className=" flex justify-center self-end items-center px-4">
                  <div
                    className={`px-3 py-2 border-y border-l cursor-pointer ${
                      showGivenOfferTable
                        ? "primary-linear-bg text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => {
                      setShowGivenOfferTable((prev) => !prev);
                    }}
                  >
                    <h1>Given Offers</h1>
                  </div>
                  <div
                    className={`px-3 py-2 border cursor-pointer ${
                      !showGivenOfferTable
                        ? "primary-linear-bg text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => {
                      setShowGivenOfferTable((prev) => !prev);
                    }}
                  >
                    <h1>Created Offers</h1>
                  </div>
                </div>
              </div>

              <div className="w-full h-[calc(100vh-18rem)] m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
                {showGivenOfferTable ? (
                  <GivenOffersTable />
                ) : (
                  <CreatedOffersTable />
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Offers;
