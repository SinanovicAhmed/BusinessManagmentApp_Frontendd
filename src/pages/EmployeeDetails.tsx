import { useParams } from "react-router-dom";
import { Header } from "../components/globalUI/Header";
import { DetailsHero } from "../components/employees/DetailsHero";
export const EmployeeDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-[100%] h-screen flex flex-col">
      <Header
        header="Employee details"
        paragraph="More detailed view about employee and his website account."
      />
      <DetailsHero id={id} />
    </div>
  );
};
