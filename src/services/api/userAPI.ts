import axios from "axios";
import { QueryFunctionContext } from "react-query";
interface userLogin {
  username: string;
  password: string;
}
export const loginUser = async (
  context: QueryFunctionContext<"user-login", userLogin>
): Promise<{ message: string }> => {
  const { user } = context.variables;
  return await axios.post("http://localhost:3000/api/user/login", user);
};
