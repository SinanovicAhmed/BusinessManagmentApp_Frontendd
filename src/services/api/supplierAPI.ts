import axios from "axios";
import { ISupplier, ISupplierPost } from "../Interfaces/supplier";

const config = {
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Content-Type": "application/json",
  },
};

export const getSuppliers = async (): Promise<ISupplier[]> => {
  const response = await axios.get("http://localhost:3000/api/supplier/get-suppliers", config);
  return response.data;
};

export const addSupplier = async (supplier: ISupplierPost) => {
  const response = await axios.post("http://localhost:3000/api/supplier/add-supplier", supplier, config);
  return response;
};
export const getSupplierDetails = async (id: any): Promise<ISupplier> => {
  const response = await axios.get("http://localhost:3000/api/supplier/supplier-details/" + id, config);
  return response.data.supplier;
};
