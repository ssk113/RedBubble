const TotalAmount = ({ price, appliedOffer }) => {
  // calculate discount function to calculate discount
  const calcDiscount = (price, percentage) => {
    return Math.round(price * (percentage / 100));
  };
  return (
    <div className=" w-full bg-white flex flex-col gap-2 px-5 py-4 rounded-md shadow-md border ">
      <div className=" flex justify-between items-center">
        <h1>Item Total </h1>
        <h1 className="font-semibold"> &#8377; {price}</h1>
      </div>
      <div className=" flex justify-between items-center text-sm">
        <h1>Offer Discount </h1>
        <h1 className=" text-green-400">
          &#8377;
          {appliedOffer ? calcDiscount(price, appliedOffer.discount) : 0}
        </h1>
      </div>
      <div className=" flex justify-between items-center text-sm">
        <h1>Handeling Fee </h1>
        <h1 className=" text-green-400"> &#8377; 5</h1>
      </div>
      <div className=" flex justify-between items-center text-sm ">
        <h1>Delivery Charges </h1>
        <h1 className=" text-green-400"> &#8377; 0</h1>
      </div>
      <div className=" flex justify-between items-center font-semibold">
        <h1>To Pay </h1>
        <h1>
          &#8377;
          {appliedOffer
            ? price - calcDiscount(price, appliedOffer.discount) + 5
            : price + 5}
        </h1>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default TotalAmount;
