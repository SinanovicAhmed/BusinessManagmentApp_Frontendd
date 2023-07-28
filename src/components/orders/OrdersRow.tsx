import { useNavigate } from "react-router-dom";
import { IOrder } from "../../services/Interfaces/order";
import { formatDate } from "../../helpers/formatDate";
export const OrdersRow = ({ order }: { order: IOrder }) => {
  const navigate = useNavigate();
  const expected_arrival = formatDate(order.expected_arrival);

  const navigateToDetails = () => {
    navigate(`/managment/orderdetails/${order._id}`, { state: { order } });
  };

  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
        {order.supplier_id.supplier_name}
      </th>
      <td className="px-3 py-4">{order.supplier_id.phone_number}</td>
      <td className="px-1 py-4">
        {"1. " + order.ordered_materials[0].material_id.material_name}
        {order.ordered_materials[1]?.material_id.material_name && (
          <>
            <br />
            {"2. " + order.ordered_materials[1].material_id.material_name}
          </>
        )}
        {order.ordered_materials[2]?.material_id.material_name && (
          <>
            <br />
            {"3. " + order.ordered_materials[2].material_id.material_name}
          </>
        )}
      </td>
      <td className="px-1 py-4">
        {order.ordered_materials[0].quantity + " " + order.ordered_materials[0].material_id.unit_of_measure}
        {order.ordered_materials[1]?.quantity && (
          <>
            <br />
            {order.ordered_materials[1].quantity + " " + order.ordered_materials[1].material_id.unit_of_measure}
          </>
        )}
        {order.ordered_materials[2]?.quantity && (
          <>
            <br />
            {order.ordered_materials[2].quantity + " " + order.ordered_materials[2].material_id.unit_of_measure}
          </>
        )}
      </td>
      <td className="px-1 py-4">{expected_arrival}</td>
      <td className="px-2 py-4">{order.order_status}</td>

      <td className="pl-2 py-3">
        <button className="font-medium text-blue-600 hover:underline" onClick={navigateToDetails}>
          Details
        </button>
      </td>
    </tr>
  );
};
