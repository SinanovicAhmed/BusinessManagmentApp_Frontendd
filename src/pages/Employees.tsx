import { useNavigate } from "react-router-dom";
import { EmployeeTable } from "../components/employees/EmployeeTable";
import { Button } from "../components/globalUI/Button";
import { Header } from "../components/globalUI/Header";

export const Employees = () => {
  const navigate = useNavigate();
  const navigateForm = () => {
    navigate("/managment/addemployee");
  };
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <div className="flex items-center pr-6">
        <Header
          header="Employees and accounts"
          paragraph="View details about employees and their website accounts."
        />
        <Button name="Add employee" type="button" onClick={navigateForm} />
      </div>
      <EmployeeTable />
    </div>
  );
};
