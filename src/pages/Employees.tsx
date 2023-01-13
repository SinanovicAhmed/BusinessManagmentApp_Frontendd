import { EmployeeHeader } from "../components/employees/EmployeeHeader";
import { EmployeeTable } from "../components/employees/EmployeeTable";

export const Employees = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <EmployeeHeader />
      <EmployeeTable />
    </div>
  );
};
