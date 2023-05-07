import { EmployeeForm } from "../components/forms/EmployeeForm";
import { Header } from "../components/globalUI/Header";

export const AddEmployee = () => {
  return (
    <div className="w-[100%] flex flex-wrap">
      <Header
        header="Add employee"
        paragraph="Add new employee to bussiness managment system"
      />
      <EmployeeForm />
    </div>
  );
};
