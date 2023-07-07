import axios from "axios";
import { IUser } from "../Interfaces/user";
interface userLogin {
  username: string;
  password: string;
}
export const loginUser = async (user: userLogin) => {
  const response = await axios.post("http://localhost:3000/api/user/login", user, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const addUser = async (user: IUser): Promise<string> => {
  const response = await axios.post("http://localhost:3000/api/user/register", user, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Content-Type": "application/json",
    },
  });
  return response.data?.message;
};
