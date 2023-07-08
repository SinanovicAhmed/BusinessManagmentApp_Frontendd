import { Button } from "../components/globalUI/Button";
import { Header } from "../components/globalUI/Header";
import { MaterialTable } from "../components/materials/MaterialTable";

export const Materials = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <div className="flex items-center pr-6">
        <Header header="Materials" paragraph="View details about materials and their quantity." />
        <Button name="Add materials" type="button" />
      </div>
      <MaterialTable />
    </div>
  );
};
