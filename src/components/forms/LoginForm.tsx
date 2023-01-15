import { Button } from "../globalUI/Button";
import { Input } from "../globalUI/Input";
import { useState } from "react";
import { ErrorAlert } from "../globalUI/ErrorAlert";
import { useMutation } from "react-query";
import { loginUser } from "../../services/api/userAPI";
import { useNavigate } from "react-router-dom";

interface ILoginData {
  username: string;
  password: string;
}
export const LoginForm = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginData = { username: username, password: password };

  const { isLoading, isError, error, mutate } = useMutation(
    (loginData: ILoginData) => loginUser(loginData),
    {
      onSuccess: () => nav("/managment/dashboard"), //redirect,
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(loginData);
      }}
      className="relative max-w-[500px] w-[90%] md:min-w-[300px] md:w-[80%] h-[300px] p-[10px] flex flex-col justify-center items-center gap-6"
    >
      {isError && <ErrorAlert error={error} />}
      <Input
        label={"Username"}
        value={username}
        type={"text"}
        onChange={setUsername}
      />
      <Input
        label="Password"
        value={password}
        type="password"
        onChange={setPassword}
      />
      <Button type="submit" name="Login" disabled={isLoading ? true : false} />
    </form>
  );
};
