import { MaterialForm } from "../components/forms/MaterialForm";
import { Header } from "../components/globalUI/Header";

export const AddMaterial = () => {
  return (
    <div className="w-[100%] flex flex-wrap">
      <Header header="Add material" paragraph="Add new materials" />
      <MaterialForm />
    </div>
  );
};
