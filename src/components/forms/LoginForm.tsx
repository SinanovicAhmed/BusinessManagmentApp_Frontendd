import { Button } from "../globalUI/Button";
import { Input } from "../globalUI/Input";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hey");
  };
  return (
    <form
      onSubmit={handleLogin}
      className="max-w-[500px] w-[90%] md:min-w-[300px] md:w-[80%] h-[300px] p-[10px] flex flex-col justify-center gap-6"
    >
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
      <Button type="submit" name="Login" />
    </form>
  );
};
