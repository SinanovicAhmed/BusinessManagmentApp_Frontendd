import { useParams } from "react-router-dom";
import { Header } from "../components/globalUI/Header";
import { DetailsHeroS } from "../components/suppliers/DetailsHeroS";
export const SupplierDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-[100%] h-screen flex flex-col">
      <Header
        header="Supplier details"
        paragraph="More detailed view about suppliers."
      />
      <DetailsHeroS id={id} />
    </div>
  );
};
