import { toast } from "react-toastify";
import { ICreateProduct, IProduct } from "../../services/Interfaces/product";
import { useMutation, useQueryClient } from "react-query";
import { createProduct } from "../../services/api/productAPI";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductRow = ({ product }: { product: IProduct }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate } = useMutation(
    (requested_product: ICreateProduct) => createProduct(requested_product),
    {
      onSuccess: () => {
        toast.success("Product created successfully!");
        queryClient.invalidateQueries("products");
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.message);
        }
      },
    }
  );
  const confirmCreate = () => {
    let transformed_materials = [];
    for (const material of product.materials_needed) {
      transformed_materials.push({ material_id: material.material._id!, quantity: material.quantity });
    }
    const requested_product = { product_id: product._id!, materials_needed: transformed_materials };
    mutate(requested_product);
  };
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
        {product.product_name}
      </th>
      <td className="px-3 py-4 w-[55%]">{product.product_desc}</td>
      <td className="pl-3 pr-10 py-3 flex flex-col max-w-[200px]">
        {product.materials_needed.map((product, index) => (
          <div className="flex py-1">
            <p className="w-[80%]">{index + 1 + ". " + product.material.material_name}</p>
            <p className="w-[20%]">{product.quantity + product.material.unit_of_measure}</p>
          </div>
        ))}
      </td>
      <td className="px-3 py-3">{product.quantity}</td>
      <td className="pl-2 py-4">
        <button
          disabled={isLoading}
          className="font-medium text-blue-600 hover:underline disabled:grayscale"
          onClick={confirmCreate}
        >
          Create 1x
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
