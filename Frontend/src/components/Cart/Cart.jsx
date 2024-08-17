import { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import Coupons from "./Coupons";
import TotalAmount from "./TotalAmount";
import Address from "../Address/Address";
import EmptyCart from "./EmptyCart";
import useFetchCartDetails from "../../hooks/useFetchCartDetails";
import PaymentButton from "./PaymentButton";
import PageLoader from "../common/PageLoader";
import Error from "../common/Error";
import SkeletonCart from "./SkeletonCart";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const [error, setError] = useState(false);
  const [cart, setCart] = useState([]);
  const [loader1, setLoader1] = useState(true);
  const [loader2, setLoader2] = useState(false);
  const [cartData, setCartData] = useState(null);
  const [appliedOffer, setAppliedOffer] = useState(null);
  const [address, setAddress] = useState(null);

  // using custom hook to fecth cart details
  useFetchCartDetails(
    cartItems,
    setLoader1,
    setLoader2,
    setCart,
    setCartData,
    setAppliedOffer,
    setAddress,
    setError
  );

  return (
    <>
      {error ? (
        <Error component={"Cart"} />
      ) : (
        <>
          {loader1 || loader2 ? (
            <SkeletonCart />
          ) : (
            <>
              {cart.length == 0 ? (
                <EmptyCart />
              ) : (
                <div className=" mt-10 font-poppins">
                  <div className=" text-xl px-2 md:px-0 flex justify-between items-center">
                    <h1 className=" font-semibold">
                      Cart ({cartData.totalItems} Items)
                    </h1>
                    <button className="  px-2 py-1 border border-red-500 rounded-md text-base">
                      Empty Cart
                    </button>
                  </div>
                  <div className="mt-5 flex flex-col md:flex-row items-start gap-5">
                    <div className="  w-full md:w-[60%] h-fit  md:max-h-[40rem] rounded-md px-4 py-4 flex flex-col justify-center gap-2 md:overflow-y-scroll shadow-md border  ">
                      {cart.map((values) => {
                        return (
                          <CartProduct
                            key={values.id}
                            name={values.name}
                            imageUrl={JSON.parse(values.imageUrls)}
                            productTypeId={values.productTypeId}
                            type={values.type}
                            price={values.price}
                          />
                        );
                      })}
                    </div>
                    <div className=" w-full md:w-[40%] h-[40rem] rounded-md flex flex-col gap-4">
                      <Coupons
                        appliedOffer={appliedOffer}
                        setAppliedOffer={setAppliedOffer}
                        price={cartData.totalPrice}
                      />
                      <TotalAmount
                        price={cartData.totalPrice}
                        appliedOffer={appliedOffer}
                      />
                      <div className="w-full bg-white flex flex-col gap-1 py-4 px-2 rounded-md shadow-md border">
                        <Address address={address} setAddress={setAddress} />
                        <PaymentButton
                          address={address}
                          appliedOffer={appliedOffer}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
