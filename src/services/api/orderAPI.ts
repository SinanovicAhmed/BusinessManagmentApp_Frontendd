import axios from "axios";
import { IOrder, IOrderDB, IOrderMaterials, IOrderStatus } from "../Interfaces/order";

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

export const getOrderDetails = async (id: any): Promise<IOrder> => {
  const response = await axios.get(`http://localhost:3000/api/order/get-order/${id}`, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data.order;
};

export const changeOrderStatus = async (orderData: IOrderStatus): Promise<IOrderDB> => {
  const response = await axios.patch("http://localhost:3000/api/order/update-orderstatus", orderData, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data?.order;
};

export const finishOrder = async (orderMaterials: IOrderMaterials[]): Promise<any> => {
  const response = await axios.patch("http://localhost:3000/api/order/finish-order", orderMaterials, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data?.message;
};
