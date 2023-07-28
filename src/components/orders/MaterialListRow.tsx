import { IMaterialOrder } from "../../services/Interfaces/material";

export const MaterialListRow: React.FC<{ material: IMaterialOrder }> = ({ material }) => {
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
        {material.material_id.material_name}
      </th>
      <td className="px-3 py-4">{material.quantity}</td>
      <td className="px-1 py-4">{material.material_id.unit_of_measure}</td>
    </tr>
  );
};
