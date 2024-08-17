import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { useState } from "react";
import useGetOrderDetails from "../../hooks/useGetOrderDetails";
import Error from "../common/Error";

const OrderDetails = () => {
  const { orderid } = useParams();
  const { orders } = useSelector((state) => state.orderSlice);
  const [findedOrder, setFindedOrder] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // invoking the custom hook to get the product details
  useGetOrderDetails(orderid, setLoader, setError, setFindedOrder);

  // for getting the actual date
  const getActualDate = (string) => {
    const date = new Date(string);
    return date.toLocaleDateString();
  };

  // for getting the actual time
  const getActualTime = (string) => {
    const date = new Date(string);
    return date.toLocaleTimeString();
  };

  return (
    <>
      {error ? (
        <Error component={"order details"} />
      ) : (
        <>
          {loader ? (
            <>
              <p>loading ..</p>
            </>
          ) : (
            <>
              <div className="p-4 flex flex-col gap-7 font-poppins">
                <div className=" flex justify-between items-center ">
                  <button
                    className="w-fit text-blue-800 border border-blue-800 px-5 py-2 rounded-md"
                    onClick={() => {
                      navigate("/account/orders");
                    }}
                  >
                    <FaArrowLeft className=" text-xl" />
                  </button>
                  <button className=" flex justify-center items-center gap-2 border border-blue-800 rounded-md p-2">
                    <h1>Get Help</h1>
                    <BiSupport className="text-2xl" />
                  </button>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div className=" flex flex-col">
                    <h1>#{orderid}</h1>
                    <h1>{`${getActualDate(
                      findedOrder.createdAt
                    )} at ${getActualTime(findedOrder.createdAt)}`}</h1>
                  </div>
                  <div className=" bg-gray-200 px-3 py-1 rounded-md flex justify-center items-center gap-2 ">
                    <h1>{findedOrder.orderStatus}</h1>
                    <div
                      className={`${
                        findedOrder.orderStatus == "Completed" ||
                        findedOrder.orderStatus == "Delivered"
                          ? "bg-green-600"
                          : "bg-red-500"
                      } w-3 h-3 rounded-full`}
                    />
                  </div>
                </div>

                <div
                  className="blue_linear_background text-white px-6 
      flex flex-col gap-2 justify-center items-center py-4 rounded-md"
                >
                  <h1 className="text-2xl">Order {findedOrder.orderStatus}</h1>
                  {findedOrder.orderStatus === "Pending" && (
                    <div className=" flex justify-center items-center gap-2 px-16">
                      <p>
                        Your order is put on hold, we appreciate your time don't
                        worry if it is cancelled we refund your money shortly.
                      </p>
                    </div>
                  )}
                  {findedOrder.orderStatus === "Failed" && (
                    <div className=" flex justify-center items-center gap-2 px-16">
                      <p>
                        Your Order is failed for some reason if the money
                        debited we will refund with in 3-5 days
                      </p>
                    </div>
                  )}
                  {findedOrder.orderStatus === "Completed" && (
                    <div className=" flex justify-center items-center gap-2 px-16">
                      <p>Don't blink we are delivering your order</p>
                      <MdOutlineDeliveryDining className=" text-4xl" />
                    </div>
                  )}
                </div>
                <div className=" flex flex-col gap-1 px-3 ">
                  {findedOrder.orderitems.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className=" grid border-b py-4 border-gray-200"
                        style={{ gridTemplateColumns: "2fr 1fr" }}
                      >
                        <div className=" flex gap-3">
                          <div className="w-20 h-20">
                            <img
                              src={JSON.parse(item.orderDetails.imageUrls)[0]}
                              className=" object-contain w-full h-full"
                            />
                          </div>
                          <div className=" flex flex-col ">
                            <h1
                              className="text-base"
                              style={{ fontWeight: "500" }}
                            >
                              {item.orderDetails.name}
                            </h1>
                            <div className=" text-sm flex justify-start items-center gap-2">
                              <h1>{item.orderDetails.type}</h1>
                              <div className=" bg-gray-400 w-2 h-2 rounded-full" />
                              <h1>Qty: {item.orderDetails.quantity}</h1>
                            </div>
                          </div>
                        </div>
                        <div className=" flex items-start justify-end">
                          <h1 className=" text-xl font-mono">
                            &#8377;
                            {Math.round(
                              item.orderDetails.quantity *
                                item.orderDetails.price
                            )}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className=" px-3 flex flex-col gap-1 font-sans">
                  <div className=" flex justify-between items-center ">
                    <h1>Item Total</h1>
                    <h1>&#8377;{findedOrder.totalAmount - 5}</h1>
                  </div>
                  <div className=" flex justify-between items-center text-sm">
                    <h1>Handeling Fee</h1>
                    <h1>&#8377;5</h1>
                  </div>
                  <div className=" flex justify-between items-center text-sm ">
                    <h1>Delivery Charges</h1>
                    <h1>&#8377;0</h1>
                  </div>
                  <div className=" flex justify-between items-center text-green-500 text-sm ">
                    <h1>Offer Discount</h1>
                    <h1>
                      &#8377;{findedOrder.totalAmount - findedOrder.finalAmount}
                    </h1>
                  </div>
                  <div className=" flex justify-between items-center font-medium ">
                    <h1>Final Amount</h1>
                    <h1>&#8377;{findedOrder.finalAmount}</h1>
                  </div>
                </div>
                <div className=" flex justify-end items-center mt-6">
                  <button className=" bg-gray-200 px-4 rounded-md py-2 flex justify-center items-center gap-2">
                    <h1>Downlaod Invoice</h1>
                    <LiaFileInvoiceSolid className=" text-xl" />
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default OrderDetails;
