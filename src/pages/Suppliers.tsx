import { useMutation } from "react-query";
import { Button } from "../components/globalUI/Button";
import { Header } from "../components/globalUI/Header";
import { SupplierTable } from "../components/suppliers/SupplierTable";
import { addSupplier } from "../services/api/supplierAPI";
export const Suppliers = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <div className="flex items-center pr-6">
        <Header header="Suppliers" paragraph="View details about suppliers" />
        <Button name="Add supplier" type="button" />
      </div>
      <SupplierTable />
    </div>
  );
};
