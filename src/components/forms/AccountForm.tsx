import { useState } from "react";
import { useMutation } from "react-query";
import { addUser } from "../../services/api/userAPI";
import { IUser } from "../../services/Interfaces/user";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AccountForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const employeeId = location.state;
  const [user, setUser] = useState({
    username: "",
    password: "",
    employee_id: employeeId,
    role: "",
  });

  const { isLoading, isError, error, mutate } = useMutation(
    (userData: IUser) => addUser(userData),
    {
      onSuccess: () => {
        toast.success("Account successfully created");
        navigate(-1);
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.error);
        }
      },
    }
  );

  const updateUsername = (username: string) => {
    setUser((prevState) => ({ ...prevState, username: username }));
  };
  const updatePassword = (password: string) => {
    setUser((prevState) => ({ ...prevState, password: password }));
  };
  const updateRole = (role: string) => {
    setUser((prevState) => ({ ...prevState, role: role }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(user);
      }}
      className="w-[100%] min-h-[80%] p-5 flex flex-col"
    >
      <div className="w-[100%] flex flex-col justify-between items-center">
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
          <input
            value={user.username}
            onChange={(e) => updateUsername(e.target.value)}
            placeholder="eg. johnstones"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input
            value={user.password}
            onChange={(e) => updatePassword(e.target.value)}
            placeholder="eg. john123"
            type="text"
            autoComplete="off"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Role</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5"
            value={user.role}
            onChange={(e) => updateRole(e.target.value)}
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
        </div>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                   font-medium rounded-lg text-sm w-[30%] mx-auto mt-[30px] px-5 py-2.5 text-center disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
};
