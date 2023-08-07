import { useQuery } from "react-query";
import { OrderForm } from "../components/forms/OrderForm";
import { Header } from "../components/globalUI/Header";
import { getMaterials } from "../services/api/materialAPI";
import { getSuppliers } from "../services/api/supplierAPI";
import { Loading } from "../components/globalUI/Loading";

export const AddOrder = () => {
  const {
    data: materials,
    error: materialError,
    isLoading: materialLoading,
  } = useQuery(["materials"], getMaterials);
  const {
    data: suppliers,
    error: supplierError,
    isLoading: supplierLoading,
  } = useQuery(["supplier"], getSuppliers);

  if (materialError || supplierError) {
    return <h2>Problem with loading data</h2>;
  }

  return (
    <div className="w-[100%] flex flex-wrap">
      <Header header="Add order" paragraph="Add new orders" />
      {materialLoading || supplierLoading ? (
        <Loading />
      ) : (
        <OrderForm materials={materials!} suppliers={suppliers!} />
      )}
    </div>
  );
};
