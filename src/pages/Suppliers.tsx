import { useMutation } from "react-query";
import { Button } from "../components/globalUI/Button";
import { Header } from "../components/globalUI/Header";
import { SupplierTable } from "../components/suppliers/SupplierTable";
import { useNavigate } from "react-router-dom";

export const Suppliers = () => {
  const navigate = useNavigate();
  const navigateForm = () => {
    navigate("/managment/addsupplier");
  };

  return (
    <div className="w-[100%] h-screen flex flex-col">
      <div className="flex items-center pr-6">
        <Header header="Suppliers" paragraph="View details about suppliers" />
        <Button name="Add supplier" type="button" onClick={navigateForm} />
      </div>
      <SupplierTable />
    </div>
  );
};
