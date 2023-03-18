import { useParams } from "react-router-dom";
import { Header } from "../components/globalUI/Header";
import { DetailsHeroE } from "../components/employees/DetailsHeroE";
export const EmployeeDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-[100%] h-screen flex flex-col">
      <Header
        header="Employee details"
        paragraph="More detailed view about employee and his website account."
      />
      <DetailsHeroE id={id} />
    </div>
  );
};
