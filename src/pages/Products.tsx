import { useNavigate } from "react-router-dom";
import { Button } from "../components/globalUI/Button";
import { Header } from "../components/globalUI/Header";
import ProductsTable from "../components/products/ProductsTable";

export const Products = () => {
  const navigate = useNavigate();

  const navigateProduct = () => {
    navigate("/managment/addproduct");
  };
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <div className="flex items-center pr-6">
        <Header header="Products" paragraph="Create products and track their quantity" />
        <Button name="Create product" type="button" onClick={navigateProduct} />
      </div>
      <ProductsTable />
    </div>
  );
};
