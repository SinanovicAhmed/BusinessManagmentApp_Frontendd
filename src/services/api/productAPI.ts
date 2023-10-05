import axios from "axios";
import { ICreateProduct, IProduct, IProductPost } from "../Interfaces/product";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await axios.get("http://localhost:3000/api/product/get-all", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data.products;
};

export const addProduct = async (product: IProductPost): Promise<string> => {
  const response = await axios.post("http://localhost:3000/api/product/add-product", product, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data.products;
};

export const createProduct = async (product: ICreateProduct): Promise<string> => {
  const response = await axios.patch("http://localhost:3000/api/product/create-product", product, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
