import { useQuery } from "react-query";
import { getOrders } from "../../services/api/orderAPI";
import { OrdersRow } from "./OrdersRow";
import { Loading } from "../globalUI/Loading";

export const OrdersTable = () => {
  const { data, isLoading, isError } = useQuery("orders", getOrders);

  if (isLoading) return <Loading />;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
          <tr>
            <th scope="col" className="px-5 py-3">
              Supplier
            </th>
            <th scope="col" className="px-3 py-3">
              Number
            </th>
            <th scope="col" className="px-1 py-3">
              Materials
            </th>
            <th scope="col" className="px-1 py-3">
              Quantity
            </th>
            <th scope="col" className="px-1 py-3">
              Exp. Arrival
            </th>
            <th scope="col" className="px-2 py-3">
              Status
            </th>

            <th scope="col" className="pl-2 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order) => (
            <OrdersRow order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
