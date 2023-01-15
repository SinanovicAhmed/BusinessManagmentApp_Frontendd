import { SupplierRow } from "./SupplierRow";
import { getSuppliers } from "../../services/api/supplierAPI";
import { useQuery } from "react-query";
export const SupplierTable = () => {
  const { data, error, isLoading, isError } = useQuery(
    "suppliers",
    getSuppliers
  );
  console.log(data);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-4 py-3">
              Email
            </th>
            <th scope="col" className="px-4 py-3">
              UID
            </th>
            <th scope="col" className="px-4 py-3">
              VAT
            </th>
            <th scope="col" className="px-2 py-3">
              Contact
            </th>
            <th scope="col" className="px-2 py-3">
              Contact person
            </th>
            <th scope="col" className="pl-2 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((supplier) => (
            <SupplierRow {...supplier} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
