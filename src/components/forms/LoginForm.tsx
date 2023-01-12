import { Button } from "../globalUI/Button";
import { Input } from "../globalUI/Input";
import { useState } from "react";
import { ErrorAlert } from "../globalUI/ErrorAlert";
import { useMutation } from "react-query";
import axios from "axios";
interface ILoginData {
  username: string;
  password: string;
}
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginData = { username: username, password: password };

  const { isLoading, isError, error, mutate } = useMutation(
    (loginData: ILoginData) =>
      axios.post("http://localhost:3000/api/user/login", loginData),
    {
      onSuccess: () => console.log("success"), //redirect,
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(loginData);
      }}
      className="relative max-w-[500px] w-[90%] md:min-w-[300px] md:w-[80%] h-[300px] p-[10px] flex flex-col justify-center gap-6"
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
