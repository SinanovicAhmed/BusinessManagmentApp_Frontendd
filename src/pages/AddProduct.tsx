import { useQuery } from "react-query";
import ProductForm from "../components/forms/ProductForm";
import { Header } from "../components/globalUI/Header";
import { getMaterials } from "../services/api/materialAPI";
import { Loading } from "../components/globalUI/Loading";

const AddProduct = () => {
  const { data, error, isLoading } = useQuery("materials", getMaterials);
  if (error) return <h2>Problem with loading data</h2>;
  return (
    <div className="w-[100%] flex flex-wrap">
      <Header header="Create account" paragraph="Create account for already existing employee" />
      {isLoading ? <Loading /> : <ProductForm materials={data!} />}
    </div>
  );
};

export default AddProduct;
