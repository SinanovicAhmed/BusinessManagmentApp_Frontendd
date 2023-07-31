import { useMutation, useQuery } from "react-query";
import { changeOrderStatus, finishOrder, getOrderDetails } from "../../services/api/orderAPI";
import { useState } from "react";
import { IOrder, IOrderMaterials, IOrderStatus } from "../../services/Interfaces/order";
import { formatDate } from "../../helpers/formatDate";
import { MaterialList } from "./MaterialList";

const statusOptions = ["Processing", "In transit", "Canceled", "Delivered"];

export const OrderDetailsHero: React.FC<{ order: IOrder }> = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState(order?.order_status);

  const { mutate: completeOrder } = useMutation((orderMaterials: IOrderMaterials[]) =>
    finishOrder(orderMaterials)
  );

  const { mutate: changeStatus } = useMutation((orderData: IOrderStatus) => changeOrderStatus(orderData), {
    onSuccess: (data) => {
      if (data?.order_status === "Delivered") {
        completeOrder(data.ordered_materials);
      }
      setOrderStatus(data.order_status);
    },
  });

  const updateOrderStatus = (status: string) => {
    if (order) {
      changeStatus({ id: order._id, status: status });
    }
  };

  const expected_arrival = formatDate(order.expected_arrival);

  return (
    <>
      {order && (
        <div className="w-[100%] max-w-[1500px] h-[100%] flex flex-col p-5">
          <h2 className="text-[20px] text-gray-700 font-black uppercase mb-2 border-b-2 border-gray-300">
            Supplier details
          </h2>
          <div className="w-full flex justify-between pr-5 pt-5">
            <span>
              <span className="text-black font-medium text-[20px]">Company:</span>
              <span className="text-gray-500 text-[20px]"> {order?.supplier_id.supplier_name}</span>
            </span>
            <span>
              <span className="text-black font-medium text-[20px]">Contact person:</span>
              <span className="text-gray-500 text-[20px]"> {order?.supplier_id.contact_person}</span>
            </span>
            <span>
              <span className="text-black font-medium text-[20px]">Email:</span>
              <span className="text-gray-500 text-[20px]"> {order?.supplier_id.email_adress}</span>
            </span>
            <span>
              <span className="text-black font-medium text-[20px]">Contact:</span>{" "}
              <span className="text-gray-500 text-[20px]"> {order?.supplier_id.phone_number}</span>
            </span>
          </div>
          <h2 className="text-[20px] text-gray-700 font-black uppercase mb-2 border-b-2 border-gray-300 pt-8 mb-5">
            Order
          </h2>
          <div className="w-full flex justify-between h-[100%]">
            <div className="flex flex-col justify-around h-[100%]">
              <span>
                <span className="text-black font-medium text-[20px]">Order status: </span>
                {orderStatus !== "Delivered" ? (
                  <select
                    className="text-gray-500 text-[20px]"
                    value={orderStatus}
                    onChange={(e) => {
                      updateOrderStatus(e.target.value);
                    }}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded">
                    {orderStatus}
                  </span>
                )}
              </span>
              <span>
                <span className="text-black font-medium text-[20px]">Expected arrival: </span>
                <span className="text-gray-500 text-[20px]">{expected_arrival}</span>
              </span>
              <span>
                <span className="text-black font-medium text-[20px]">Date of arrival: </span>
                <span className="text-gray-500 text-[20px]">Not arrived yet</span>
              </span>
            </div>
            <div className="flex flex-col min-w-[600px]">
              <MaterialList materials={order.ordered_materials} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
