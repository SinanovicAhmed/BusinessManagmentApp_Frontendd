import { EmployeeTable } from "../components/employees/EmployeeTable";
import { Header } from "../components/globalUI/Header";

export const Employees = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <Header
        header="Employees and accounts"
        paragraph="View details about employees and their website accounts."
      />
      <EmployeeTable />
    </div>
  );
};
