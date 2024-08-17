import { useEffect } from "react";
import { getOrderDetails } from "../api/agent";

const useGetOrderDetails = (orderId, setLoader, setError, setFindedOrder) => {
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("user not found");
        }
        const { data } = await getOrderDetails(orderId, token);
        setFindedOrder(data);
        setLoader(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);
};

export default useGetOrderDetails;
