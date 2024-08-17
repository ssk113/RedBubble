import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  decreaseQuantityAction,
  increaseQuantityAction,
} from "../../store/actions/cartActions";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { openAuthModal } from "../../store/reducers/authSlice";

const CartBtn = ({ id }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartSlice);
  const { isloggedIn } = useSelector((state) => state.authSlice);
  const [quantity, setQunatity] = useState(
    cartItems[id] ? cartItems[id].quantity : 0
  );

  useEffect(() => {
    setQunatity(cartItems[id] ? cartItems[id].quantity : 0);
  }, [cartItems]);

  // add to cart handeler
  const addToCartHandeler = (e) => {
    e.stopPropagation();
    if (isloggedIn) {
      const addedItem = {
        quantity: quantity + 1,
        productTypeId: id,
      };
      dispatch(addToCartAction(addedItem, setQunatity));
    } else {
      dispatch(openAuthModal());
    }
  };

  // for increase quantity on specific order
  const increasQuantity = (e) => {
    e.stopPropagation();
    const addedItem = {
      quantity: quantity + 1,
      productTypeId: id,
    };
    dispatch(increaseQuantityAction(addedItem, setQunatity));
  };

  // for decerase quantity on specific order
  const decreaseQantity = (e) => {
    e.stopPropagation();
    let addedItem;
    if (quantity >= 1) {
      addedItem = {
        quantity: quantity - 1,
        productTypeId: id,
      };
    } else {
      addedItem = {
        quantity: 0,
        productTypeId: id,
      };
    }
    dispatch(decreaseQuantityAction(addedItem, setQunatity));
  };

  return (
    <div>
      {quantity == 0 ? (
        <button
          className="border border-red-500 px-4 py-1 primary-color-darker-pink rounded-md text-md"
          onClick={addToCartHandeler}
        >
          Add
        </button>
      ) : (
        <div className=" flex justify-center items-center gap-3 primary-bg-darker-pink text-white px-2 py-1 rounded-md text-base ">
          <button onClick={decreaseQantity}>
            <FiMinus />
          </button>
          <h1 className=" text-lg">{quantity}</h1>
          <button onClick={increasQuantity}>
            <FiPlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartBtn;
