import loginImage from "../assets/images/login-page-image.png";
import { LoginForm } from "../components/forms/LoginForm";
export const LoginPage = () => {
  return (
    <div className="flex">
      <div className="hidden w-[60%] h-screen md:flex md:flex-col justify-between items-center bg-[#d6e8ff]">
        <h1 className="mb-4 text-3xl font-extrabold md:text-4xl lg:text-5xl mt-[20px] text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Business Management website
          </span>
        </h1>
        <img className="w-[130%]" src={loginImage} />
      </div>
      <div className="w-[100%] md:w-[40%] h-screen flex flex-col items-center justify-center">
        <h2 className="text-[25px] font-bold text-gray-700">LOGIN</h2>
        <LoginForm />
      </div>
    </div>
  );
};
