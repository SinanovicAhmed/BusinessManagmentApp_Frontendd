import { useQuery } from "react-query";
import { getEmployeeDetails } from "../../services/api/employeeAPI";
import { Button } from "../globalUI/Button";
import { Loading } from "../globalUI/Loading";
import { useNavigate } from "react-router-dom";

interface id {
  id: string | undefined;
}

export const DetailsHeroE = ({ id }: id) => {
  const { isLoading, isError, data, error } = useQuery(["employee", id], () =>
    getEmployeeDetails(id)
  );

  const navigate = useNavigate();

  const createAccount = () => {
    navigate("/managment/createaccount", { state: id });
  };

  if (isLoading) return <Loading />;
  return (
    <div className="w-[100%] max-w-[1500px] flex justify-around">
      <div className="bg-gray-100 rounded-lg flex flex-col items-center p-10">
        <img
          src="https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png"
          className="w-[200px]"
        />
        {data?.user !== null ? (
          <div className="max-w-[300px] bg-gray-100 rounded-lg flex flex-col justify-between items-center px-10">
            <h2 className="text-[20px] text-gray-700 font-bold uppercase py-5 text-center">
              Account Details
            </h2>

            <span className="pb-10 w-[100%]">
              <p className="text-md text-gray-500">Username</p>
              <p className="mb-2 text-lg font-medium">{data?.user?.username}</p>
              <p className="text-lg text-gray-500">Role</p>
              {data?.user?.role === "ADMIN" ? (
                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  ADMIN
                </span>
              ) : (
                <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  USER
                </span>
              )}
            </span>
          </div>
        ) : (
          <div className="max-w-[300px] bg-gray-100 rounded-lg flex flex-col justify-between items-center px-10">
            <h2 className="text-[20px] text-gray-700 font-bold uppercase py-5 text-center">
              Account Details
            </h2>
            <p className="text-md text-gray-500 text-center pb-10">
              This employee doesnt have account!
            </p>
            <Button name="Create account" type="button" onClick={createAccount} />
          </div>
        )}
      </div>
      <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-between p-10 flex-1">
        <h2 className="text-[20px] text-gray-700 font-bold uppercase py-5 text-center">Details</h2>
        <div className="flex">
          <span className="px-[50px] pb-10">
            <p className="text-md text-gray-500">First Name</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.name}</p>
            <p className="text-lg text-gray-500">Last Name</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.surname}</p>
            <p className="text-md text-gray-500">Adress</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.adress}</p>
          </span>
          <span className="px-[50px] pb-10">
            <p className="text-lg text-gray-500">Email</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.email_adress}</p>
            <p className="text-lg text-gray-500">Employment Date</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.employment_date}</p>
            <p className="text-md text-gray-500">Dismisal Date</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.dismissal_date}</p>
          </span>
        </div>

        <Button name="Update details" type="button" />
      </div>
    </div>
  );
};
