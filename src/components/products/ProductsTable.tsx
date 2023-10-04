import { useQuery } from "react-query";
import { getProducts } from "../../services/api/productAPI";
import ProductRow from "./ProductRow";

const ProductsTable = () => {
  const { data, isLoading, error } = useQuery("products", getProducts);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
          <tr>
            <th scope="col" className="px-5 py-3">
              Product Name
            </th>
            <th scope="col" className="px-3 py-3">
              Product description
            </th>
            <th scope="col" className="pl-3 pr-10 py-3">
              Materials needed
            </th>
            <th scope="col" className="px-3 py-3">
              Quantity
            </th>

            <th scope="col" className="pl-2 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            <ProductRow product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
