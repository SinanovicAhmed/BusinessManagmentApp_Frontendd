import { useQuery } from "react-query";
import { getEmployeeDetails } from "../../services/api/employeeAPI";
import { Button } from "../globalUI/Button";
import { Loading } from "../globalUI/Loading";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../helpers/formatDate";

interface id {
  id: string | undefined;
}

export const DetailsHeroE = ({ id }: id) => {
  const { isLoading, isError, data, error } = useQuery(["employee", id], () => getEmployeeDetails(id));
  const formatedEmploymentDate = data?.employee.employment_date
    ? formatDate(data?.employee.employment_date)
    : "";
  const formatedDismissalDate = data?.employee.dismissal_date
    ? formatDate(data?.employee.dismissal_date)
    : "";
  const navigate = useNavigate();

  const createAccount = () => {
    navigate("/managment/createaccount", { state: id });
  };

  const handleDismissal = () => {};

  if (isLoading) return <Loading />;
  return (
    <div className="flex justify-center pr-5">
      <div className="bg-gray-100 rounded-lg p-5 mr-5">
        {data?.user !== null ? (
          <div className="bg-gray-100 rounded-lg flex flex-col justify-between items-center px-10 pt-5">
            <h2 className="text-[20px] text-gray-700 font-bold uppercase text-center">Account Details</h2>
            <span className="pb-10 w-[100%]">
              <img
                src="https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png"
                className="w-[200px] py-5"
              />
              <p className="text-md text-gray-500">Username:</p>
              <p className="mb-2 text-lg font-medium">{data?.user?.username}</p>
              <p className="text-md text-gray-500">Role:</p>
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
          <div className="h-[100%] bg-gray-100 rounded-lg flex flex-col justify-between items-center px-10">
            <h2 className="text-[20px] text-gray-700 font-bold uppercase py-5 text-center">
              Account Details
            </h2>
            <p className="text-md text-gray-500 text-center pb-10">This employee doesnt have account!</p>
            <Button name="Create account" type="button" onClick={createAccount} />
          </div>
        )}
      </div>
      <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-between p-5">
        <h2 className="text-[20px] text-gray-700 font-bold uppercase py-5 text-center">Details</h2>
        <div className="flex">
          <span className="px-[80px] pb-10">
            <p className="text-md text-gray-500">First Name:</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.name}</p>
            <p className="text-md text-gray-500">Last Name:</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.surname}</p>
            <p className="text-md text-gray-500">Adress:</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.adress}</p>
          </span>
          <span className="px-[80px] pb-10">
            <p className="text-md text-gray-500">Email:</p>
            <p className="mb-2 text-lg font-medium">{data?.employee.email_adress}</p>
            <p className="text-,d text-gray-500">Employment Date:</p>
            <p className="mb-2 text-lg font-medium">{formatedEmploymentDate}</p>
            <p className="text-md text-gray-500">Dismisal Date:</p>
            <p className="mb-2 text-lg font-medium">
              {formatedDismissalDate === "Jan 1, 1970" ? "No dismissal date" : formatedDismissalDate}
            </p>
          </span>
        </div>

        <Button name="Dismiss employee" type="button" onClick={handleDismissal} />
      </div>
    </div>
  );
};
