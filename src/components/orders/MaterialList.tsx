import { IMaterialOrder } from "../../services/Interfaces/material";
import { MaterialListRow } from "./MaterialListRow";

export const MaterialList: React.FC<{ materials: IMaterialOrder[] }> = ({ materials }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[100%]">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
          <tr>
            <th scope="col" className="px-5 py-3">
              Material Name
            </th>
            <th scope="col" className="px-3 py-3">
              Quantity
            </th>

            <th scope="col" className="px-1 py-3">
              Unit of measure
            </th>
          </tr>
        </thead>
        <tbody>
          {materials?.map((material) => (
            <MaterialListRow material={material} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
