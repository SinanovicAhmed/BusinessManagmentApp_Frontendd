import axios from "axios";
import { IUser } from "../Interfaces/user";
interface userLogin {
  username: string;
  password: string;
}

const config = {
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Content-Type": "application/json",
  },
};

export const loginUser = async (user: userLogin): Promise<{ message: string; user: { role: string } }> => {
  const response = await axios.post("http://localhost:3000/api/user/login", user, config);

  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.get("http://localhost:3000/api/user/logout", config);

  return response;
};

export const addUser = async (user: IUser): Promise<string> => {
  const response = await axios.post("http://localhost:3000/api/user/register", user, config);
  return response.data?.message;
};
