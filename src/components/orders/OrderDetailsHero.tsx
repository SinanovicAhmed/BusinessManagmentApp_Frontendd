import { useMutation, useQuery } from "react-query";
import { changeOrderStatus, getOrderDetails } from "../../services/api/orderAPI";
import { Loading } from "../globalUI/Loading";
import { useState } from "react";
import { IOrderStatus } from "../../services/Interfaces/order";

const statusOptions = ["Processing", "In transit", "Delivered", "Canceled"];

export const OrderDetailsHero: React.FC<{ id: string | undefined }> = ({ id }) => {
  const {
    isLoading,
    data: order,
    refetch,
  } = useQuery(["order", id], () => getOrderDetails(id), {
    onSuccess: (data) => {
      setOrderStatus(data.order_status);
    },
  });
  const { mutate } = useMutation((orderData: IOrderStatus) => changeOrderStatus(orderData), {
    onSuccess: (data) => {
      if (data) {
        setOrderStatus(data.order_status);
        refetch();
      }
    },
  });
  const [orderStatus, setOrderStatus] = useState(order?.order_status);
  const updateOrderStatus = (status: string) => {
    mutate({ id: order?._id, status: status });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="w-[100%] max-w-[1500px] flex flex-col p-5">
      <h2 className="text-[20px] text-gray-700 font-bold uppercase mb-2 border-b-2 border-gray-300">
        Supplier details
      </h2>
      <div className="w-full flex justify-between pr-5 pt-5">
        <span>
          <span className="text-black font-medium text-[20px]">Name:</span>
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
      <h2 className="text-[20px] text-gray-700 font-bold uppercase mb-2 border-b-2 border-gray-300 pt-10 mb-5">
        Order
      </h2>
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <span>
            <span className="text-black font-medium text-[20px]">Order status: </span>
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
          </span>
        </div>
      </div>
    </div>
  );
};
