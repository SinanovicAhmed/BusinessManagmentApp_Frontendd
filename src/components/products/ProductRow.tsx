import { Link, To } from "react-router-dom";
import { IProduct } from "../../services/Interfaces/product";

const ProductRow = ({ product }: { product: IProduct }) => {
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
        {product.product_name}
      </th>
      <td className="px-3 py-4 w-[55%]">{product.product_desc}</td>
      <td className="pl-3 pr-10 py-3 flex flex-col">
        {product.materials_needed.map((product, index) => (
          <div className="flex justify-between">
            <p>{index + 1 + ". " + product.material.material_name}</p>
            <br />
            <p>{product.quantity + product.material.unit_of_measure}</p>
          </div>
        ))}
      </td>
      <td className="px-3 py-3">{product.quantity}</td>
      <td className="pl-2 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          <Link
            to={
              {
                pathname: "/managment/addorder",
              } as To
            }
          >
            Create 1x
          </Link>
        </a>
      </td>
    </tr>
  );
};

export default ProductRow;
