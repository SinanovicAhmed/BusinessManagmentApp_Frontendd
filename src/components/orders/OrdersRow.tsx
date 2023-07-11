import { IOrder } from "../../services/Interfaces/order";

export const OrdersRow = ({ order }: { order: IOrder }) => {
  const date = new Date(order.expected_arrival);
  const exp_arrival_date = date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

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
            <br />
            {"2. " + order.ordered_materials[1].material_id.material_name}
          </>
        )}
        {order.ordered_materials[2]?.material_id.material_name && (
          <>
            <br />
            <br />
            {"3. " + order.ordered_materials[2].material_id.material_name}
          </>
        )}
      </td>
      <td className="px-1 py-4">
        {order.ordered_materials[0].quantity +
          order.ordered_materials[0].material_id.unit_of_measure}
        {order.ordered_materials[1]?.quantity && (
          <>
            <br />
            <br />
            {order.ordered_materials[1].quantity +
              order.ordered_materials[1].material_id.unit_of_measure}
          </>
        )}
        {order.ordered_materials[2]?.quantity && (
          <>
            <br />
            <br />
            {order.ordered_materials[2].quantity +
              order.ordered_materials[2].material_id.unit_of_measure}
          </>
        )}
      </td>
      <td className="px-1 py-4">{exp_arrival_date}</td>
      <td className="px-2 py-4">{order.order_status}</td>
      <td className="pl-2 py-4">
        <a href="#" className="font-medium text-blue-600 hover:underline"></a>
      </td>
    </tr>
  );
};
