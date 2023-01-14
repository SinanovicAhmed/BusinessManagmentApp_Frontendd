import axios from "axios";

interface userLogin {
  username: string;
  password: string;
}
export const loginUser = async (user: userLogin) => {
  const response = await axios.post(
    "http://localhost:3000/api/user/login",
    user,
    {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};
