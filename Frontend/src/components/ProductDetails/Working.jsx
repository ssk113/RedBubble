import React from "react";

const Working = () => {
  return (
    <div className="flex flex-col gap-4 px-3 md:px-10 w-full border-t md:border-none py-2">
      <h1 className="text-2xl">How it works ? </h1>
      <div className=" flex gap-4 items-center justify-start bg-gray-100 rounded-md">
        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/7.0.3/images/pdp/place-order.svg" />
        <div className="flex flex-col">
          <h1 className=" text-xl">Place an Order</h1>
          <p>choose from a wide range of daily essentials</p>
        </div>
      </div>
      <div className=" flex gap-4 items-center justify-start bg-gray-100 rounded-md">
        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/7.0.3/images/pdp/do-not-blink.svg" />
        <div className="flex flex-col">
          <h1 className=" text-xl">Don't Blink</h1>
          <p>Our Delivery Partner will be at your door </p>
        </div>
      </div>
      <div className=" flex gap-4 items-center justify-start bg-gray-100 rounded-md">
        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/7.0.3/images/pdp/enjoy.svg" />
        <div className="flex flex-col">
          <h1 className=" text-xl">Enjoy</h1>
          <p>Boom! You'll never have to wait for groceries again</p>
        </div>
      </div>
    </div>
  );
};

export default Working;
