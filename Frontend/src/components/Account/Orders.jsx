import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAction } from "../../store/actions/orderActions";
import OrdersSkeleton from "./OrdersSkeleton";
import { IoIosArrowBack } from "react-icons/io";
import Error from "../common/Error";
import { useNavigate } from "react-router-dom";
import EmptyOrder from "./EmptyOrder";
const Orders = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const { orders } = useSelector((state) => state.orderSlice);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // use effect for getting all orders of the user
  useEffect(() => {
    dispatch(getAllOrdersAction(setLoader, setError));
  }, []);

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

  // for navigating to order details
  const navigateToOrderDetails = (orderId) => {
    navigate(`/account/orders/${orderId}`);
  };
  return (
    <>
      {error ? (
        <Error component={"orders"} />
      ) : (
        <>
          {loader ? (
            <OrdersSkeleton />
          ) : (
            <>
              <div className=" bg-gray-100 py-2 px-5 rounded-md font-poppins md:hidden">
                <div
                  className=" flex items-center gap-2 text-xl"
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  <IoIosArrowBack />
                  <h1>Orders</h1>
                </div>
              </div>
              {orders.length <= 0 ? (
                <EmptyOrder />
              ) : (
                <div className=" mt-5 md:mt-0 md:p-4 flex flex-col gap-4 w-full font-poppins">
                  {orders.map((order) => {
                    return (
                      <div
                        onClick={() => {
                          navigateToOrderDetails(order.orderId);
                        }}
                        className=" w-full p-4 cursor-pointer rounded-md shadow-md border"
                        key={order.id}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "2fr 1fr",
                        }}
                      >
                        <div className=" flex flex-col gap-3">
                          <div className=" font-semibold">
                            {order &&
                              order.orderitems.map((item) => {
                                return (
                                  <span key={item.id}>
                                    {item.orderDetails.name},{" "}
                                  </span>
                                );
                              })}
                          </div>

                          <div>
                            <h1># {order.orderId}</h1>
                            <h1>{`${getActualDate(
                              order.createdAt
                            )} at ${getActualTime(order.createdAt)}`}</h1>
                          </div>
                        </div>
                        <div className=" flex flex-col justify-between items-end gap-4">
                          <h1 className=" font-bold text-xl">
                            &#8377; {order.finalAmount}
                          </h1>
                          <div className=" bg-gray-200 px-2 py-1 rounded-md self-end flex justify-center items-center gap-3">
                            <h1>{order.orderStatus}</h1>
                            <div
                              className={` h-3 w-3 rounded-full ${
                                order.orderStatus == "Completed"
                                  ? "bg-green-400"
                                  : "bg-red-500"
                              }`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Orders;
