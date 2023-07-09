import { IMaterial } from "../../services/Interfaces/material";
import { Link, To } from "react-router-dom";
export const MaterialRow = ({ material }: { material: IMaterial }) => {
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
        {material.material_name}
      </th>
      <td className="px-3 py-4">{material.quantity}</td>
      <td className="px-3 py-4">{material.min_quantity}</td>
      <td className="px-1 py-4">{material.unit_of_measure}</td>
      <td className="px-1.5 py-4">
        {material.quantity! > material.min_quantity! ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Enough
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Not enough
          </span>
        )}
      </td>
      <td className="pl-2 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          <Link
            to={
              {
                pathname: "/managment/" + material._id,
                state: { id: material._id },
              } as To
            }
          >
            Order
          </Link>
        </a>
      </td>
    </tr>
  );
};
