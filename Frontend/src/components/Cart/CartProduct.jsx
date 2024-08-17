import CartBtn from "../buttons/CartBtn";

const CartProduct = ({ name, imageUrl, productTypeId, type, price }) => {
  return (
    <div
      className=" grid border-b py-4 "
      style={{ gridTemplateColumns: "2fr 1fr" }}
    >
      <div className=" flex gap-3 items-center ">
        <div className=" h-[5rem] w-[8rem]">
          <img src={imageUrl[0]} className=" object-contain w-full h-full" />
        </div>
        <div className=" flex flex-col justify-center">
          <h1 className=" font-cabin">{name}</h1>
          <h1 className=" text-sm">{type}</h1>
          <h1 className=" mt-2 font-semibold">&#8377; {price}</h1>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <CartBtn id={productTypeId} />
      </div>
    </div>
  );
};

export default CartProduct;
