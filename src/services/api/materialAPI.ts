import { IMaterial } from "../Interfaces/material";
import axios from "axios";

export const getMaterials = async (): Promise<IMaterial[]> => {
  const response = await axios.get("http://localhost:3000/api/material/get-materials", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const addMaterial = async (material: IMaterial): Promise<string> => {
  const response = await axios.post("http://localhost:3000/api/material/add-material", material, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data?.message;
};
