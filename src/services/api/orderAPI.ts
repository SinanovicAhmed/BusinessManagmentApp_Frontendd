import axios from "axios";
import { IOrder } from "../Interfaces/order";

export const getOrders = async (): Promise<IOrder[]> => {
  const response = await axios.get("http://localhost:3000/api/order/get-orders", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data.orders;
};
