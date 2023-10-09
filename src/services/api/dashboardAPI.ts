import axios from "axios";
import { IDashboardInfo } from "../Interfaces/dashboard";

export const getDashboardInfo = async (): Promise<IDashboardInfo> => {
  const response = await axios.get("http://localhost:3000/api/dashboard/get", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
